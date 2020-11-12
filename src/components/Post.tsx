import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { baseUrl, IUser } from '../interfaces';
import '../style sheets/Post.scss';

export const Post: React.FC<IUser[]> = (props:IUser[]) => {
    const [rendered, setRendered] = useState([] as JSX.Element[]);


    useEffect(() => {
        const getPosts = async () => {
            let component:JSX.Element[] = [];
    
            if(window.location.pathname === "/") {
                //iterates through the user array
                for(const i in props){
                    const url = props[i].username ? `${baseUrl}/post/findpostsbyuser?username=${props[i].username}` : `${baseUrl}/post/allposts`;


                    const response = await Axios.get(url);
                
    
                    for(const index in await response.data){
                        component.push(
                            <div className = "postRectangle" key={index}>
                                <div className="title">{await response.data[index].title}</div>
                                <img className="image" width="250" src={await response.data[index].uploadedImage} alt=""></img>
                                <div className="body">{await response.data[index].body}</div>
                                <div className="username">{await response.data[index].author.username}</div>
                                <div className="likes">Likes: {await response.data[index].likes}</div>
                                <Button className="likeButton" onClick={() => response.data[index].likes++}>Like</Button>
                            </div>
                        );
                    }
                }
            }
            else {
                const response = await Axios.get(`${baseUrl}/post/findpostsbyuser?username=${props[0].username}`);
    
                for(const index in await response.data){
                    component.push(
                        <div className="postRectangle" key={index}>
                            <h3 className="title">{await response.data[index].title}</h3>
                            <img className="image" width="250" src={await response.data[index].uploadedImage} alt=""></img>
                            <p className="body">{await response.data[index].body}</p>
                            <div className="username">{await response.data[index].username}</div>
                            <h5 className="likes">Likes: {response.data[index].likes}</h5>
                        </div>
                    )
                }
            }
            setRendered(component);
        }

        getPosts();
    } , [props]);
    
    return (
        <div className="gridContainer">
           {rendered}
        </div>
    );
}