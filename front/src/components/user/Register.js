import React, { Fragment, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../layout/MetaData';
import { register, clearErrors } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';


export const Register = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    birthday: "",
  })
  const navigate = useNavigate();
  const { nombre, email, password, phone, address, birthday } = user;
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg")
  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(state => state.auth)

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
    if (error) {
      dispatch(clearErrors)
    }
  }, [dispatch, navigate, isAuthenticated, error, alert])

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();    
    formData.set('nombre', nombre);
    formData.set('email', email);
    formData.set('password', password);
    formData.set('phone', phone);
    formData.set('address', address);
    formData.set('birthday', birthday);
    formData.set('avatar', avatar);

    dispatch(register(formData))
  }

  const onChange = e => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      }
      reader.readAsDataURL(e.target.files[0]);
    }
    else {
      setUser({ ...user, [e.target.name]: e.target.value })
    }
  }


  return (

    <Fragment>
      {loading ? <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (

        <Fragment>
          <MetaData title={'Registrar usuario'} />
          <div className='registro'>
            <div className='registro-form-container shadow'>
              <div className='logo-registro'>
                <img src="../images/cocodrilos.png" alt="logo" className="logo" />
                <span>Cocodrilos</span>
              </div>


              <form className="registro-form" onSubmit={submitHandler} encType='multipart/form-data'>
                <h3>Registro de usuario</h3>
                <div className='registro-fields'>

                  <div className='registro-field'>
                    <label htmlFor='name_field'>Nombre completo</label>
                    <input
                      type='name'
                      id='name_field'
                      name='nombre'
                      value={nombre}
                      onChange={onChange}
                      placeholder='Nombre y Apellidos'
                    />
                  </div>

                  <div className='registro-field'>
                    <label htmlFor='email_field'>Email</label>
                    <input
                      type='email'
                      id='email_field'
                      name='email'
                      value={email}
                      onChange={onChange}
                      placeholder='pepito@ejemplo.com'
                    />
                  </div>

                  <div className='registro-field'>
                    <label htmlFor='password_field'>Contraseña</label>
                    <input
                      type='password'
                      id='password_field'
                      name='password'
                      value={password}
                      onChange={onChange}
                      placeholder='********'
                    />
                  </div>

                  <div className='registro-field'>
                    <label htmlFor='phone_field'>Teléfono</label>
                    <input
                      type='text'
                      id='phone_field'
                      name='phone'
                      placeholder='Teléfono'
                      value={phone}
                      onChange={onChange}
                    />
                  </div>

                  <div className='registro-field'>
                    <label htmlFor='address_field'>Dirección</label>
                    <input
                      type='text'
                      id='address_field'
                      name='address'
                      placeholder='Dirección'
                      value={address}
                      onChange={onChange}
                    />
                  </div>

                  <div className='registro-field'>
                    <label htmlFor='date_field'>Fecha de nacimiento</label>
                    <input
                      type='date'
                      id='date_field'
                      name='birthday'
                      value={birthday}
                      onChange={onChange}
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='avatar_upload'>Avatar</label>
                    <div className='d-flex align-items-center'>
                      <div>
                        <figure className='logo mr-4 item-rtl'>
                          <img
                            src={avatarPreview}
                            className="rounded-circle"
                            alt="Vista Previa del Avatar"></img>
                        </figure>
                      </div>
                      <div className='custom-file'>
                        <input
                          type='file'
                          name='avatar'
                          className='custom-file-input'
                          id='customFile'
                          accept="images/*"
                          onChange={onChange}
                        />
                        <label className='custom-file-label' htmlFor='customFile'>
                          Escoger Avatar
                        </label>
                      </div>
                    </div>
                  </div>

                </div>
                <button type="submit" id="view_btn" className='registro-button mb-3'>Continuar</button>
                <div className="footer-registro-form">
                  <p>Arte de <span>Cocodrilos</span></p>
                </div>
              </form>

            </div>
          </div>
        </Fragment>

      )}
    </Fragment>

  )
}

