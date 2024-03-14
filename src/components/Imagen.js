import React from 'react'
import { Link } from 'react-router-dom'
import { pedirImagenes } from '../helpers/pedirImagenes'

const Imagen = ( {imagen} ) => {
  return (
    <div className="imagen">
        <img src={imagen.res} />
    </div>
  )
}

export default Item