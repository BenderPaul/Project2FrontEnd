import React from 'react';
import { useSelector } from 'react-redux'
import { store } from '../Store';
//placeholder
export const Post: React.FC = () => {
    const post = store.getState().PostState.posts;
    const renderedPosts = () => (
        <article className="post-excerpt" key={post.postId}>
            <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}</p>
             <h3>{post.author}</h3>
        </article>
<<<<<<< HEAD
    )
=======
    );
>>>>>>> 664636b... changes
    
    
    return (
        <div>
           <h2>Posts</h2>
           {renderedPosts}
        </div>
    );
}