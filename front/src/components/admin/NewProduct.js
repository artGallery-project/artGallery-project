import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import AdminMenu from './AdminMenu'

function NewProduct() {
  return (
    <Fragment>
      <MetaData title={'Nuevo Producto'} />
      <div className="row">
        <div className="col-12 col-md-2">
          <AdminMenu />
        </div>

        <div className="col-12 col-md-9">
          <Fragment>
            <div className="registro my-4">

              <div className='registro-form-container shadow'>
                <div className='logo-registro py-2'>
                  <img src="../images/cocodrilos.png" alt="logo" className="logo" />
                  <span>Cocodrilos</span>
                </div>

                <form className="p-5" encType='multipart/form-data'>
                  <h4 className="mb-4">Nueva obra</h4>

                  <div className="form-group">
                    <label htmlFor="name_field">Nombre de la obra</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name_field">Autor</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="price_field">Precio</label>
                    <input
                      type="number"
                      id="price_field"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description_field">Descripcion</label>
                    <textarea
                      className="form-control"
                      id="description_field"
                      rows="6"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category_field">Categoria</label>
                    <select className="form-control"
                      id="category_field"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="stock_field">Inventario</label>
                    <input
                      type="number"
                      id="stock_field"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="seller_field">Vendedor</label>
                    <input
                      type="text"
                      id="seller_field"
                      className="form-control"
                    />
                  </div>

                  {/* Imágenes */}
                  <div className='form-group'>
                    <label>Imágenes</label>
                    <div className='custom-file'>
                      <input
                        type='file'
                        name='product_images'
                        className='custom-file-input'
                        id='customFile'
                        multiple
                      />
                      <label className='custom-file-label' htmlFor='customFile'>
                        Seleccione Imágenes
                      </label>
                    </div>
                  </div>
                  {/* Imágenes */}
                  <div className='button-cart'>
                    <button
                      id="login_button"
                      type="submit"
                      className="registro-button-cart comprar"
                    >
                      CREATE
                    </button>
                  </div>

                  <div className="footer-registro-form">
                    <p>Arte de <span>Cocodrilos</span></p>
                  </div>

                </form>
              </div>
            </div>
          </Fragment>
        </div>
      </div>

    </Fragment>
  )
}

export default NewProduct