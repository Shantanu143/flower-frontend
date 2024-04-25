import Producats from "./containers/Producats";
// import Header from "./containers/Header";
import HomeContainer from "./containers/HomeContainer";
import About from "./containers/About";
import IconContainer from "./containers/IconContainer";
import Review from "./containers/Review";
import Contact from "./containers/Contact";
// import Footer from "./containers/Footer";

import "./home.css";
const Home = () => {
  return (
    <div className="homePage">
      {/* <Header /> */}
      <HomeContainer />
      <About />
      <IconContainer />
      <Producats />
      <Review />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
