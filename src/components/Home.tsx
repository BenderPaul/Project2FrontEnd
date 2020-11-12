import Axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Input } from 'reactstrap';
import { baseUrl, emptyUser } from '../interfaces';
import { Post } from './Post';
import '../style sheets/Home.scss';
export const Home: React.FC = () => {

    const [users, setUsers] = useState([emptyUser]);

    const searchForUser = async (e:React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await Axios.get(`${baseUrl}/user/search?username=${e.currentTarget["search"].value}`);
        setUsers(response.data);
    }

    return (
        <div>
            <Form inline onSubmit={searchForUser} className="searchBar">
                <Input type="text" placeholder="Search users" className="mr-sm-2" name="search"/>
                <Button type="submit" variant="outline-primary">Search</Button>
            </Form>
            <br/>
            <Post {...users} />
        </div>
    )
}