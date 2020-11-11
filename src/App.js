import React, { useState, useEffect } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import {useSelector,useDispatch} from 'react-redux'


function App() {

  // applying redux
  function watch(){
    return {
        type:"watch",
        
    }
  }
  
  function star(){
    return {
        type:"star",
       
    }
  }
  
  function fork(){
    return {
        type:"fork",
    }
  }
  
 const counter = useSelector(state => state.counter)
 const counter1 = useSelector(state => state.counter1)
 const counter2 = useSelector(state => state.counter2)
  const dispatch = useDispatch();


  const [page, setPage] = useState(25);
  const [data, setData] = useState('');
        
 
  useEffect(() => {
    fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues?per_page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {      
         setData(data);       
      })
  }, [page]);

  return (

    <div className='App'>
      
      <div className='Redux'>
        <h1>counter:{counter}</h1> 
        <button onClick={(()=>dispatch(watch()))}>watch</button>

        <h1>counter:{counter1}</h1> 
        <button onClick={(()=>dispatch(star()))}>star</button>

        <h1>counter:{counter2}</h1>       
        <button onClick={(()=>dispatch(fork()))}>fork</button>

      </div>  
      <h1>Issues List</h1>
      <InfiniteScroll
      
        dataLength={data.length}
        next={() => setPage(page + 10)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {Object.keys(data).map((key) => (
          <Gitissue key={key} details={data[key]} />
        ))}
        
      </InfiniteScroll>
    </div>
  );
}

function Gitissue({details}) {
  return (
    <div>
      <p loading="lazy">{details.title}</p>
    </div>
  );
}

export default App;
