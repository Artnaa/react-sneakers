function Drawer() {
  return (
    <div className='overlay'>
      <div className='drawer'>
        <h2 className='mb-30 d-flex justify-between'>Корзина<img className='removeBtn' src="./img/delete.svg" alt="removeicon" /></h2>

        <div className='items'>

          <div className='cartItem d-flex alig-center mb-20'>

            <div style={{ backgroundImage: 'url(/img/sneakers/image1.png)' }} className='cartItemImg'>

            </div>
            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className='removeBtn' src="./img/delete.svg" alt="removeicon" />
          </div>

          <div className='cartItem d-flex alig-center'>

            <div style={{ backgroundImage: 'url(/img/sneakers/image1.png)' }} className='cartItemImg'>

            </div>
            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className='removeBtn' src="./img/delete.svg" alt="removeicon" />
          </div>

        </div>

        <ul>
          <li className='d-flex'>
            <span>Итого</span>
            <div></div>
            <b>21 498 руб.</b>
          </li>
          <li className='d-flex' >
            <span>Налог 5%</span>
            <div></div>
            <b>21 498 руб.</b>
          </li>
        </ul>
        <button className='greenButton'>Оформить заказ <img src="./img/arrow.svg" alt="arrow" /></button>
      </div>

    </div>
  )
}
export default Drawer