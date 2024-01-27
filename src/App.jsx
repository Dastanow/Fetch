import { useEffect, useState } from 'react'
import './App.css'
import Cart from './commponent/Cart'
function App() {

  fetch('https://pokeapi.co/api/v2/pokemon/ ')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  return (
    <>
    
  <Cart  />
    </>
  )
}

export default App
