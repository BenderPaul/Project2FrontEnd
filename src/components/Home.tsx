import Axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Input, CardGroup } from 'reactstrap';
import { baseUrl, emptyUser } from '../interfaces';
import { Post } from './Post';
import '../style sheets/Home.scss';
import { ActiveUserCard } from './ActiveUserCard';
export const Home: React.FC = () => {

    
    const [users, setUsers] = useState([emptyUser]);

    const searchForUser = async (e:React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const searched = e.currentTarget["search"].value;

        const response = await Axios.get(`${baseUrl}/user/search?username=${searched}`);
        setUsers(response.data);
    }

    return (
        <div id="grid-container">
            <CardGroup id="card-group">
                <ActiveUserCard {...users[0]} />
            </CardGroup>
            <div id="profile-search">
                <Form inline onSubmit={searchForUser} className="searchBar" id="search-bar">
                    <Input type="text" placeholder="Search users" className="mr-sm-2" name="search"/>
                    <Button type="submit" variant="outline-primary">Search</Button>
                </Form>
                <div id="posts">
                    <Post {...users}/>
                </div>
            </div>

        </div>
    )
}