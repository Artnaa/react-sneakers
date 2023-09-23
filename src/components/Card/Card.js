import React from 'react'
import styles from './Card.module.css'

function Card({ onFavorite, imageUrl, title, price, onPlus }) {

  const [isAdded, setIsAdded] = React.useState();
  const [isFavorite, setIsFavorite] = React.useState();


  const onClickPlus = () => {
    onPlus({ title, imageUrl, price })
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    onFavorite({ title, imageUrl, price })
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card} >
      <div className={styles.favorite} >
        <img src={isFavorite ? "/img/heartliked.svg" : "/img/heartunliked.svg"} alt="Unliked" onClick={onClickFavorite} />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakners" />
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className={styles.plus} src={isAdded ? './img/btnchecked.svg' : './img/plus.svg'} alt="plus" onClick={onClickPlus} />
      </div>
    </div>

  )
}
export default Card