/* eslint-disable max-len */
import { createPost, CREATE_POST } from './postActions';

describe('post actions', () => {
  it('creates blog post', () => {
    const action = createPost({
      title: 'frig',
      subtitle: 'ricky',
      author: 'also ricky',
      content: 'frig ricky'
    });

    expect(action).toEqual({
      type: CREATE_POST,
      payload: { title: 'frig', subtitle: 'ricky', author: 'also ricky', content: 'frig ricky' }
    });
  });
});
