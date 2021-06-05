import { actions } from '../actions/stream.action';
const { REACT_APP_API_URL } = process.env;

function fetchStreams(search) {
    return dispatch => {
        dispatch(actions.searchStreamPending(search));
        fetch(`${REACT_APP_API_URL}stream?username=${search}`)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(actions.searchStreamSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(actions.searchStreamError(error));
            })
    }
}

export default fetchStreams;