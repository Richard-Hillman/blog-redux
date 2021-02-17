/* eslint-disable max-len */

import { createPost, deletePost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('add a blog post with CREATE_POST action', () => {
    const state = {
      posts: []
    };


    const action = createPost({
      title: 'frig',
      subtitle: 'ricky',
      author: 'also ricky',
      content: 'frig ricky',
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: [{ title: 'frig', subtitle: 'ricky', author: 'also ricky', content: 'frig ricky'  }]
    }); 
  });

  it('handles the DELETE_POST action', () => {
    const state = {
      posts: [{ title: 'frig', subtitle: 'ricky', author: 'also ricky', content: 'frig ricky'  }]
    };

    const action = deletePost('frig');

    expect(reducer(state, action)).toEqual({
      posts: []
    });
  });
});
