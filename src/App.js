import React, { useState } from 'react'
import Charts from './chartsLib/Charts';

import Header from "./components/Header";

function App() {

  const [x, setX] = useState(0)

  return (
    <div className="App">
      <Header/>
      <h1>Hello App</h1>  
      <h2>{x}</h2> 
      <button onClick={()=> setX(x + 1)}>Inc</button> 
       
      <Charts />
      
    </div>
  );
}

export default App;
