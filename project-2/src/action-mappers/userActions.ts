import { IUser } from "../interfaces"
import * as actionTypes from "./userActionTypes"

// This function will dispatch an action to add a user
export function addUser(user: IUser) {
    const action = {
        type: actionTypes.ADD_USER,
        payload: {
            user,
        }
    }

    return action;
}
// This function will dispatch an action to delete a user
export function removeUser(user: IUser) {
    const action = {
        type: actionTypes.REMOVE_USER,
        payload: {
            user,
        }
    }
    
    return action;
}
