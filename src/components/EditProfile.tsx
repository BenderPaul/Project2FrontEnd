import Axios from 'axios';
import React, { useState } from 'react';
import { Form, Input } from 'reactstrap';
import { emptyUser, IUser } from '../interfaces';
import { loadState } from '../Store';

export const EditProfile: React.FC = () => {

    // const [userInfo, setUserInfo] = useState(null);

    // const currentUser:IUser = emptyUser;
    // currentUser.username = loadState() ? loadState().username : "";
 

    // window.onload = async () => {
    //     const response = await Axios.get('http://34.211.139.29:8081/StickyDB/user/findbyusername', {
    //         params: {
    //             username: currentUser.username
    //         }
    //     });

    //     setUserInfo(response.data[0]);
    // }

    return (
        <div></div>
    );
}