import './App.css';

function App() {
  return (
    <div className="wrapper clear">
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
            <span>1205 рубю</span>
          </li>
          <li>
            <img src='./img/user.svg' />
          </li>
        </ul>
      </header>
      <div className='content p-40'>
        <h1 className='mb-40'>Все кроссовоки</h1>

       <div className='sneakers d-flex'>
       <div className='card'>
          <img width={133} height={112} src="./img/sneakers/image 5-10.png" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={15} height={15} src='./img/plus.svg' alt="" />
            </button>
          </div>

        </div>

        <div className='card'>
          <img width={133} height={112} src="./img/sneakers/image 5-11.png" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={15} height={15} src='./img/plus.svg' alt="" />
            </button>
          </div>
        </div>

        <div className='card'>
          <img width={133} height={112} src="./img/sneakers/image 5-9.png" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={15} height={15} src='./img/plus.svg' alt="" />
            </button>
          </div>
        </div>

        <div className='card'>
          <img width={133} height={112} src="./img/sneakers/image 5-8.png" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={15} height={15} src='./img/plus.svg' alt="" />
            </button>
          </div>
        </div>
       </div>



      </div>
    </div>
  );
}

export default App;
