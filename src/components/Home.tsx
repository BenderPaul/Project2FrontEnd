import Axios from 'axios';
import { METHODS } from 'http';
import React, { useEffect } from 'react';

export const Home: React.FC = () => {

    const [posts, setPosts] = React.useState("");

    window.onload = async () => {
        const response = await Axios.get('http://34.211.139.29:8081/StickyDB/user/allusers');
        const json = await JSON.stringify(response.data);
        console.log("here")

        setPosts(json);
    }

    return (
        <div>
            <h1>Home page</h1>
            <ul>
                Included:
                <li>feed</li>
                <li>ability to search for other users</li>
            </ul>
            {posts}
        </div>
    )
}