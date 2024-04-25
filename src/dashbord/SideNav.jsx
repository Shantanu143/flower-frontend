import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <header>
      <input type="checkbox" name="" id="toggler" />
      <label htmlFor="toggler" className="fas fa-bars"></label>

      <a href="#" className="logo">
        Dashbord<span>.</span>
      </a>

      <nav className="navbar">
        {/* <a href="#home">home</a> */}
        {/* <a href="#about">about</a> */}
        <Link to="/">Go Home</Link>
        <Link to="/dashbord/addflower">Add Flower</Link>
        <Link to="/dashbord/manageflower">Manage Flowers</Link>
       
      </nav>

      <div className="icons">
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-shopping-cart"></a>
        <a href="#" className="fas fa-user"></a>
      </div>
    </header>
  );
};

export default SideNav;
