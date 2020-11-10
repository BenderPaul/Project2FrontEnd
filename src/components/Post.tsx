import Axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { IPost, IPostState, IUser } from '../interfaces';
import { store } from '../Store';

export const Post: React.FC<IPost> = (props:IPost) => {
    
    const [posts, setPosts] = useState(null);
    
    const getPosts = async () => {
        let component = [];

        if(window.location.pathname === "/") {
            const response = await Axios.get("http://34.211.139.29:8081/StickyDB/post/allposts");
            setPosts(await response.data);
            
            const postState: IPostState = JSON.parse(await response.data);
            
            for(const increment in postState.posts) {
                component.push(renderedPosts(postState.posts[increment]));
            }
        }
        else {
            const response = await Axios.post("http://34.211.139.29:8081/StickyDB/post/findpostsbyuser", props);
            setPosts(await response.data);

            const postState: IPostState = JSON.parse(await response.data);
            
            for(const increment in postState.posts) {
                component.push(renderedPosts(postState.posts[increment]));
            }
        }

        console.log(component);

        return component;
    }

    const renderedPosts = (post:IPost) => (
        <article className="post-excerpt">
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <h3>{post.author}</h3>
        </article>
    )

    return (
        <div>

           <h2>Posts</h2>
           {getPosts}

        </div>
    );
}