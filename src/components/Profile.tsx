import Axios from 'axios';
import React, { useState } from 'react';
import { baseUrl, emptyUser, IUser } from '../interfaces';
import { loadState } from '../Store';
import { ActiveUserCard } from './ActiveUserCard';

export const Profile: React.FC = () => {

    const [userProfile, setUserProfile] = useState(emptyUser);
    //const [currUsername, setCurrUsername] = useState(loadState());

    const getUser = async () => {
        const response = await Axios.get(`${baseUrl}/user/findbyusername?username=${loadState()}`);
        setUserProfile(await response.data);
    }

    window.onload = getUser;



    return (
        <div>
            <ul>
                Includes:
                <li>User's posts</li>
                <li>Ability to edit Profile (different page)</li>
                <li>View current profile information</li>
            </ul>

            <ActiveUserCard {...userProfile}/>

            {/* <h1>
                Name: {userProfile.firstName} {userProfile.lastName}
                <br/>
            </h1>
            <h3>
                Email: {userProfile.email}
                <br/>
            </h3>
            <h4>
                Username: {userProfile.username}
                <br/>
                Phone Number: {userProfile.phoneNumber}
                <br/>
                Address: {userProfile.address}
                <br/>
            </h4>
            <br/><br/>
            <h3>
                Birthday: {userProfile.dob}
                <br/>
                Occupation: {userProfile.occupation}
                <br/>
            </h3>
            <h3>
                Bio: {userProfile.bio}
            </h3> */}
        </div>
    );
}