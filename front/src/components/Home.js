import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

export const Home = () => {
  const { loading, products, error } = useSelector(state => state.products);
  const alert = useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    dispatch(getProducts());
    alert.success('OK');
  }, [dispatch, alert, error])

  return (
    <Fragment>
      {loading ? <h2>Cargando...</h2> : (
        <Fragment>
          <MetaData title="Tu mejor galería"></MetaData>
          <div className='home-container'>
            <h1 id="encabezado_productos">Galería</h1>
            <section className='card-container'>

              {products && products.map(producto => (
                <div key={producto._id} className='cards'>
                  <div className='card-img'>
                    <img className='' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img>
                  </div>
                  <div className='card-body d-flex flex-column'>
                    <h5 id="titulo_producto"><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>

                    <div className='rating mt-auto'>
                      <div className='rating-outer'>
                        <div className='rating-inner' style={{ width: `${(producto.calificacion / 5) * 100}%` }}> Rating</div>
                      </div>
                      <span id="No_de_opiniones"> {producto.numCalificaciones} Reviews</span>
                    </div>

                    <p className='card-text'>${producto.precio}</p>
                    <Link to={`/producto/${producto._id}`} id="view_btn" className='registro-button mb-3'>
                      Ver detalle
                    </Link>
                  </div>
                </div>
              ))}

            </section>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}
