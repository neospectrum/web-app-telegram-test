
import './App.css';
import Cart from './Components/Cart/Cart';
import Card from './Components/Card/Card';
import { useState, useEffect } from 'react';
const { getData } = require('./db/db');
const characters = getData();

const tele = window.Telegram.WebApp

function App() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    tele.ready()
  })

  const onAdd = (character) => {
    const exist = cartItems.find((x) => x.id === character.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) => 
        x.id === character.id ? { ...exist, quantity: (exist.quantity + 1) } : x
      )
    )
    } else {
      setCartItems([ ...cartItems, { ...character, quantity: 1}])
    }
  }

  const onRemove = (character) => {
    const exist = cartItems.find((x) => x.id === character.id)
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== character.id))
    } else {
      setCartItems(cartItems.map((x) =>
        x.id === character.id ? { ...exist, quantity: (exist.quantity - 1)} : x
      )
    )
  }} 

  const onCheckout = () => {
    tele.MainButton.text = 'Pay'
    tele.MainButton.show()
  }

  return (
    <>
    <h1 className='heading'>Choose your character</h1>
    <Cart cartItems={cartItems} onCheckout={onCheckout}/>
    <div className='cards__container'>
      {characters.map((character) => {
        return <Card character={character} key={character.id} onAdd={onAdd} onRemove={onRemove}/>
      })}
    </div>
    </>
  );
}

export default App;
