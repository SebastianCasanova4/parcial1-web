import { useEffect, useState } from "react";
import ItemList from "./ItemList.js";
import { pedirImagenes } from "../helpers/pedirImagenes";

const ItemListContainer = () => {

    const [imagenes, setImagenes] = useState([]);


    useEffect(() => {
        pedirImagenes()
        .then((res)=>{
            setImagenes(res)
        })
    }, [])
    
    
  return (
    <div>
        <ItemList imagenes={imagenes} />
    </div>
  )
}

export default ItemListContainer