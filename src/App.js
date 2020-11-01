import React, { useState, useEffect } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import {useSelector,useDispatch} from 'react-redux'
import rootReducer1 from './reducers/rootReducer1'
function App() {

  // applying redux
const counter1 = useSelector(state1 => state1.counter1)
 const counter = useSelector(state => state.counter)
 
  const dispatch = useDispatch();
  const dispatch1 = useDispatch();

  const [page, setPage] = useState(25);
  const [data, setData] = useState('');
        
 console.log(setData);
 
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

    <div>
      
      <h1>counter1:{counter1}</h1> 
        <h1>counter:{counter}</h1> 
        
        <h1>counter:{counter}</h1> 
       
        <button onClick={(()=>dispatch({type:'watch'}))}>watch</button>
        <button onClick={(()=>dispatch({type:'fork'}))}>fork</button>
        <button onClick={(()=>dispatch1(rootReducer1({type :'watch'})))}>star</button>
        
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
