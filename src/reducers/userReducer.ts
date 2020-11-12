import { emptyUser, IUser, UserAction } from "../interfaces"
import * as actionTypes from "../action-mappers/userActionTypes"


//This is the initial state of user
const initialState: IUser = emptyUser;
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
            const newUser: IUser = emptyUser;
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
                firstname: action.user.firstname,
                lastname: action.user.lastname,
                email: action.user.email,
                phoneNumber: action.user.phoneNumber,
                occupation: action.user.occupation,
                bio: action.user.bio,
                address: action.user.address,
                dob: action.user.dob,
                profilePicture: action.user.profilePicture
            }
            
            return {
                ...updatedUser
            }
        default:
            return initialState
    }
}