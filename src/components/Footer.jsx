import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h2>ROGUE FITS</h2>
          <p>BE DIFFERENT. BE ROGUE.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Rogue Fits. All rights reserved.</p>
        <p>STYLE WITHOUT LIMITS.</p>
      </div>
    </footer>
  );
}

export default Footer;