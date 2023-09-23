function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className='overlay'>
      <div className='drawer'>
        <h2 className='mb-30 d-flex justify-between'>Корзина<img className='removeBtn' src="./img/delete.svg" alt="removeicon" onClick={onClose} />
        </h2>

        {items.length > 0 ?
          <div>
            <div className='items'>
              {items.map((obj) => (
                <div className='cartItem d-flex alig-center mb-20'>
                  <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className='cartItemImg'>
                  </div>
                  <div className='mr-20 flex'>
                    <p className='mb-5'>{obj.title}</p>
                    <b>{obj.price} руб</b>
                  </div>
                  <img className='removeBtn' src="./img/delete.svg" alt="removeicon" onClick={() => onRemove(obj.id)} />
                </div>
              ))}

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
          :


          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width='120px' height='120px' src='./img/emptycart.png' alt="emptycart" />
            <h2>Корзина пустая</h2>
            <p className="opacity-6 ">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className="greenButton" onClick={onClose}>
              <img src="/img/arrow.svg" alt="arrow" />
              Вернуться Назад
            </button>
          </div>

        }






      </div>

    </div>
  )
}
export default Drawer