import AWS from 'aws-sdk';
import Axios from 'axios';
import React, { useState } from 'react';
import { Form, Input } from 'reactstrap';
import { baseUrl, emptyUser } from '../interfaces';
import { sesConfig } from '../S3Config';

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
            .then(() => Axios.post(`${baseUrl}/user/update`, user));
    }

    return (
        <div>
            <h3 id="forgot">Forgot Password</h3>
            <Form onSubmit={sendEmail}>
                <label id="label">Enter your email: 
                    <Input 
                        type="email"
                        name="email"
                        defaultValue=""
                    />
                    <Input
                        type="submit"
                    />
                </label>
            </Form>
        </div>
    );
}