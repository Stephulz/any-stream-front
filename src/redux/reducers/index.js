import { combineReducers } from 'redux'
import { reducers as streamReducer } from './stream.reducer'

const reducers = combineReducers({
    streamReducer
})

export { reducers };