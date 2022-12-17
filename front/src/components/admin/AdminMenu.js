import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <main>

      <a className="btn" data-bs-toggle="offcanvas" data-toggle='collapse' aria-expanded='false' href="#adminMenu" role="button" aria-controls="adminMenu"><i className="bi bi-list"></i></a>

      <div className='sidebar-wrapper collapse list-unstyled' id='adminMenu'>
        <nav id='sidebar'>
          <ul className='list-unstyled components'>
            <li className='p-2'>
              <Link to='/dashboard' className='text-dark'><i className='fa fa-tachometer m-1'></i>Administración</Link>
            </li>

            {/* Productos */}
            <li className='p-2'>
              <a href='#productSubmenu' data-toggle='collapse' aria-expanded='false' className='dropdown-toggle text-dark'><i className='fa fa-product-hunt m-1'>Productos</i></a>
              <ul className='collapse list-unstyled' id='productSubmenu'>
                <li>
                  <Link to='/productList' className='text-dark'><i className='fa fa-clipboard m-2'></i>Lista de productos</Link>
                </li>
                <li>
                  <Link to='/newProduct' className='text-dark'><i className='fa fa-plus m-2'></i>Nuevo producto</Link>
                </li>
              </ul>
            </li>
            {/* Productos */}


            {/* Pedidos */}
            <li className='p-2'>
              <Link to='/' className='text-dark'><i className='fa fa-shopping-basket m-1'></i>Pedidos</Link>
            </li>
            {/* Pedidos */}


            {/* Usuarios */}
            <li className='p-2'>
              <Link to='/' className='text-dark'><i className='fa fa-users m-1'></i>Usuarios</Link>
            </li>
            {/* Usuarios */}


            {/* Reviews */}
            <li className='p-2'>
              <Link to="/" className='text-dark'><i className="fa fa-star m-1"></i> Opiniones</Link>
            </li>
            {/* Reviews */}
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default AdminMenu;