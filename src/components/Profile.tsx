import Axios from 'axios';
import React, { useState } from 'react';
import { emptyUser } from '../interfaces';
import { loadState } from '../Store';

export const Profile: React.FC = () => {

    console.log("here")

    const [userProfile, setUserProfile] = useState(emptyUser);

    console.log(loadState());

    const getUser = async (username = loadState()) => {
        const response = await Axios.post(`http://34.211.139.29:8081/StickyDB/user/findbyusername`, {
            params: {
                username: username
            }
        });
        setUserProfile(response.data[0]);
    }

    getUser();



    return (
        <div>
            <ul>
                Includes:
                <li>User's posts</li>
                <li>Ability to edit Profile (different page)</li>
                <li>View current profile information</li>
            </ul>

            <h1>
                Name: {userProfile.firstName} {userProfile.lastName}
            </h1>
            <h3>
                Email: {userProfile.email}
            </h3>
            <h4>
                Username: {userProfile.username}
                Phone Number: {userProfile.phoneNumber}
                Address: {userProfile.address}
            </h4>
            <br/><br/>
            <h3>
                Birthday: {userProfile.dob}
                Occupation: {userProfile.occupation}
            </h3>
            <h3>
                Bio: {userProfile.bio}
            </h3>
        </div>
    );
}