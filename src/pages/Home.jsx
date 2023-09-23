import Card from "../components/Card/Card";

function Home(
  { items,
    serachValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart, }) {
  return (
    <div className='content p-40 ' >
      <div className='d-flex align-center mb-40 justify-between'>
        <h1>{serachValue ? `Поиск по запросу: ${serachValue}` : ' Все кроссовки'}</h1>
        <div className='search-block'>
          <img src="./img/Search.svg" alt="Search" />
          {serachValue && <img onClick={() => setSearchValue('')} className='clear cu-p' src="./img/delete.svg" alt="close" />}
          <input placeholder='Поиск' onChange={onChangeSearchInput} value={serachValue} />
        </div>
      </div>
      <div className='sneakers d-flex flex-wrap'>



        {items
          .filter((item) => item.title.toLowerCase().includes(serachValue))
          .map((item) => (
            <Card
              key={item.imageUrl}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}


              onFavorite={(obj) => {
                onAddToFavorite(obj)
              }}

              onPlus={(obj) => {
                onAddToCart(obj);
              }}
            />
          ))}
      </div>
    </div>
  )
}

export default Home