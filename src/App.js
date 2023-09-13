import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer'

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: './img/sneakers/image1.png'
  },

  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    imageUrl: './img/sneakers/image6.png'
  },

  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8999,
    imageUrl: './img/sneakers/image 5-8.png'
  },

  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageUrl: './img/sneakers/image1.png'
  },

]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>Все кроссовоки</h1>
          <div className='search-block'>
            <img src="./img/Search.svg" alt="Search" />
            <input placeholder='Поиск' />
          </div>
        </div>
        <div className='sneakers d-flex'>

          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => {
                console.log(obj);
              }}
            />
          ))}
        </div>
      </div>
    </div >
  );
}

export default App;
