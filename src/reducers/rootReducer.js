const initialState = {
  counter: 0,
  counter1:0,
  counter2:0  
};



function Reducer(state = initialState,action) {
    switch (action.type) {
    case "watch":

      return {...state, counter: state.counter + 1 };

    case "star":
       
      return {...state, counter1: state.counter1 + 1 };

    case "fork":

      return {...state, counter2: state.counter2 + 1 };

    default:
      return state;
  }
}



export default Reducer;
