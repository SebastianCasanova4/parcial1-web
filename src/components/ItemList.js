import Item from "./Item";


const ItemList = ( {imagenes} ) => {

  return (
    <div className="container">
        <div className="imagenes">
            { imagenes.map((prod) => <Item imagen={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList