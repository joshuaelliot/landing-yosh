import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div class="container">


  <div class="item">
    <figure>
      <img src="https://i.pinimg.com/564x/b4/bd/ee/b4bdee855a004c9181847482f5e4547d.jpg" 
      alt="" />
      </figure>
    <div className='description-article'>
      <div className='name-article'>
        <h3>BOBO</h3>
        <h3>Mochila estilo coreano</h3>
        <h3>s/80</h3>
        <button>pidelo aqui <a href="https://wa.me/51910550230">🃏</a></button>
      </div>
     
    </div>
  </div>



  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
  
</div>

    </>
  )
}

export default App
