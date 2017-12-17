import { ADD_COUNTER, ADD_ASYNC } from "../constants/actionTypes";

const addValue = value => {
  return {
    type: "ADD",
    value
  };
};

const addValueAsync = value => {
  return {
    type: ADD_ASYNC,
    value
  };
};

// const addValueAsync = value => {
//   return (dispatch, getState) => {
//     setTimeout(() => {
//       dispatch(addValue(value));
//     }, 1000);
//   };
// };

const subValue = value => {
  return {
    type: "SUB",
    value
  };
};

export { addValue, subValue, addValueAsync };
