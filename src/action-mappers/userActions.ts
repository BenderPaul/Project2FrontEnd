import { IUser } from "../interfaces"
import * as actionTypes from "./userActionTypes"

// This function will dispatch an action to add a user
export function registerUser(user: IUser) {
    const action = {
        type: actionTypes.REGISTER_USER,
        user
    }

    return action;
}

export function updateUser(user: IUser) {
    const action = {
        type: actionTypes.UPDATE_USER,
        user
    }

    return action;
}

// This function will dispatch an action to delete a user
export function removeUser(user: IUser) {
    const action = {
        type: actionTypes.REMOVE_USER,
        user,
    }
    
    return action;
}
