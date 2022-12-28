import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors, updatePassword } from '../../actions/userActions'
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstans'
import MetaData from '../layout/MetaData'

export const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, isUpdated, loading } = useSelector(state => state.user);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Contraseña Actualizada Correctamente");
      navigate("/yo");

      dispatch({
        type: UPDATE_PASSWORD_RESET
      })
    }
  }, [dispatch, navigate, alert, error, isUpdated])


  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("oldPassword", oldPassword);
    formData.set("newPassword", newPassword);

    dispatch(updatePassword(formData));
  }


  return (
    <Fragment>
      <MetaData title={'Cambiar contraseña'} />

      <div className="registro">
        <div className="registro-form-container shadow">
          <div className='logo-registro'>
            <img src="../images/cocodrilos.png" alt="logo" className="logo" />
            <span>Cocodrilos</span>
          </div>


          <form className="registro-form" onSubmit={submitHandler}>
            <h2 className='mb-4'>Actualizar Contraseña</h2>
            <div className='registro-fields'>
              <div className="registro-field">
                <label for="old_password_field">Contraseña Anterior</label>
                <input
                  type="password"
                  id="old_password_field"
                  className="form-control"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>

              <div className="registro-field">
                <label for="new_password_field">Nueva Contraseña</label>
                <input
                  type="password"
                  id="new_password_field"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" id="view_btn" className='shadow-sm registro-button'
              disabled={loading ? true : false} >Actualizar Contraseña</button>

              <div className="footer-registro-form">
                  <p>Arte de <span>Cocodrilos</span></p>
                </div>
          </form>
        </div>
      </div>

    </Fragment>
  )
}
