let API_ROOT = 'http://172.17.0.1:8080';

const callApi = (endpoint, store, method, body) => {
  const fullUrl = API_ROOT + '/' + endpoint;
  let apiHeaders = new Headers();
  apiHeaders.append('Content-Type', 'application/json');

  return fetch(fullUrl, {
      body: JSON.stringify(body),
      headers: apiHeaders,
      method: method
  })
  .then(response => {
      if (response.status == 200) {
          return response.json().then(json => ({json, response }))
      }
  })
  .then(({json, response}) => {
      const result = {
          data: json
      }
      return result
  })
  .catch((err) =>
    Promise.reject(err)
  );
}

export const CALL_API = Symbol('Call API');


// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint, method } = callAPI
  const { types, body } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType, ...body }))

  return callApi(endpoint, store, method, body).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      ...body,
      error: error.message || 'Something bad happened'
    }))
  )
}
