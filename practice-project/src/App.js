
import './App.css';
import Product from './component/Product';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(0)

  function func() {
    if(data < 20){
    
      setData(data + 1)
    }
  }
   
  function remov()
  {
    if(data > 0 ){

      setData(data - 1)
    }
  }



  return (
    <>

      <h1> Update the Counter : {data}</h1>


      <button onClick={func} > Update data</button >  

      
      <button onClick={remov}> Remove data</button>
      <Product  name = {"Pritee"} email = {"pritee@gmail.com"} />
     
    </>
  )
}

export default App;
