import React, { useState } from 'react'
import links from '../api/NavbarApi'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [isToggle, setToggle] = useState(false)
  const [activeLink, setActiveLink] = useState('');
  const handleToggle = ()  =>{
    setToggle(!isToggle)
  }
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light ">
      <div className="container">
        <img src="/logo.png" className="img-fluid rounded-circle" width={70} />
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation" onClick={handleToggle}
        >
          <i className={isToggle ? `fa-solid fa-xmark`: ` fa-solid fa-bars`}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
  {links.map((link) => (
    <li className="nav-item mx-2 fs-5" key={link.name}>
      <Link
        className={`nav-link ${link.path === activeLink ? 'active' : ''}`}
        to={link.path}
        onClick={() => handleLinkClick(link.path)}
      >
        {link.name}
      </Link>
    </li>
  ))}
</ul>
            <a href="https://bit.ly/3WqGjBJ" target='_blank'><button className='btn btn-info'>Visit Channel</button></a>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
