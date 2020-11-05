import React from 'react';
import { useSelector } from 'react-redux'
//placeholder
export const Props: React.FC = () => {
    const posts = useSelector(state => state.initialState)
    
    const renderedPosts = posts.map(post => (
        <article className="post-excerpt" key={post.postId}>
            <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}</p>
             <h3>{post.author}</h3>
        </article>
    ))
    
    
    return (
        <div>

        </div>
    );
}