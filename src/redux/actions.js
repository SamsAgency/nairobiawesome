import { FETCHING_USERS, FETCHING_USERS_SUCCESS, FETCHING_USERS_FAILURE } from './type';
import axios from 'axios';

export const fetchingUsers = () => {
    return {
        type: FETCHING_USERS
    }
}

export const fetchingUsersSuccess = (users) => {
    return {
        type : FETCHING_USERS_SUCCESS,
        payload: users
    }
}

export const fetchingUsersFailure = (error) => {
    return {
        type: FETCHING_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchingUsers)

        axios.get('https://rickandmortyapi.com/api/character/')
        .then(
            response => {
                const users = response.data
                dispatch(fetchingUsersSuccess(users))
                console.log(users)
            }
        )
        .catch(
            error => {
                dispatch(fetchingUsersFailure(error))
                console.log(error)
            }
        )
    }
}