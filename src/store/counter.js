const DEC = "DEC";
const INC = "INC";

// Action creators
export const counterDec = () => ({ type: DEC });
export const counterInc = () => ({ type: INC });

// Reducer
const ACTIONS_HANDLER = {
  [DEC]: (state, action) => ({
    counter: state.counter - 1
  }),
  [INC]: (state, action) => ({
    counter: state.counter + 1
  })
};

const initialState = {
  counter: 0
};

export const counterReducer = (state = initialState, action) => {
  const handler = ACTIONS_HANDLER[action.type];

  return handler ? handler(state, action) : state;
};
