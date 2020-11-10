import React from 'react';
import { IPost, IUser } from '../interfaces';
import { Post } from './Post';

export const Home: React.FC = () => {

    // const [posts, setPosts] = React.useState(null);

    // window.onload = async () => {
    //     const response = await Axios.get('http://34.211.139.29:8081/StickyDB/user/allusers');
    //     const json = await JSON.stringify(response.data);

    //     const obj = Object.entries(await response.data);

    //     for(const user in obj) {
    //         console.log(obj[user]);
    //     }

    //     setPosts(json);
    // }

    const post:IPost = {
        postId: 0,
        author: "",
        title: "",
        body: "",
        likes: 0
    };

    const posts = <Post {...post}/>;

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