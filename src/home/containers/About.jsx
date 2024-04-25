
import video from "../../assets/video (2160p).mp4";
// import video from "./assets/video (2160p).mp4";
const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span> about </span> us
      </h1>

      <div className="row">
        <div className="video-container">
          <video src={video} loop autoPlay muted></video>
          <h3>Best Fower Sellers</h3>
        </div>

        <div className="content">
          <h3>why choose us?</h3>
          <p>
            When you choose our flower selling website, you're selecting more
            than just a place to buy blooms – you're opting for an experience
            marked by freshness, variety, and convenience. Our commitment to
            sourcing the freshest flowers ensures that each bouquet is a vibrant
            masterpiece that will brighten any occasion. With a wide selection
            of arrangements ranging from elegant bouquets to charming
            centerpieces, we cater to every taste and preference. Our
            user-friendly website makes browsing and ordering a seamless
            process, allowing you to find the perfect floral expression with
            ease. Moreover, our reliable delivery service ensures that your
            thoughtful gift arrives on time, every time, adding a touch of joy
            to your recipient's day. Backed by exceptional customer service,
            competitive pricing, and a dedication to customer satisfaction, we
            are your trusted partner in creating memorable moments with flowers.
            Choose us for an unparalleled floral experience that combines
            quality, convenience, and heartfelt beauty.
          </p>
          {/* <a href="#" className="btn">
            learn more
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
