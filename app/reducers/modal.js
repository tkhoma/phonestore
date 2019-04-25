import { OPEN_MODAL, CLOSE_MODAL } from '../ActionTypes'

export function modal(state = {}, action) {
    switch (action.type) {
        case CLOSE_MODAL:
            return {
                modalOpen: false
            }
        case OPEN_MODAL:
            return {
                modalOpen: true
            }
        default:
            return state
    }
}
