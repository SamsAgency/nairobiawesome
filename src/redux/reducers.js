import { FETCHING_USERS, FETCHING_USERS_SUCCESS, FETCHING_USERS_FAILURE } from "./type"

const InitialState = {
    loading: false,
    users: [],
    error: ''
}

const usersReducer = (state = InitialState, action) => {
    switch(action.type){
        case FETCHING_USERS:
            return {
                ...state,
                loading: true
            }
        case FETCHING_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCHING_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}
export default usersReducer