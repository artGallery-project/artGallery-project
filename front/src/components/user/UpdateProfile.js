import React, { Fragment, useEffect, useState } from 'react';
import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, loadUser, clearErrors } from '../../actions/userActions';
import { UPDATE_PROFILE_RESET } from '../../constants/userConstans';

export const UpdateProfile = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("")
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth);
  const { error, isUpdated, loading } = useSelector(state => state.user);

  useEffect(() => {
    if (user) {
      setNombre(user.nombre);
      setEmail(user.email);
      setPhone(user.phone);
      setAddress(user.address);
      setBirthday(user.birthday);
      setAvatarPreview(user.avatar.url)
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Perfil actualizado correctamente")
      dispatch(loadUser());

      navigate("/yo")

      dispatch({
        type: UPDATE_PROFILE_RESET
      })
    }
  }, [dispatch, alert, error, isUpdated])

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("nombre", nombre);
    formData.set("email", email);
    formData.set("phone", phone);
    formData.set("address", address);
    formData.set("birthday", birthday);
    formData.set("avatar", avatar)

    dispatch(updateProfile(formData))
  }

  const onChange = e => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result)
        setAvatar(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])

  }


  return (
    <Fragment>
      {loading ? <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (

        <Fragment>
          <MetaData title={'Actualizar perfil'} />
          <div className='registro'>
            <div className='registro-form-container shadow'>
              <div className='logo-registro'>
                <img src="../images/cocodrilos.png" alt="logo" className="logo" />
                <span>Cocodrilos</span>
              </div>


              <form className="registro-form" onSubmit={submitHandler} encType='multipart/form-data'>
                <h2 className='mb-4'>Actualizar Perfil</h2>
                <div className='registro-fields'>

                  <div className='registro-field'>
                    <label htmlFor='name_field'>Nombre</label>
                    <input
                      type='name'
                      id='name_field'
                      name='nombre'
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>

                  <div className='registro-field'>
                    <label htmlFor='email_field'>Email</label>
                    <input
                      type='email'
                      id='email_field'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* <div className='registro-field'>
                    <label htmlFor='password_field'>Contraseña</label>
                    <input
                      type='password'
                      id='password_field'
                      name='password'
                      value={password}
                      onChange={onChange}
                      placeholder='********'
                    />
                  </div> */}

                  <div className='registro-field'>
                    <label htmlFor='phone_field'>Teléfono</label>
                    <input
                      type='text'
                      id='phone_field'
                      name='phone'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className='registro-field'>
                    <label htmlFor='address_field'>Dirección</label>
                    <input
                      type='text'
                      id='address_field'
                      name='address'
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div className='registro-field'>
                    <label htmlFor='date_field'>Fecha de nacimiento</label>
                    <input
                      type='date'
                      id='date_field'
                      name='birthday'
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
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

                <button type="submit" id="view_btn" className='shadow-sm registro-button'
                  disabled={loading ? true : false} >Actualizar Perfil</button>
                {/* <button type="submit" className="registro-button">Continuar</button> */}

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
