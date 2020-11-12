import { S3 } from 'aws-sdk'
import Axios from 'axios'
import React from 'react'
import { baseUrl, emptyUser, IPost, IUser } from '../interfaces'
import { config } from '../S3Config'
import { loadState } from '../Store'
import "../style sheets/AddPost.scss";

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
   
    const AWS = require('aws-sdk');
    const target = e.currentTarget;
    AWS.config.update(config);

    //I'm trying to get the picture going here
    //Only attempts to upload a picture if needed
    if(target["uploadImg"]){
        const theFile:File = target["uploadImg"].files[0];

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
            newPost.uploadedImage = `https://the-react-project-profile-info.s3-us-west-2.amazonaws.com/${fileName}`;
        
            Axios.post(`${baseUrl}/post/create`, newPost);
        }
    } else {
        const response = await Axios.post(`${baseUrl}/post/create`, newPost);

        if(await response){
            window.location.pathname = "/profile";
        }
        else {
            alert("Problem occurred.");
        }
    }

  }


      return (
          <section>
              <h2>Add a New Post</h2>
              <form onSubmit={addNewPost}>
                  <label htmlFor="postTitle">Post Title: </label>
                  <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="Add your title"
                  />
                  <label htmlFor="postBody">Body: </label>
                  <textarea
                    id="postContent"
                    name="postContent"
                    placeholder="Add your content"
                  />
                  <label>Upload Image: </label>
                  <input type="file" 
                  id="uploadImg"
                  name = "uploadImg"
                  />
                <button type="submit" className="submit" >Save Post</button>     
              </form>
          </section>
      );
  
}