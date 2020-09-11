import { combineReducers } from 'redux'
import usersReducer from './reducers'


const rootReducer = combineReducers({
    usersReducer: usersReducer
})

export default rootReducer