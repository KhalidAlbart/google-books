import { combineReducers } from 'redux'
import { bookCollectionReducer } from './bookCollection'

const reducers = combineReducers({
    collection: bookCollectionReducer
})

export default reducers