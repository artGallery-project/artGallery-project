import React, { Fragment, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';

import MetaData from '../layout/MetaData';
import AdminMenu from './AdminMenu';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productActions';
import { Link } from "react-router-dom";


export default function ProductList() {
  const { loading, error, products } = useSelector(state => state.products);
  const alert = useAlert();

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error)
    }
    dispatch(getProducts());
  }, [dispatch, alert, error])


  /* Columnas para la tabla */
  const setProducts = () => {
    const data = {
      columns: [
        {
          label: 'Nombre', //Nombre del campo
          field: 'nombre', //Identificador del campo
          sort: 'asc'
        },
        {
          label: 'Precio',
          field: 'precio',
          sort: 'asc'
        },
        {
          label: 'Inventario',
          field: 'inventario',
          sort: 'asc'
        },
        {
          label: 'Vendedor',
          field: 'vendedor',
          sort: 'asc'
        },
        {
          label: 'Acciones',
          field: 'actions',
        },
      ],
      rows: []
    }
    //Llenar campos con la información de la base de datos
    products.forEach(product => {
      data.rows.push({
        nombre: product.nombre,
        precio: `$${product.precio}`,
        inventario: product.inventario,
        vendedor: product.vendedor,
        actions: <Fragment>
          <div className='d-flex justify-content-center'>
            <Link to={`/producto/${product._id}`} className="btn btn-outline-primary py-1 px-2">
              <i className="fa fa-eye"></i>
            </Link>

            <Link to='/' className="btn btn-warning py-1 px-2 mx-3">
              <i class="fa fa-pencil"></i>
            </Link>

            <button className="btn btn-outline-danger py-1 px-2">
              <i className="bi bi-trash"></i>
            </button>
          </div>


        </Fragment>
      })
    })
    //Llenar campos con la información de la base de datos
    return data;
  }
  /* Columnas para la tabla */


  return (
    //El Fragment usa información que trae de otro lado
    <Fragment>
      <MetaData title={'All Products'} />
      <div className="row">
        <div className="col-12 col-md-2">
          <AdminMenu />
        </div>

        <div className="col-12 col-md-9">
          <Fragment>
            <h2 className="my-5">Productos Registrados</h2>

            {loading ? <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
              <MDBDataTable
                data={setProducts()} //Caraterísticas de la tabla (html)
                className="px-3 shadow rounded"
                bordered
                striped
                hover
              /> //Herramienta que coge una estructura Json y lo organiza y ajusta a una tabla. Hay que instalar el recurso(npm i mdbreact) 
            )}

          </Fragment>
        </div>
      </div>
    </Fragment>
  )
}
