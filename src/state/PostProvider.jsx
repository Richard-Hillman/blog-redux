import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from '../reducers/postReducer';

const PostContext = ({ children }) => { 
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
