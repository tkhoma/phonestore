import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import api from '../middleware/api'
import { createLogger } from 'redux-logger'

export default function configureStore(initialState) {
    let loggerMiddleware = createLogger();

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, api, loggerMiddleware)
        )
    );

    return store;
}
