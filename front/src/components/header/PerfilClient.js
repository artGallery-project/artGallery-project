import React from 'react'
import { Link } from 'react-router-dom'

const PerfilClient = () => {
  return (
    <div className="perfil ">
      <div className='dropdown perfil'>
        <Link to='/productList'>
          <div className='d-flex align-items-center'>
            <i className="bi bi-cart fa-2x text-dark d-flex align-items-center m-1" aria-hidden="false"></i>
            <span className="ml-1 bg-gradient py-2 px-3 text-dark shadow-sm">2</span>{/* id="cart_count" */}
          </div>
        </Link>
        
          <Link to={'#!'} className='btn bg-transparent dropdown-toggle d-flex align-items-center' type='button' id='dropDownMenu' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            <figure className='user-perfil'>
              <i className='bi bi-person fa-2x' />
            </figure>
            <span>NombreApellido</span>
          </Link>        
          <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
            <Link to='/dashboard' className='dropdown-item'>Administrador</Link>
            <Link to='/' className='dropdown-item'>Pedidos</Link>
            <Link to='/' className='dropdown-item'>Perfil</Link>
            <Link to='/' className='dropdown-item'>Cerrar Sesión</Link>
          </div>

        <button id="view_btn" className='shadow-sm registro-button'>Login</button>

      </div>
    </div>
  )
}

export default PerfilClient