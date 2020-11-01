const initialState1 = {
    counter1: 0  
  };
  
    
  function rootReducer1(state1 = 0,action) {
      switch (action.type) {
      case "watch":
  
        return { counter1: state1.counter1 + 1 };
  
      case "star":
         
        return { counter1: state1.counter1 + 1 };
  
      case "fork":
  
        return { counter1: state1.counter1 + 1 };
  
      default:
        return state1;
    }
  }
  export default rootReducer1;
  