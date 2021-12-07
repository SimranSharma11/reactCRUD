import React from "react";
import { Link ,NavLink} from "react-router-dom";
const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
  <div className="container-fluid">
    <NavLink className="navbar-brand" exact to="/">CRUD APPLICATION</NavLink>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link"  exact to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="contact">CONTACT</NavLink>
        </li>
    
      </ul>
      
    </div>
  </div>
  <Link className="btn btn-outline-light" to="/users/add">ADD USER</Link>
  </div>
</nav>
    );
};
export default Navbar;