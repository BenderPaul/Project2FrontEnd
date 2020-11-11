import { IUser, IUserState, UserAction } from "../interfaces"
import * as actionTypes from "../action-mappers/userActionTypes"


//This is the initial state of user
const initialState: IUser = {

        id: 0,
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "", 
        occupation: "",
        bio: "",
        address: "",
        dob: ""


}
// The reducer function 
    //The reducer function, in this case, alters the global state of Users
export const userReducer = (
    state = initialState,
    action:UserAction,
) => {
    //Create a switch statement to alter the reducer between ADD and REMOVE action types
    switch (action.type) {
        //If the action is to add a user, take the User props and concat the new user object onto the global state
        case actionTypes.REGISTER_USER:
            const newUser: IUser = {
                id: 0,
                username: action.user.username,
                password: action.user.password,
                firstName: "",
                lastName: "",
                email: action.user.email,
                phoneNumber: "", 
                occupation: "",
                bio: "",
                address: "",
                dob: ""
            }
            state = newUser;
            console.log(newUser);
            return {
                ...newUser
            }
        case actionTypes.UPDATE_USER:
            const updatedUser: IUser = {
                id: action.user.id,
                username: action.user.username,
                password: action.user.password,
                firstName: action.user.firstName,
                lastName: action.user.lastName,
                email: action.user.email,
                phoneNumber: action.user.phoneNumber,
                occupation: action.user.occupation,
                bio: action.user.bio,
                address: action.user.address,
                dob: action.user.dob,
            }
            
            return {
                ...updatedUser
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
            return initialState
    }
}