import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      
      <header className="header_section">
        <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link to='/' className="navbar-brand" ><img width={250} src="./assets/images/logo.png" alt="#" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                  <li className="nav-item">
                  <Link to="/testimonial" className="nav-link">Testimonial</Link>
                  </li>

                <li className="nav-item">
                    <Link to='/product' className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                    <Link to='/blog' className="nav-link" >Blog</Link>
                </li>
                <li className="nav-item">
                    <Link to='contact' className="nav-link">Contact</Link>
                </li>
               
                <li className="nav-item">
                  <Link to='/cart' className="nav-link">
                   <i className="fa fa-shopping-bag fa-2x" />
                  </Link>
                </li>
                <form className="form-inline">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true" />
                    </button>
                </form>
                </ul>
            </div>
            </nav>
        </div>
        </header>

    </div>
  )
}

export default Header
