import React from 'react'

const PerfilClient = () => {
  return (
      <div className="perfil ">
        <div className='dropdown perfil'>
          <div className='d-flex align-items-center'>
            <i className="bi bi-cart fa-2x text-dark d-flex align-items-center m-1" aria-hidden="false"></i>
            <span className="ml-1 bg-gradient py-2 px-3 text-dark shadow-sm"></span>{/* id="cart_count" */}
          </div>
          {/* <figure className='user-perfil'>
            <i className='bi bi-person fa-2x'/>
          </figure>
          <span>NombreApellido</span> */}
          <button id="view_btn" className='shadow-sm registro-button'>Login</button>
        </div>
      </div>
  )
}

export default PerfilClient