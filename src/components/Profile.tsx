import Axios from 'axios';
import React, { useState } from 'react';
import { IUser } from '../interfaces';
import { loadState } from '../Store';

export const Profile: React.FC = () => {

    const [userProfile, setUserProfile] = useState(null);

    const refresh = (user:IUser = loadState()) => {
        console.log(user.username);
    }

    return (
        <div>
            <ul>
                Includes:
                <li>User's posts</li>
                <li>Ability to edit Profile (different page)</li>
                <li>View current profile information</li>
            </ul>

            
        </div>
    );
}