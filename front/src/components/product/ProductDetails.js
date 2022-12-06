import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData';

export const ProductDetails = () => {
  return (
    <Fragment>
      <MetaData title='Detalles' />
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
          <div className='details-img'>
            <img src='../../images/obras/mona_lisa.jpg' alt='Imagen_producto' />
          </div>
        </div>

        <div className='col-12 col-lg-5 mt-5'>
          <h3>Monalisa</h3>
          <p id="product_id">Product #3253252</p>
        </div>
      </div>
    </Fragment>
  )
}
