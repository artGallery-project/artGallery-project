import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../layout/MetaData';
import { useParams } from 'react-router-dom';
import { clearErrors, getProductDetails } from '../../actions/productActions';
import { useAlert } from 'react-alert';
import { Carousel } from 'react-bootstrap';

export const ProductDetails = () => {
  /* const { loading, product, error } = useSelector(state => state.productDetails); */
  const { loading, product, error } = useSelector(state => state.productDetails);
  const { id } = useParams();
  const alert = useAlert();
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(id))
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }
  }, [dispatch, alert, error, id])

  /* Cantidad del producto que el cliente va a comprar */
  const increaseQty = () => {
    const contador = document.querySelector('.count')

    if (contador.valueAsNumber >= product.inventario) return;

    const qty = contador.valueAsNumber + 1;
    setQuantity(qty)
  }

  const decreaseQty = () => {
    const contador = document.querySelector('.count')

    if (contador.valueAsNumber <= 1) return;

    const qty = contador.valueAsNumber - 1;
    setQuantity(qty)
  }
  /* Cantidad del producto que el cliente va a comprar */

  return (
    <Fragment>
      {loading ? <i className="fa fa-refresh fa-spin fa-2x fa-fw"></i> : (
        <Fragment>
          <MetaData title={product.nombre}></MetaData> {/* {product.nombre} */}
          <div className='row d-flex justify-content-center align-items-start'>
            <div className='col-12 col-lg-5 img-fluid mt-5' id="imagen_producto">
              <div className='details-img'>
                {/* <img src='../../images/obras/mona_lisa.jpg' alt='Imagen_producto' /> */}
                <Carousel pause='hover' prevLabel='' nextLabel='' >
                  {product.imagen && product.imagen.map(img => (
                    <Carousel.Item key={img.public_id}>
                      <img className="" src={img.url} alt={product.nombre}></img>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>

            <div className='col-12 col-lg-6 mt-5'>
              <h3>{product.nombre}</h3>
              <p id="product_id">ID del Producto: {product._id}</p>
              <hr />

              <div className='rating-outer'>
                <div className="rating-inner" style={{ width: `${(product.calificacion / 5) * 100}%` }}></div>
              </div>
              <span id="No_de_reviews">  ({product.numCalificaciones} Reviews)</span>
              <hr />

              <p id="precio_producto">Valor: ${product.precio}</p>

              <div className='d-flex justify-content-start'>
                <div className="stockCounter d-flex align-items-center">
                  <span className="btn btn-danger minus d-flex align-items-center" onClick={decreaseQty}>-</span>
                  <input type="number" className="form-control count p-0 text-center" value={quantity}  readOnly />
                  <span className="btn btn-primary plus d-flex align-items-center" onClick={increaseQty}>+</span>
                </div>
                <button
                  type="button"
                  id="view_btn"
                  className="shadow-sm registro-button ml-4"
                  disabled={product.inventario === 0}
                /* onClick={addToCart} */
                >Agregar al Carrito
                </button>
              </div>
              <hr />

              <p>Estado: <span id="stock_stado" className={product.inventario > 0 ? 'greenColor' : 'redColor'}>{product.inventario > 0 ? "En existencia" : "Agotado"}</span></p>
              <hr />

              <h4 className="mt-2">Descripción:</h4>
              <p>{product.descripcion}</p>
              <hr />

              <p id="vendedor">Vendido por: <strong>{product.vendedor}</strong></p>
              <hr />

              <button id="btn_review" type="button" className="btn btn-primary mt-4"
                data-toggle="modal" data-target="#ratingModal">Deja tu Opinion</button>
              <div className="alert alert-danger mt-5" type="alert">Inicia Sesión para dejar tu review</div>



              {/*Mensaje emergente para dejar opinion y calificacion*/}
              <div className="mt-2 mb-5">
                <div className="rating ">
                  <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog"
                    aria-labelledby='ratingModalLabel' aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="ratingModalLabel">Enviar Review</h5>
                          <button type="button" className='close' data-dismiss="modal" aria-label='Close'>
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <ul className="stars">
                            <li className="star"><i className="fa fa-star"></i></li>
                            <li className="star"><i className="fa fa-star"></i></li>
                            <li className="star"><i className="fa fa-star"></i></li>
                            <li className="star"><i className="fa fa-star"></i></li>
                            <li className="star"><i className="fa fa-star"></i></li>
                          </ul>

                          <textarea name="review" id="review" className="form-control mt3"></textarea>

                          <button className="btn my-3 float-right review-btn px-4 text-white"
                            data-dismiss="modal" aria-label="Close">Enviar</button>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}
