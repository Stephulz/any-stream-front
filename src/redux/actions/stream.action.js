import { actionsTypes } from '../constants/stream'

const actions = {
    searchStreamPending: search => ({
        type: actionsTypes.SEARCH_STREAM_PENDING,
        payload: search
    }),
    searchStreamSuccess: streams => ({
        type: actionsTypes.SEARCH_STREAM_SUCCESS,
        payload: streams
    }),
    searchStreamError: error => ({
        type: actionsTypes.SEARCH_STREAM_ERROR,
        error: error
    })
}

export { actions };