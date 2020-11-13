import Axios from 'axios';
import React, { useState } from 'react';
import { baseUrl, emptyUser } from '../interfaces';
import { loadState } from '../Store';
import { AddPostForm } from './AddPostForm';
import '../style sheets/Profile.scss';
import { CardGroup } from 'reactstrap';
import { Post } from './Post';
import { Card, CardText, CardTitle, CardBody, CardLink, ListGroupItem, ListGroup, Collapse} from 'reactstrap';

export const Profile: React.FC = () => {

    const [userProfile, setUserProfile] = useState(emptyUser);

    const getUser = async () => {
        const response = await Axios.get(`${baseUrl}/user/findbyusername?username=${loadState()}`);
        setUserProfile(await response.data);
    }

    window.onload = getUser; 

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="fullProfile">
            <CardGroup>
            <div id="profileContainer">
                <Card style={{ backgroundColor: '#c4a0e6', width: '18rem' }} id="profileCard">
                    <img width="250" src={userProfile.profilePicture} alt='Missing: Profile Picture' id="profileImage"/>
                    <CardBody>
                    <CardTitle id="username">{userProfile.username}</CardTitle>
                    <CardTitle>BIO: <i className="arrow down" onClick={toggle}></i>
                    </CardTitle>
                    <Collapse isOpen={!isOpen}>
                        <CardText>
                            {userProfile.bio}
                        </CardText>
                        <br/>
                    </Collapse>
                    <ListGroup className="list-group-flush">
                        <CardTitle>Name:</CardTitle>
                        <ListGroupItem style={{ backgroundColor: '#ba55d3' }}>{userProfile.firstname} {userProfile.lastname}</ListGroupItem>
                        <CardTitle>Occupation:</CardTitle>
                        <ListGroupItem style={{ backgroundColor: '#ba55d3' }}>{userProfile.occupation}</ListGroupItem>
                        <CardTitle>Email:</CardTitle>
                        <ListGroupItem style={{ backgroundColor: '#ba55d3' }}>{userProfile.email}</ListGroupItem>
                    </ListGroup>
                    <form action="/profile/edit" method="get">
                        <button type="submit" className="profileButton">Edit Profile</button>
                    </form>
                    </CardBody>
                </Card>
                {/* <ActiveUserCard {...userProfile}/> */}
                <AddPostForm />
            </div>
            </CardGroup>
            <Post {...[userProfile]}/>
        </div>
    );
}