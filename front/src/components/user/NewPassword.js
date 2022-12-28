import React, { Fragment, useState, useEffect } from 'react';

import MetaData from '../layout/MetaData';
import { useParams, useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, clearErrors } from '../../actions/userActions';


export const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const params = useParams();
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, success } = useSelector(state => state.forgotPassword);

  useEffect(() => {

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success('Contraseña reiniciada correctamente');
      navigate('/login');
    }

  }, [dispatch, alert, error, success])

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('password', password);
    formData.set('confirmPassword', confirmPassword);
    dispatch(resetPassword(params.token, formData))
  }
  return (
    <Fragment>
      <MetaData title={'Reinicio de contraseña'} />

      <div className="registro">
        <div className="registro-form-container shadow">
          <div className='logo-registro'>
            <img src="../images/cocodrilos.png" alt="logo" className="logo" />
            <span>Cocodrilos</span>
          </div>


          <form className="registro-form" onSubmit={submitHandler}>
            <h2 className='mb-4'>Nueva Contraseña</h2>

            <div className='registro-fields'>
              <div className="registro-field">
                <label htmlFor="password_field">Contraseña</label>
                <input
                  type="password"
                  id="password_field"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="registro-field">
                <label htmlFor="confirm_password_field">Confirmar Contraseña</label>
                <input
                  type="password"
                  id="confirm_password_field"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="registro-button">Nueva contraseña</button>

            <div className="footer-registro-form">
              <p>Arte de <span>Cocodrilos</span></p>
            </div>
          </form>
        </div>
      </div>

    </Fragment>
  )
}
