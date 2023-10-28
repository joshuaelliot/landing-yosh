import { useState } from 'react'

import './App.css'
import ItemCard from "./components/item-card"

function App() {
  const [count, setCount] = useState(0);
const lista =Array.from ({ length : 12 },(e,index)=>index);
  return (
    <>
     <div className="container">

      {lista.map((e,index)=>{
        return <ItemCard key={index} />
      })}
     </div>

    </>
  )
}

export default App
