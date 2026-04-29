import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>IEnlighten Minds</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Products</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#000",
    color: "#fff",
  },
};

export default Navbar;
