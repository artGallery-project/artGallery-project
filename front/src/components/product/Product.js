import React from 'react';
import {Link} from 'react-router-dom';

const Product = ({producto}) => {
  return (
    <div className='cards'>
      {/* <div className=' p-3 rounded'> */}
      <div className='card-img'>
        <img className='' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img>
      </div>
      <div className='card-body d-flex flex-column'>
        <h5 id="titulo_producto"><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
        <div className='rating mt-auto'>
          <div className='rating-outer'>
            <div className='rating-inner' style={{ width: `${(producto.calificacion / 5) * 100}%` }}></div>
          </div>
          <span id="No_de_opiniones"> {producto.numCalificaciones} Reviews</span>
        </div>
        <p className='card-text'>${producto.precio}</p>
        <Link to={`/producto/${producto._id}`} id="view_btn" className='/* btn btn-block */ registro-button'>
          Ver detalle
        </Link>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Product;