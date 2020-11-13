import AWS from 'aws-sdk';
import Axios from 'axios';
import React, { useState } from 'react';
import { Form, Input } from 'reactstrap';
import { baseUrl, emptyUser } from '../interfaces';
import { sesConfig } from '../S3Config';
import "../style sheets/ForgotPassword.scss";

export const ForgotPassword: React.FC = () => {

    const [user, setUser] = useState(emptyUser);
    
    const sendEmail = async (e:React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = e.currentTarget["email"].value;

        //Configuration for the email
        let sesParams = {
            Destination: {
                ToAddresses: [
                    email
                ]
            },
            Message: {
                Body: {
                    Text: {
                        Charset: "UTF-8",
                        Data: "Your password has been temporarily set as 1234, please log on to your account and reset your password."
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Password Recovery'
                }
            },
            Source: 'benderp94@gmail.com', //Verified with AWS
        }

        //Create the promise and SES service object
        const sendPromise =new AWS.SES(sesConfig).sendEmail(sesParams).promise();

        //Send and handle the promise
        sendPromise.then(
            function(data) {
            console.log(data.MessageId);
            }).catch(
            function(err) {
            console.error(err, err.stack);
            });


        Axios.get(`${baseUrl}/user/findbyemail?email=${email}`)
            .then((response) => setUser(response.data))
            .then(() => user.password = "1234")
            .then(() => Axios.post(`${baseUrl}/user/update`, user))
            .then(() => window.location.pathname = "/");
    }

    return (
        <div>
            <h3 id="forgot" className="forgotTitle">Forgot Your Password?</h3>
            <br/>
            <Form onSubmit={sendEmail}>
                <br/>
                    <Input 
                        type="email"
                        name="email"
                        defaultValue=""
                        className="emailBar"
                        placeholder="Email"
                    />
                    <br/>
                    <div id="forgot-button">
                        <input
                            type="submit"
                            className="submitInput"
                        />
                    </div>
            </Form>
        </div>
    );
}