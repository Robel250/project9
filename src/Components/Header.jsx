import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='head'>
    <h4>Company name</h4>
  <nav>
    <NavLink to='/features'>Features</NavLink>
    <NavLink to='/enterprise'>Enterprise</NavLink>
    <NavLink to='/support'>Support</NavLink>
    <NavLink to='/home'>Home</NavLink>
  </nav>
  </div>
  )
}

export default Navbar
