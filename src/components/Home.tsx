import React from 'react';
import { Form, Button, Input } from 'reactstrap';
import { IPost, IUser } from '../interfaces';
import { Post } from './Post';

export const Home: React.FC = () => {

    const user:IUser = {
        id: 0,
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        bio: "",
        occupation: "",
        dob: "",
        phoneNumber: "",
        address: ""
    };



    return (
        <div>
            <Form inline>
            <Input type="text" placeholder="Search users" className="mr-sm-2"/>
            <Button variant="outline-primary">Search</Button>
            </Form>
            <Post {...user}/>
        </div>
    )
}