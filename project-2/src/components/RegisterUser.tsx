import * as React from 'react';
import { addUser } from '../action-mappers/userActions';
import { IUser } from '../interfaces';
import { store } from '../Store';
import { Button, Form } from 'reactstrap'
import "../style sheets/Navbar.scss";
import RegisterUserContainer from './RegisterUserContainer';

//Form to register new user
export const RegisterUser: React.FC = () => {

    //object to store user information
    const activeUser: IUser = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: ''
    };

    //prevents button from being clicked until information is stored
    // const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    // }

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

        window.location.pathname = "/";
    }

        //This is the part thats rendered
    return (
        <div className="register">
            <h1>Register New User</h1>
            <Form onSubmit = {addNewUser} className = "addUser">
                <input
                    className="fInput"
                    type = "text"
                    name = "username"
                    placeholder = "Username"
                    // onChange={handleUserData}
                />
                <br/>
                <input
                    className="fInput"
                    type = "text"
                    name = "password"
                    placeholder = "Password"
                    // onChange={handleUserData}
                />
                <br/>
                <input
                    className="fInput"
                    type = "text"
                    name = "firstName"
                    placeholder = "First Name"
                    // onChange={handleUserData}
                />
                <br/>
                <input
                    className="fInput"
                    type = "text"
                    name = "lastName"
                    placeholder = "Last Name"
                    // onChange={handleUserData}
                />
                <br/>
                <input
                    className="fInput"
                    type = "text"
                    name = "email"
                    placeholder = "Email"
                    // onChange={handleUserData}
                />
                <br/>
                <Button outline color="success" type="submit" disabled = {activeUser === undefined ? true : false}>
                    Register New User
                </Button>
            </Form>
        </div>
    )
}