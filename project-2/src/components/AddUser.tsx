import * as React from 'react';
import { addUser } from '../action-mappers/userActions';
import { IUser } from '../interfaces';
import { store } from '../Store';


//Form to register new user
export const AddUser: React.FC = () => {

    //object to store user information
    const activeUser: IUser = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: ''
    };

    //prevents button from being clicked until information is stored
    const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
    }

    //sets values from form into activeUser, creates the action, and then dispatches to the reducers
    const addNewUser = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        activeUser.firstName = e.currentTarget["firstName"].value;
        activeUser.lastName = e.currentTarget["lastName"].value;
        activeUser.username = e.currentTarget["username"].value;
        activeUser.password = e.currentTarget["password"].value;
        activeUser.email = e.currentTarget["email"].value;

        const action = addUser(activeUser);

        store.dispatch(action);
    }

        //This is the part thats rendered
    return (
        <form onSubmit = {addNewUser} className = "addUser">
            <input
                type = "text"
                name = "username"
                placeholder = "Username"
                onChange={handleUserData}
            />
            <br/>
            <input
                type = "text"
                name = "password"
                placeholder = "Password"
                onChange={handleUserData}
            />
            <br/>
            <input
                type = "text"
                name = "firstName"
                placeholder = "First Name"
                onChange={handleUserData}
            />
            <br/>
            <input
                type = "text"
                name = "lastName"
                placeholder = "Last Name"
                onChange={handleUserData}
            />
            <br/>
            <input
                type = "text"
                name = "email"
                placeholder = "Email"
                onChange={handleUserData}
            />
            <br/>
            <button disabled = {activeUser === undefined ? true : false}>
                Register New User
            </button>
        </form>
    )
}