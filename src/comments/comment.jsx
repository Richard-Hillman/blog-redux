import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../actions/commentActions';

export const Comment = ({ commentTitle, commentAuthor, commentContent }) => {
  const dispatch = useDispatch();

  const handleClickComment = () => {
    dispatch(deleteComment(commentTitle));
  };

  return (
    <>
      <dl>

        <dt>Title</dt> 
        <dd>{commentTitle}</dd>

        <dt>Author</dt> 
        <dd>{commentAuthor}</dd>

        <dt>Content</dt> 
        <dd>{commentContent}</dd>

      </dl>
      <button onClick={handleClickComment}>DELETE</button>
    </>
  );
};

Comment.propTypes = {
  commentTitle: PropTypes.string.isRequired,
  commentAuthor: PropTypes.string.isRequired,
  commentContent: PropTypes.string.isRequired,
};
