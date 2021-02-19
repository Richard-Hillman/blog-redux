import React from 'react';
import PostForm from '../../components/form/PostForm';
import PostList from '../../components/posts/PostList';
import CommentList from '../../comments/commentList';

export default function App() {
  return (
    <>
      <PostForm /> 
      <PostList />
    </>
  );
}

