import React from 'react';
import { useSelector } from 'react-redux'
import { postReducer } from '../reducers/postReducer'
import { IState } from '../interfaces'


//placeholder
export const Props: React.FC = () => {
    const posts = useSelector((state: IState) => state.PostState)
    
    const renderedPosts = ()  =>  (
        <article className="post-excerpt" key={posts.postId}>
            <h3>{posts.title}</h3>
        <p>{posts.body.substring(0, 100)}</p>
             <h3>{posts.author}</h3>
        </article>
    )
    
    
    return (
        <div>
           <h2>Posts</h2>
           {renderedPosts}
        </div>
    );
}