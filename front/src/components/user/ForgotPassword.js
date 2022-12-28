import React, { Fragment, useState, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword, clearErrors } from '../../actions/userActions'

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector(state => state.forgotPassword);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      alert.success(message);
    }
  }, [dispatch, alert, error, message])


  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('email', email);

    dispatch(forgotPassword(formData));
  }

  return (
    <Fragment>
      <MetaData title={'Olvidé mi contraseña'} />

      <div className="registro">
        <div className="registro-form-container shadow">
          <div className='logo-registro'>
            <img src="../images/cocodrilos.png" alt="logo" className="logo" />
            <span>Cocodrilos</span>
          </div>


          <form className="registro-form" onSubmit={submitHandler}>
            <h2 className='mb-4'>Olvidé mi contraseña</h2>
            <div className='registro-fields'>
              <div className=" form-group">
                <label htmlFor="email_field">Email registrado</label>
                <input
                  type="email"
                  id="email_field"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <button
              /* id="forgot_password_button" */
              type="submit"
              id="view_btn" 
              className='shadow-sm registro-button'
              disabled={loading ? true : false} >
              Recuperar contraseña
            </button>

            <div className="footer-registro-form">
              <p>Arte de <span>Cocodrilos</span></p>
            </div>
          </form>
        </div>
      </div>

    </Fragment>
  )
}
