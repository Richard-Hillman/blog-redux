import React from 'react';
import { useSelector } from 'react-redux'
;import { getPosts } from '../../selectors/postSelector';
import { Post } from './Post';

const PostList = () => {
  const posts = useSelector(getPosts);


  const postElements = posts.map((post, index) => (
    <li key={post.title}>
      <Post index={index} {...post} />
    </li>
  ));

  return (
    <ul>
      {postElements}
    </ul>
  );
};

export default PostList;

