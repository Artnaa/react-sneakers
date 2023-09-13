import styles from './Card.module.css'
console.log(styles);

function Card(props) {

  // const onClickButton = ()=>{
  //   alert(props.title)
  // }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heartunliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="sneakners" />
      <h5>{props.title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className='button' onClick={props.onClick}>
          <img width={15} height={15} src='./img/plus.svg' alt="" />
        </button>
      </div>
    </div>

  )
}
export default Card