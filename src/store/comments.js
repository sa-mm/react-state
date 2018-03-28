const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";

export const addComment = txt => {
  return {
    type: ADD_COMMENT,
    payload: txt
  };
};

export const removeComment = id => {
  return {
    type: REMOVE_COMMENT,
    payload: id
  };
};

const ACTIONS_HANDLER = {
  [ADD_COMMENT]: (state, action) => {
    const comment = {
      txt: action.payload,
      id: Date()
    };
    return {
      comments: state.comments.concat(comment)
    };
  },
  [REMOVE_COMMENT]: (state, action) => {
    const comments = state.comments.filter(e => e.id !== action.payload);
    return {
      comments
    };
  }
};

const initialState = {
  comments: [{ id: Date(), txt: "some text" }]
};

export const commentReducer = (state = initialState, action) => {
  const handler = ACTIONS_HANDLER[action.type];
  return handler ? handler(state, action) : state;
};
