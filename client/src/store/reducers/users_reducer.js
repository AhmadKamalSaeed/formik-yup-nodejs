import {
    AUTH_USER, GET_USERS, SIGN_OUT, GET_USER,EDIT_USER
} from '../types';

let DEFAULT_USER_STATE = {
    data: {
        _id: null,
        email: null,
        firstname:null,
        lastname:null,
        age:null,
        role:null
    },
    auth:null
}


export default function usersReducer(state=DEFAULT_USER_STATE,action){
    switch(action.type){
        case AUTH_USER:
            return { ...state,
                data: { ...state.data, ...action.payload.data},
                auth: action.payload.auth
            }
            case EDIT_USER:
            return { ...state,
                data: { ...state.data, ...action.payload.data},
                auth: action.payload.auth
            }
            case SIGN_OUT:
            return {...state,
                data: {...DEFAULT_USER_STATE.data},
                auth: false
            }
            case GET_USER:
            return{...state, users:action.payload}
            case GET_USERS:
            return{...state, users:action.payload}
        default:
            return state
    }
}