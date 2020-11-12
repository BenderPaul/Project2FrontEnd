import Axios from 'axios';
import React, { useState } from 'react';
import { baseUrl, emptyUser } from '../interfaces';
import { loadState } from '../Store';
import { ActiveUserCard } from './ActiveUserCard';
import { AddPostForm } from './AddPostForm';
import '../style sheets/Profile.scss';
import { CardGroup } from 'reactstrap';
import { Post } from './Post';

export const Profile: React.FC = () => {

    const [userProfile, setUserProfile] = useState(emptyUser);

    const getUser = async () => {
        const response = await Axios.get(`${baseUrl}/user/findbyusername?username=${loadState()}`);
        setUserProfile(await response.data);
    }

    window.onload = getUser; 



    return (
        <div className="fullProfile">
            <CardGroup>
                <ActiveUserCard {...userProfile}/>
                <AddPostForm />
            </CardGroup>
            <Post {...[userProfile]}/>
            <div className="profileInfo">
            </div>   
        </div>
    );
}