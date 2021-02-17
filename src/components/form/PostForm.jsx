import React, { useState } from 'react';
import { createPost } from '../../actions/postActions';
import { useDispatch } from '../../state/PostProvider';

// --------------------------------------------

const PostForm = () => {
  const dispatch = useDispatch();

  // --------------------------------------------

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  // --------------------------------------------

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createPost({ title, author, subtitle, content }));
  };

  // --------------------------------------------

  return (
    <form onSubmit={handleSubmit}>

      {/* // -------------------------------------------- */}

      <input 
        type="text"
        placeholder="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />

      <input 
        type="text"
        placeholder="Subtitle"
        value={subtitle}
        onChange={({ target }) => setSubtitle(target.value)}
      />

      <input 
        type="text"
        placeholder="Author"
        value={author}
        onChange={({ target }) => setAuthor(target.value)}
      />

      <input 
        type="text"
        placeholder="Content"
        value={content}
        onChange={({ target }) => setContent(target.value)}
      />

      {/* // -------------------------------------------- */}

      <button>Create Post</button>

    </form>
  );
};
    
export default PostForm;
