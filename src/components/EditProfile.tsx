import Axios from 'axios';
import React, { useState } from 'react';
import { baseUrl, emptyUser } from '../interfaces';
import { loadState } from '../Store';
import "../style sheets/EditProfile.scss";
import { config } from '../S3Config';
import { S3 } from 'aws-sdk/clients/all';


export const EditProfile: React.FC = () => {

    const [userProfile, setUserProfile] = useState(emptyUser);

    const getUser = async () => {
        const response = await Axios.get(`${baseUrl}/user/findbyusername?username=${loadState()}`);
        setUserProfile(await response.data);
    }

    window.onload = getUser;

    //prints error message if the passwords do not match
    const [error, setError] = React.useState("");

    const updateUserInfo = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.currentTarget;
        const AWS = require('aws-sdk');

        if(target["password"].value === target["confirmPassword"].value){
            if (error) {
                setError("");
            }
            AWS.config.update(config);
        
            //I'm trying to get the picture going here
            //Only attempts to upload a picture if needed
            if(target["profPic"].value){
                const theFile:File = target["profPic"].files[0];

                console.log(theFile);

                // const s3 = new S3(config);
                
                const fileName = theFile.name;

                const upload = new S3.ManagedUpload({
                    params: {
                        Bucket: 'the-react-project-profile-info',
                        Key: fileName,
                        Body: theFile,
                        ACL: "public-read"
                    }
                });

                const promise = upload.promise();

                if (await promise) {
                    userProfile.profilePicture = `https://the-react-project-profile-info.s3-us-west-2.amazonaws.com/${fileName}`;
                
                    Axios.post(`${baseUrl}/user/update`, userProfile);
                }
            } else {
                const response = await Axios.post(`${baseUrl}/user/update`, userProfile);

                if(await response){
                    window.location.pathname = "/profile";
                }
                else {
                    alert("Username and/or email has been taken.");
                }
            }
        }
    }


    return (
        <div className="fullEditProfile">
            <div className="parentEditProfile">
                <div className="editProfile">
                    <h1>Edit Profile</h1>
                  <form onSubmit={updateUserInfo} className="updateUser">
                        <div className="labelAndInput">
                            <label>Username:</label>
                            <input type="text" defaultValue={userProfile.username}
                            onChange={(eve) => {userProfile.username = eve.target.value}}/>
                        </div>
                        <div className="labelAndInput">
                            <label>New Password:</label>
                            <input type="password" name="password" defaultValue={""}
                            onChange={(eve) => {userProfile.password = eve.target.value}}/>
                        </div>
                        <div className="labelAndInput">
                            <label>Confirm Password:</label>
                            <input type="password" name="confirmPassword" defaultValue={""}
                            />
                        </div>
                        <div className="labelAndInput">
                            <label>First Name:</label>
                            <input type="text" defaultValue={userProfile.firstname}
                            onChange={(eve) => {userProfile.firstname = eve.target.value}}/>
                        </div>
                        <div className="labelAndInput">
                        <label>Last Name:</label>
                            <input type="text" defaultValue={userProfile.lastname}
                            onChange={(eve) => {userProfile.lastname = eve.target.value}}/>
                        </div>
                        <div className="labelAndInput">
                            <label>Email:</label>
                            <input type="text" defaultValue={userProfile.email}
                            onChange={(eve) => {userProfile.email = eve.target.value}}/>
                        </div>
                        <div className="labelAndInput">
                            <label>Phone Number:</label>
                            <input type="text" defaultValue={userProfile.phoneNumber}
                            onChange={(eve) => {userProfile.phoneNumber = eve.target.value}}/>
                        </div>
                        <div className="labelAndInput">
                            <label>Occupation:</label>
                            <input type="text" defaultValue={userProfile.occupation}
                            onChange={(eve) => {userProfile.occupation = eve.target.value}}/>    
                        </div>
                        <div className="labelAndInput">
                            <label>Bio:</label>
                            <input type="textarea" defaultValue={userProfile.bio}
                            onChange={(eve) => {userProfile.bio = eve.target.value}}/>
                        </div>
                        <div className="labelAndInput">
                            <label>Address:</label>
                            <input type="text" defaultValue={userProfile.address}
                            onChange={(eve) => {userProfile.address = eve.target.value}}/>
                        </div>
                        <br/>
                        <div className="labelAndInput">
                            <label>Upload Profile Pic:</label>
                            <input type="file" 
                            id="uploadFile"
                            name = "profPic"
                            defaultValue=""
                            />
                        </div>
                        <div className="labelAndInput">
                            <p className="notEqual">{error}</p>
                        </div>
                        <br/>
                        <div className="labelAndInput">
                            <button type="submit" className="profileSubmit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}