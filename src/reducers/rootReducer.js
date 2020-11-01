const initialState = {
  counter: 1  
};


function rootReducer(state = initialState,action) {
    switch (action.type) {
    case "watch":

      return { counter: state.counter + 1 };

    case "star":
       
      return { counter: state.counter + 1 };

    case "fork":

      return { counter: state.counter - 1 };

    default:
      return state;
  }
}
export default rootReducer;
