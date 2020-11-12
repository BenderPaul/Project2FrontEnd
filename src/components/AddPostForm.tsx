import Axios from 'axios'
import React, { useState } from 'react'
import { baseUrl, emptyUser, IPost, IUser } from '../interfaces'
import { loadState, store } from '../Store'

//const [title, setTitle] = useState('')
//const [body, setBody] = useState('')


export const AddPostForm: React.FC = () =>{ 
  
  const user:IUser = emptyUser;
  user.username = loadState();

  const newPost: IPost = {
    postId: 0,
    title: "",
    body: "",
    author: user,
    likes: 0,
    uploadedImage: ''
  }

  const addNewPost = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    newPost.title = e.currentTarget["postTitle"].value;
    newPost.body = e.currentTarget["postContent"].value;
    newPost.author = user;
   
    const response = await Axios.post(`${baseUrl}/post/create`, newPost);
    console.log(await response.data);

  }


      return (
          <section>
              <h2>Add a New Post</h2>
              <form onSubmit={addNewPost}>
                  <label htmlFor="postTitle">Post Title</label>
                  <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    //value={title}
                    //onChange={onTitleChanged}
                  />
                  <label htmlFor="postBody">Body:</label>
                  <textarea
                    id="postContent"
                    name="postContent"
                    //value={body}
                    //onChange={onContentChanged}
                  />
                <button type="submit">Save Post</button>     
              </form>
          </section>
      );
  
}