import { useState } from 'react'

import './App.css'
import ItemCard from "./components/item-card"

function App() {
  const [count, setCount] = useState(0)
const lista =[1,2,4,5,76,8,9,5,3,4,6,87,]
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
