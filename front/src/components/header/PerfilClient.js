import React from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/userActions';

const PerfilClient = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector(state => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("LogOut exitoso");
  }

  return (
    <div className="perfil d-flex align-items-center">
      {user ? (
        <div className='dropdown perfil-usuario d-flex align-items-center'>
          {/* <div className='dropdown perfil'> */}
          <Link to='/compras'>
            <div className='d-flex align-items-center'>
              <i className="bi bi-cart fa-2x text-dark d-flex align-items-center m-1" aria-hidden="false"></i>
              <span className="ml-1 bg-gradient py-2 px-3 text-dark shadow-sm">2</span>{/* id="cart_count" */}
            </div>
          </Link>

          <Link to={'#!'} className='btn bg-transparent dropdown-toggle d-flex align-items-center' type='button' id='dropDownMenu' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            <figure className='user-perfil'>
              <img
                src={user.avatar && user.avatar.url}
                alt={user && user.nombre}
                className='rounded-circle'
              />
            </figure>
            <span>{user && user.nombre}</span>
          </Link>

          <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
            {user && user.role === 'admin' && (
              <Link to='/dashboard' className='dropdown-item'>Administrador</Link>
            )}
            <Link to='/' className='dropdown-item'>Pedidos</Link>
            <Link to='/yo' className='dropdown-item'>Perfil</Link>
            <Link to='/' onClick={logoutHandler} className='dropdown-item'>Cerrar Sesión</Link>
          </div>

          {/* <button id="view_btn" className='shadow-sm registro-button'>Login</button> */}

        </div>
      ) : !loading && <Link to="/login" id="view_btn" className='shadow-sm registro-button'>Login</Link>}
    </div>
  )
}

export default PerfilClient