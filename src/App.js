import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer'
import React from 'react';
import axios from 'axios';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState(false)
  const [serachValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)


  React.useEffect(() => {
    axios.get("https://6501d5dd736d26322f5c5cf0.mockapi.io/sneakers/api/v1/Items")
      .then(resp => {
        setItems(resp.data)
      })

    axios.get("https://6501d5dd736d26322f5c5cf0.mockapi.io/sneakers/api/v1/Cart")
      .then(resp => {
        setCartItems(resp.data)
      })

  }, [])

  const onAddToCart = (obj) => {
    axios.post("https://6501d5dd736d26322f5c5cf0.mockapi.io/sneakers/api/v1/Cart", obj)
    setCartItems([...cartItems, obj])
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6501d5dd736d26322f5c5cf0.mockapi.io/sneakers/api/v1/Cart/${id}`)
    setCartItems(cartItems.filter(item => item.id !== id))
  }
  const onAddToFavorite = (obj) => {
    axios.post("https://6506af203a38daf4803e9983.mockapi.io/Favorites", obj)
    setCartItems([...cartItems, obj])
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }



  return (
    <Router path='/' exact>
      <div className="wrapper clear">
        {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> : null}
        <Header onClickCart={() => setCartOpened(true)} />
        <Home items={items} serachValue={serachValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} />
      </div >
    </Router>

    

  );
}

export default App;
