import { IUser } from "../interfaces"
import * as actionTypes from "../action-mappers/userActionTypes"

//This is the initial state of global users
const initialState: IUser = {

    username: "none",
    password: "none",
    firstName: "none",
    lastName: "none",
    email: "none",

}
// The reducer function 
    //The reducer function, in this case, alters the global state of Users
export const userReducer = (
    state = initialState,
    action:any,
) => {
    //Create a switch statement to alter the reducer between ADD and REMOVE action types
    switch (action.type) {
        //If the action is to add a user, take the User props and concat the new user object onto the global state
        case actionTypes.ADD_USER:
            const newUser: IUser = {
                username: action.payload.user.username,
                password: action.payload.user.password,
                firstName: action.payload.user.firstName,
                lastName: action.payload.user.lastName,
                email: action.payload.user.email,
            }
            state = newUser;
            return {
                ...state,
                newUser
            }
        // If the action is to remove a user, then remove the user by prop=ID from the global state    
    //     case actionTypes.REMOVE_USER:
    //         const updatedUsers: IUser[] = state.users.filter(
    //             user => user.id !== action.user.id,
    //         )
    //         return {
    //             ...state,
    //             users: updatedUsers,
    //         }
    // }
    //Return the newly updated state
        default:
            return state
    }
}