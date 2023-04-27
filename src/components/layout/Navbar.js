import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">SDFT04</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto  mr-5">
          <li className="nav-item">
            <Link to="/" className="nav-link active text-danger">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link  active text-danger" >About</Link>
          </li>
          <li className="nav-item">
            <Link to="addblog" className="nav-link active text-danger" >Add Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="blog" className="nav-link active text-danger">Blog</Link>
          </li>
        </ul>
        <button type="button" className="btn btn-danger rounded-5 mx-5 px-4">Login</button>

      </div>
    </div>
  </nav>
  )
}

export default Navbar