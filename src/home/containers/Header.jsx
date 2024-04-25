import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <input type="checkbox" name="" id="toggler" />
      <label htmlFor="toggler" className="fas fa-bars"></label>

      <a href="#" className="logo">
        flower<span>.</span>
      </a>

      <nav className="navbar">
        {/* <a href="#home">home</a> */}
        {/* <a href="#about">about</a> */}
        <Link to="/">Home</Link>
        <Link to="/aboutpage">About</Link>
        <Link to="/productpage/65ee892948468cbe75070e28">Products</Link>
        {/* <a href="#products">products</a> */}
        {/* <a href="#review">review</a> */}
        <Link to="/contactpage">Contact</Link>
        {/* <a href="#contact">contact</a> */}
        {/* <a href="#contact">contact</a> */}
        <Link to="/signin">Sign In</Link>
      </nav>

      <div className="icons">
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-shopping-cart"></a>
        <a href="#" className="fas fa-user"></a>
      </div>
    </header>
  );
};

export default Header;
