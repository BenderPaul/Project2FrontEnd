import React, { useState } from 'react'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const onTitleChanged = (e:any) => setTitle(e.target.value)
  const onContentChanged = (e:any) => setBody(e.target.value)

  return (
      <section>
          <h2>Add a New Post</h2>
          <form>
              <label htmlFor="postTitle">Post Title</label>
              <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
               />
              <label htmlFor="postBody">Body:</label>
              <textarea
                id="postContent"
                name="postContent"
                value={body}
                onChange={onContentChanged}
              />
             <button type="button">Save Post</button>     
          </form>
      </section>
  )

  

}

