function Header() {
  return (
    <header className='d-flex justify-between align-center p-40'>
      <div className='d-flex align-center'>
        <img src='./img/logo.svg' />
        <div>
          <h3 className='text-uppercase '>React Sneakers</h3>
          <p className='opacity-5'>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className='d-flex '>
        <li className='mr-30'>
          <img src='./img/card.svg' />
          <span>1205 рубль</span>
        </li>
        <li>
          <img src='./img/user.svg' />
        </li>
      </ul>
    </header>
  )
}
export default Header