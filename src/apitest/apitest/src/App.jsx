import { json } from "body-parser";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setdata] = useState([]);
  
  useEffect(() => {
    async function getdata() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const results = await response.json();
      setdata(results)
    }
    getdata();
    
  },[])
  
    
    return (
      <>
        <div>
          <h1>Fetched Data:</h1>
          {data.map((item) => (
          <div key={item.id}><p>{JSON.stringify(item)}</p></div>
          ))}
         
          </div>
      </>
    );
  }

export default App;
