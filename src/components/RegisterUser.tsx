import * as React from 'react';
import { registerUser } from '../action-mappers/userActions';
import {  baseUrl, emptyUser, IUser } from '../interfaces';
import { store } from '../Store';
import { Button, Form } from 'reactstrap'
import "../style sheets/Register.scss";
import Axios from 'axios';
import AWS from 'aws-sdk';
import { sesConfig } from '../S3Config';

//Form to register new user
export const RegisterUser: React.FC<IUser> = (props:IUser) => {

    //object to store user information
    const activeUser: IUser = emptyUser;

    //prints error message if the passwords do not match

    //sets values from form into activeUser, creates the action, and then dispatches to the reducers
    const addNewUser = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (e.currentTarget["password"].value === e.currentTarget["confirmPassword"].value) {
            activeUser.username = e.currentTarget["username"].value;
            activeUser.password = e.currentTarget["password"].value;
            activeUser.email = e.currentTarget["email"].value;

            const SES = new AWS.SES(sesConfig);

            SES.verifyEmailIdentity({
                EmailAddress: activeUser.email
            }, async function(err, data) {
                if (err) console.error("Could not verify email: ", err.stack);
                else {
                    alert("Check your email to verify your account!")
                    const action = registerUser(activeUser);

                    const response = await Axios.post(`${baseUrl}/user/newuser`, activeUser);

                    if(response){
                        store.dispatch(action);
                        window.location.pathname = "/profile/edit";
                    }
                    else {
                        alert("Username and/or email has been taken.");
                    }
                
                };
            });
        }
        else {
            alert("The passwords need to match!");
        }

    }

        //This is the part thats rendered
    return (
        <div id="full">
            <div id="parentRegister">
                <div id="register">
                    <h1 id="head">Register New User</h1>
                    <Form data-testid="registerForm" onSubmit = {addNewUser} id = "addUser">
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
                        <br/>
                        <Button color="warning" type="submit" id="submit">
                            Register
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}