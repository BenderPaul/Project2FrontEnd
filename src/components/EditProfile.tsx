import Axios from 'axios';
import React from 'react';
import { IUser } from '../interfaces';
import { loadState } from '../Store';
import { store } from '../Store';
import { updateUser } from '../action-mappers/userActions';

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
    
    //this is for testing purposes
    const activeUser:IUser = {
        id: 0,
        firstName: store.getState().UserState.firstName,
        lastName: store.getState().UserState.lastName,
        username: store.getState().UserState.username,
        password: store.getState().UserState.password,
        email: store.getState().UserState.email,
        phoneNumber: store.getState().UserState.phoneNumber,
        occupation: store.getState().UserState.occupation,
        bio: store.getState().UserState.bio,
        address: store.getState().UserState.address,
        dob: store.getState().UserState.dob,
    };
    
    //prints error message if the passwords do not match
    const [error, setError] = React.useState("");

    const updateUserInfo = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(e.currentTarget["password"].value === e.currentTarget["confirmPassword"].value){
            if (error) {
                setError("");
            }
            const action = updateUser(activeUser);
            const response = await Axios.post('http://localhost:8080/Project2/user/update', activeUser);
    
            if(await response){
                store.dispatch(action);
                window.location.pathname = "/profile/edit";
            }
            else {
                setError("Username and/or email has been taken.");
            }
        }
    }

    return (
        <form onSubmit={updateUserInfo}>
            <div>
                <label>Username:</label>
                <input type="text" defaultValue={activeUser.username}
                onChange={(eve) => {activeUser.username = eve.target.value}}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" defaultValue={activeUser.password}
                onChange={(eve) => {activeUser.username = eve.target.value}}/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" defaultValue={activeUser.password}
                onChange={(eve) => {activeUser.username = eve.target.value}}/>
            </div>
            <div>
                <label>First Name:</label>
                <input type="text" defaultValue={activeUser.firstName}
                onChange={(eve) => {activeUser.username = eve.target.value}}/>
            </div>
            <div>
            <label>Last Name:</label>
                <input type="text" defaultValue={activeUser.lastName}
                onChange={(eve) => {activeUser.username = eve.target.value}}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" defaultValue={activeUser.email}
                onChange={(eve) => {activeUser.username = eve.target.value}}/>
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="text" defaultValue={activeUser.phoneNumber}
                onChange={(eve) => {activeUser.username = eve.target.value}}/>
            </div>
            <div>
                <label>Occupation:</label>
                <input type="text" defaultValue={activeUser.occupation}
                onChange={(eve) => {activeUser.username = eve.target.value}}/>    
            </div>
            <div>
                <label>Bio:</label>
                <input type="text" defaultValue={activeUser.bio}
                onChange={(eve) => {activeUser.username = eve.target.value}}/>
            </div>
            <div>
                <label>Address:</label>
                <input type="text" defaultValue={activeUser.address}
                onChange={(eve) => {activeUser.username = eve.target.value}}/>
            </div>
            <div>
                <button type="submit">Update</button>
            </div>
        </form>
    );
}