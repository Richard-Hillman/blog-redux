/* eslint-disable max-len */
import React, { useState } from 'react';
import { createComment } from '../../../actions/commentActions';
import { useDispatch } from 'react-redux';

// --------------------------------------------

const CommentForm = ({ index }) => {
  const dispatch = useDispatch();

  // --------------------------------------------

  const [commentTitle, setCommentTitle] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentContent, setCommentContent] = useState('');

  // --------------------------------------------

  const handleSubmitComment = event => {
    event.preventDefault();

    dispatch(createComment({ commentTitle, commentAuthor, commentContent, index }));
  };

  // --------------------------------------------

  return (
    <form onSubmit={handleSubmitComment}>

      {/* // -------------------------------------------- */}

      <input 
        type="text"
        placeholder="Comment Title"
        value={commentTitle}
        onChange={({ target }) => setCommentTitle(target.value)}
      />

      <input 
        type="text"
        placeholder="Author"
        value={commentAuthor}
        onChange={({ target }) => setCommentAuthor(target.value)}
      />

      <input 
        type="text"
        placeholder="Content"
        value={commentContent}
        onChange={({ target }) => setCommentContent(target.value)}
      />

     

      {/* // -------------------------------------------- */}

      <button>Create Comment</button>

    </form>
  );
};
    
export default CommentForm;
