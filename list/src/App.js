import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
 
 
 const [data, setData] = useState([])
  

useEffect(()=>{
  const raw = localStorage.getItem('data') || []
  setData(JSON.parse(raw))
}, [])


  useEffect(()=>{
     localStorage.setItem('data', JSON.stringify(data))
  }, [data])


  const getData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(json => setData(json))
  }

 const removeData = () => {
   setData('')
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
       <button className='bntS' onClick={()=>{
          removeData()
       }}>Delete from JSON</button>

    </div>
    </>
  );
}

export default App;
