import React from 'react'
import { Logo } from './Logo'
import PerfilClient from './PerfilClient'
import Search from './Search'

const HeaderTablet = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='logo-nav'>
          {<Logo />}
        </div>
        <Search />
        <div className='perfil-nav'>
          <PerfilClient/>
        </div>
      </nav>
    </header>
  )
}

export default HeaderTablet