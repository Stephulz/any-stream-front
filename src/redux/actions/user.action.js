import { actionsTypes } from '../constants/stream'

const actions = {
    searchStream: search => ({
        type: actionsTypes.SEARCH_STREAM,
        payload: search
    })
}

export { actions };