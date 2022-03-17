import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
 
 
 const [data, setData] = useState([])
  


  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //      .then(response => response.json())
  //      .then(json => setData(json))
  // }, [data])

  const getData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(json => setData(json))
  }

 return (
<>

    <div >

       <h1 className='main'>Posts</h1>
          <pre>{JSON.stringify(data, null ,2)}</pre>
            
            <hr/>
       <button className='btn' onClick={()=>{
           getData()
       }}> Add from JSON</button>

    </div>
    </>
  );
}

export default App;
