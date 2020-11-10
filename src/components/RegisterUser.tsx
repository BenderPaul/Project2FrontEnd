import * as React from 'react';
import { registerUser } from '../action-mappers/userActions';
import {  IUser } from '../interfaces';
import { store } from '../Store';
import { Button, Form } from 'reactstrap'
import "../style sheets/Register.scss";
import Axios from 'axios';

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

    //prints error message if the passwords do not match
    const [error, setError] = React.useState("");

    //sets values from form into activeUser, creates the action, and then dispatches to the reducers
    const addNewUser = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (e.currentTarget["password"].value === e.currentTarget["confirmPassword"].value) {
            if (error) {
                setError("");
            }

            activeUser.username = e.currentTarget["username"].value;
            activeUser.password = e.currentTarget["password"].value;
            activeUser.email = e.currentTarget["email"].value;

            const action = registerUser(activeUser);

            const response = await Axios.post('http://34.211.139.29:8081/StickyDB/user/newuser', activeUser);

            if(await response){
                store.dispatch(action);
                window.location.pathname = "/profile/edit";
            }
            else {
                setError("Username and/or email has been taken.");
            }

            //send a request to create user, inform user if the request was successful
            // const json = await JSON.stringify(response.data);
            // console.log(json);
        }
        else {
            setError("The passwords need to match!");
        }

    }

        //This is the part thats rendered
    return (
        <div className="full">
            <div className="parentRegister">
                <div className="register">
                    <h1 className="head">Register New User</h1>
                    <Form onSubmit = {addNewUser} className = "addUser">
                        <label className="label">Username:
                            <input
                                className="fInput"
                                type = "text"
                                name = "username"
                                id = "username"
                                placeholder = "Username"
                                required
                            />
                        </label>
                        <br/>
                        <label className="label">Email:
                            <input
                                className="fInput"
                                type = "email"
                                name = "email"
                                placeholder = "Email"
                                required
                            />
                        </label>
                        <br/>
                        <label className="label">Password:
                            <input
                                className="fInput"
                                type = "password"
                                name = "password"
                                placeholder = "Password"
                                required
                            />
                        </label>
                        <br/>
                        <label className="label">Confirm Password:
                            <input
                                className="fInput"
                                type = "password"
                                name = "confirmPassword"
                                placeholder = "Password"
                                required
                            />
                        </label>
                        <p className="notEqual">{error}</p>
                        <Button color="warning" type="submit" className="submit">
                            Register
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}