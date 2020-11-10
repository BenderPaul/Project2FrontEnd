import Axios from 'axios';
import React from 'react';
import { IUser } from '../interfaces';
import { loadState } from '../Store';

export const EditProfile: React.FC = () => {

    // const currentUser:IUser = {
    //     id: 0,
    //     username: loadState().UserState.username,
    //     password: "",
    //     firstName: loadState().UserState.firstName,
    //     lastName: loadState().UserState.lastName,
    //     email: loadState().UserState.email,
    //     phoneNumber: loadState().UserState.phoneNumber,
    //     occupation: loadState().UserState.occupation,
    //     bio: loadState().UserState.bio,
    //     dob: loadState().UserState.dob,
    //     address: loadState().UserState.address
    // }

    // window.onload = async () => {
    //     const response = await Axios.get('http://localhost:8080/Project2/user/findbyusername', {
    //         params: {
    //             user: currentUser
    //         }
    //     });

    //     console.log(response.data);
    // }
    // console.log(loadState().UserState.username);

    return (
        <div>
            Allows users to edit their profile information
        </div>
    );
}