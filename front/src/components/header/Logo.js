import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to={'/'}>
      <div className="logo">
        <picture><img src='../images/cocodrilos.png' alt="Logo" /></picture>
        <div className="footer-brand">
          <p>Arte de <span>Cocodrilos</span></p>
        </div>
      </div>
    </Link>
  )
}
