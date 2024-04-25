import About from "../home/containers/About";
import Contact from "../home/containers/Contact";
import HomeContainer from "../home/containers/HomeContainer";
import IconContainer from "../home/containers/IconContainer";
import Producats from "../home/containers/Producats";
import Review from "../home/containers/Review";

const HomePage = () => {
  return (
    <>
      <HomeContainer />
      <About />
      <IconContainer />
      <Producats />
      <Review />
      <Contact />
    </>
  );
};

export default HomePage;
