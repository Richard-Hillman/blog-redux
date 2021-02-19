import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import CommentForm from '../form/commentForm/CommentForm';
import CommentList from '../../comments/commentList';

export const Post = ({ title, subtitle, author, content, index }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(title));
  };

  return (
    <>
      <dl>    
        <dt>Title</dt> 
        <dd>{title}</dd>

        <dt>Subtitle</dt> 
        <dd>{subtitle}</dd>

        <dt>Author</dt> 
        <dd>{author}</dd>

        <dt>Content</dt> 
        <dd>{content}</dd>
      </dl>
      <button onClick={handleClick}>DELETE</button>

      {/* ------------------------------------------------ */}
      
      <CommentForm index={index} />
      <CommentList /> 
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}
;
