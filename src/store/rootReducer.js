import { counterReducer } from "./counter";
import { commentReducer } from "./comments";

const combineReducers = reducers => {
  const initialState = reducers.reduce((state, reducer) => {
    return Object.assign(state, reducer(undefined, { type: "INIT" }));
  }, {});

  return (state = initialState, action) =>
    reducers.reduce((prevState, reducer) => {
      return reducer(prevState, action);
    }, state);
};

const rootReducer = combineReducers([counterReducer, commentReducer]);

export default rootReducer;
