import * as React from 'react';
import { registerUser } from '../action-mappers/userActions';
import {  IUser } from '../interfaces';
import { store } from '../Store';
import { Button, Form } from 'reactstrap'
import "../style sheets/Navbar.scss";

//Form to register new user
export const RegisterUser: React.FC<IUser> = (props:IUser) => {

    //object to store user information
    const activeUser: IUser = {
        id: 0,
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '',
        phoneNumber: '',
        occupation: '',
        bio: '',
        address: '',
        dob: '',
    };

    //sets values from form into activeUser, creates the action, and then dispatches to the reducers
    const addNewUser = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        activeUser.firstName = e.currentTarget["firstName"].value;
        activeUser.lastName = e.currentTarget["lastName"].value;
        activeUser.username = e.currentTarget["username"].value;
        activeUser.password = e.currentTarget["password"].value;
        activeUser.email = e.currentTarget["email"].value;

        const action = registerUser(activeUser);

        store.dispatch(action);

        //send a request to create user, inform user if the request was successful
    }

        //This is the part thats rendered
    return (
        <div className="register">
            <h1 className="head">Register New User</h1>
            <Form onSubmit = {addNewUser} className = "addUser">
                <input
                    className="fInput"
                    type = "text"
                    name = "username"
                    placeholder = "Username"
                    required
                />
                <br/>
                <input
                    className="fInput"
                    type = "text"
                    name = "password"
                    placeholder = "Password"
                    required
                />
                <br/>
                <div>
                    <input
                        className="fInput"
                        type = "text"
                        name = "firstName"
                        placeholder = "First Name"
                        required
                    />
                    <input
                        className="fInput"
                        type = "text"
                        name = "lastName"
                        placeholder = "Last Name"
                        required
                    />
                </div>
                <input
                    className="fInput"
                    type = "text"
                    name = "email"
                    placeholder = "Email"
                    required
                />
                <br/>
                <Button color="success" type="submit" className="submit">
                    Register New User
                </Button>
            </Form>
        </div>
    )
}