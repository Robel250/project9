import React from 'react'
import { Link } from 'react-router-dom'
function  Header() {
  return (
    <div className='head'>
    <h4>Company name</h4>
  <nav>
    <Link to='/features'>Features</Link>
    <Link to='/enterprise'>Enterprise</Link>
    <Link to='/support'>Support</Link>
    <Link to='/home'>Home</Link>
  </nav>
  </div>
  
  
  )
}

export default Header;
