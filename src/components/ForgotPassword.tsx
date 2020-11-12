import React, { useState } from 'react';
import { Form, Input } from 'reactstrap';
import { emptyUser } from '../interfaces';

const ForgotPassword: React.FC = () => {

    const [user, setUser] = useState(emptyUser);
    
    const sendEmail = (e:React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();


    }

    return (
        <div>
            <Form onSubmit={sendEmail}>
                <label>Enter your email: 
                    <Input 
                        type="email"
                    />
                    <Input
                        type="submit"
                    />
                </label>
            </Form>
        </div>
    );
}