import React, { Fragment, useEffect, useState } from 'react';
import MetaData from '../layout/MetaData';
import { Link, useNavigate } from 'react-router-dom';
import { login, clearErrors } from '../../actions/userActions';
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(state => state.auth)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
    if (error) {
      dispatch(clearErrors);
    }
  }, [dispatch, isAuthenticated, error])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  }


  return (
    <Fragment>
      {loading ? <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
        <Fragment>
          <MetaData title={'Inicie Sesión'} />
          <div className="login">
            <div className="login-form-container">
              <div className="logo-login">
                <img src="../images/cocodrilos.png" alt="logo" className="logo" />
                <span>Cocodrilos</span>
              </div>

              <form className="login-form" onSubmit={submitHandler}>
                <h3 className='mb-5'>Inicio de sesión</h3>
                {/* Campo para email */}
                <label htmlFor="email" className="label">Correo electrónico</label>
                <input
                  className="login-input"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="usuario@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* Campo para email */}

                {/* Campo para contraseña */}
                <label htmlFor="password" className="label">Contraseña</label>
                <input
                  className="login-input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* Campo para contraseña */}
                <span className='error-message-form'>Error: </span>

                {/* Olvido de contraseña */}
                <Link to={'/password/forgot'} className='mb-2'><span className='login-register float-right'>¿Olvidó su contraseña?</span></Link>
                {/* Olvido de contraseña */}

                <input type="submit" className="login-button" />
              </form>

              {/* <span className='login-register float-right'>¿Usuario nuevo? <Link to={'/register'}>Resgistrar</Link></span> */}
              <Link to="/register"> <span className='login-register float-right'>Usuario nuevo? Registrese aquí</span></Link>

              <div className="footer-login-form">
                <p>Arte de <span>Cocodrilos</span></p>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Login