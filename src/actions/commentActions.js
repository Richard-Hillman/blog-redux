// ACTION CREATORS

export const CREATE_COMMENT = 'CREATE_COMMENT';

export const createComment = comment => ({
  type: CREATE_COMMENT,
  payload: comment,

//   should we add index here? 
});

// ----------------------------------------------------

export const DELETE_COMMENT = 'DELETE_COMMENT';

// would it make sense to use index in place of comment title here 
export const deleteComment = commentTitle => ({
  type: DELETE_COMMENT,
  payload: commentTitle
});
