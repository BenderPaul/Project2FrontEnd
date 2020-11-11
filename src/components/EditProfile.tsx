import Axios from 'axios';
import React, { useState } from 'react';
import { baseUrl, emptyUser, IUser } from '../interfaces';
import { loadState, store } from '../Store';
import { updateUser } from '../action-mappers/userActions';
import "../style sheets/EditProfile.scss";

export const EditProfile: React.FC = () => {
    //this is for testing purposes

    const [userProfile, setUserProfile] = useState(emptyUser);
    // const activeUser:IUser = {
    //     id: 0,
    //     firstName: store.getState().UserState.firstName,
    //     lastName: store.getState().UserState.lastName,
    //     username: store.getState().UserState.username,
    //     password: store.getState().UserState.password,
    //     email: store.getState().UserState.email,
    //     phoneNumber: store.getState().UserState.phoneNumber,
    //     occupation: store.getState().UserState.occupation,
    //     bio: store.getState().UserState.bio,
    //     address: store.getState().UserState.address,
    //     dob: store.getState().UserState.dob,
    // };
    const getUser = async () => {
        const response = await Axios.get(`${baseUrl}/user/findbyusername?username=${loadState()}`);
        setUserProfile(await response.data);
    }

    window.onload = getUser;

    //prints error message if the passwords do not match
    const [error, setError] = React.useState("");

    const updateUserInfo = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(e.currentTarget["password"].value === e.currentTarget["confirmPassword"].value){
            if (error) {
                setError("");
            }
            const action = updateUser(userProfile);
            const response = await Axios.post(`${baseUrl}/user/update`, userProfile);
    
            if(await response){
                store.dispatch(action);
                window.location.pathname = "/profile";
            }
            else {
                setError("Username and/or email has been taken.");
            }
        }
    }

    const [selectedFile, setSelectedFile] = React.useState("");

    return (
        <div className="fullEditProfile">
            <div className="parentEditProfile">
                <div className="editProfile">
                  <form onSubmit={updateUserInfo} className="updateUser">
                        <div>
                            <label>Username:</label>
                            <input type="text" defaultValue={userProfile.username}
                            onChange={(eve) => {userProfile.username = eve.target.value}}/>
                        </div>
                        <div>
                            <label>New Password:</label>
                            <input type="password" name="password" defaultValue={""}
                            onChange={(eve) => {userProfile.password = eve.target.value}}/>
                        </div>
                        <div>
                            <label>Confirm Password:</label>
                            <input type="password" name="confirmPassword" defaultValue={""}
                            />
                        </div>
                        <div>
                            <label>First Name:</label>
                            <input type="text" defaultValue={userProfile.firstName}
                            onChange={(eve) => {userProfile.firstName = eve.target.value}}/>
                        </div>
                        <div>
                        <label>Last Name:</label>
                            <input type="text" defaultValue={userProfile.lastName}
                            onChange={(eve) => {userProfile.lastName = eve.target.value}}/>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="text" defaultValue={userProfile.email}
                            onChange={(eve) => {userProfile.email = eve.target.value}}/>
                        </div>
                        <div>
                            <label>Phone Number:</label>
                            <input type="text" defaultValue={userProfile.phoneNumber}
                            onChange={(eve) => {userProfile.phoneNumber = eve.target.value}}/>
                        </div>
                        <div>
                            <label>Occupation:</label>
                            <input type="text" defaultValue={userProfile.occupation}
                            onChange={(eve) => {userProfile.occupation = eve.target.value}}/>    
                        </div>
                        <div>
                            <label>Bio:</label>
                            <input type="text" defaultValue={userProfile.bio}
                            onChange={(eve) => {userProfile.bio = eve.target.value}}/>
                        </div>
                        <div>
                            <label>Address:</label>
                            <input type="text" defaultValue={userProfile.address}
                            onChange={(eve) => {userProfile.address = eve.target.value}}/>
                        </div>
                        <div>
                            <label>Upload Profile Pic:</label>
                            <input type="file" 
                            id="uploadFile"
                            value={selectedFile}
                            onChange={(eve) => setSelectedFile(eve.target.value)}
                            />
                        </div>
                        <div>
                            <p className="notEqual">{error}</p>
                        </div>
                        <div>
                            <button type="submit" className="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}