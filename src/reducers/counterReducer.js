const initialState = {
    number: 0
  };
  
  export default function counterReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD":
        return Object.assign(
          {},
          {
            ...state,
            number: state.number + action.value
          }
        );
      case "SUB":
        return Object.assign(
          {},
          {
            ...state,
            number: state.number - action.value
          }
        );
      default:
        return state;
    }
  }
  