import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData';

const productsCart = [
  {
    id: "5",
    amount: 2,
    "path-image": "./images/obras/mona_lisa.jpg",
    title: "Ondas",
    price: 400
  },
  {
    id: "11",
    amount: 1,
    "path-image": "./images/obras/la_noche_estrellada.jpg",
    title: "Ondas",
    price: 400
  },
  {
    id: "16",
    amount: 1,
    "path-image": "./images/obras/la_joven_de_la_perla.jpg",
    title: "Ondas",
    price: 400
  }
]


const CartHome = () => {
  return (
    <Fragment>
      <main className='card-cart'>
        <MetaData title={'Mi Carrito'} />
        {/* <div className='registro'> */}
        <div className='registro-form-container-cart my-4 shadow'>
          <div className='logo-registro'>
            <img src="../images/cocodrilos.png" alt="logo" className="logo" />
            <span>Cocodrilos</span>
          </div>
          <form action="/" className="registro-form-cart">
            <h3>Total Compra</h3>

            <section className='registro-fields-cart '>

              <table className="table table-sm align-middle shadow-sm table-hover">
                <thead>
                  <tr>
                    <th></th>
                    <th>Cantidad</th>
                    <th>Producto</th>
                    <th>Valor</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {productsCart.map((productCart) => {
                    const totalProduct = (productCart.amount) * (productCart.price);
                    return (
                      <tr key={productCart.id}>
                        <td>
                          <div className='image-container-cart'>
                            <img src={productCart["path-image"]} alt="img" />
                          </div>
                        </td>
                        <td>{productCart.amount}</td>
                        <td>{productCart.title}</td>
                        <td>{productCart.price}USD</td>
                        <td>{totalProduct}USD</td>
                      </tr>
                    )
                  })}
                </tbody>
                <tfoot>
                  <td>Total</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    {/* {totalProduct} */}
                  </td>
                </tfoot>
              </table>

            </section>

            <div className='button-cart'>
              <button type="submit" className="registro-button-cart comprar">Finalizar compra</button>
              <button type="submit" className="registro-button-cart cancelar ">Cancelar</button>
            </div>

            <div className="footer-registro-form">
              <p>Arte de <span>Cocodrilos</span></p>
            </div>
          </form>
        </div>
        {/* </div> */}

      </main>

    </Fragment>
  )
}

export default CartHome