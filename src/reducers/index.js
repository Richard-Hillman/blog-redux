import { combineReducers } from 'redux';
import PostReducer from './postReducer';
import CommentReducer from './commentReducer';

export default combineReducers({
  posts: PostReducer,
  comments: CommentReducer
});
