import Axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { IUser } from '../interfaces';
import '../style sheets/Post.scss';


export const Post: React.FC<IUser> = (props:IUser) => {
    const [rendered, setRendered] = useState([] as JSX.Element[]);


    async function getPosts() {
        let component:JSX.Element[] = [];

        if(window.location.pathname === "/") {
            const url = props.username ? `http://34.211.139.29:8081/StickyDB/post/searchbyusername?username=${props.username}` : "http://34.211.139.29:8081/StickyDB/post/allposts";
            const response = await Axios.get(url);

            for(const index in response.data){
                component.push(
                    <div className = "postRectangle" key={index}>
                        <div className="title">{response.data[index].title}</div>
                        <div className="body">{response.data[index].body.substring(0, 100)}</div>
                        <div className="username">{response.data[index].author.username}</div>
                    </div>
                )
            }
        }
        else {
            const response = await Axios.post("http://34.211.139.29:8081/StickyDB/post/findpostsbyuser", props.username);

            for(const index in response.data){
                component.push(
                    <div className="postRectangle" key={index}>
                        <h3 className="title">{response.data[index].title}</h3>
                        <p className="body">{response.data[index].body.substring(0, 100)}</p>
                        <h5 className="likes">Likes: {response.data[index].likes}</h5>
                        <h3 className="username">{response.data[index].author.username}</h3>
                        <Button onClick={() => response.data[index].likes++}>Like</Button>
                    </div>
                )

            }
        }
        setRendered(component);
    }

    window.onload = getPosts;
    
    return (
        <div className="gridContainer">
           {rendered}
        </div>
    );
}