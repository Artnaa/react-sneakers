import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';



function Header(props) {
  return (
    <header className='d-flex justify-between align-center p-40'>
      <Link to='/Home'>
        <div className='d-flex align-center'>
          <img src='./img/logo.svg' />
          <div>
            <h3 className='text-uppercase '>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className='d-flex '>
        <li className='mr-30 cu-p' onClick={props.onClickCart}>
          <img src='./img/card.svg' />
          <span>1205 рубль</span>
        </li>
        <li>
          <Link to="/favorites">
            <img src="./img/favorites.svg" alt="favorites" />
          </Link>
          <img src='./img/user.svg' />
        </li>
      </ul>
    </header>
  )
}
export default Header