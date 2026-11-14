import { NavLink } from "react-router-dom";

function Navbar() {
return (
<nav>
<h2>ROGUE FITS</h2>

  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/shop">Shop</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </div>
</nav>
);
}

export default Navbar;