import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import review1 from "../../assets/review_3.jpg";
import review2 from "../../assets/review_2.jpg";
import review3 from "../../assets/review_1.jpg";

const Review = () => {
  const review = [
    {
      para: "I stumbled upon this flower website while searching for a perfect bouquet for my mom's birthday. I must say, I was blown away by the variety they offer! The website is so easy to navigate, and I found exactly what I was looking for within minutes.",
      name: "sarala purnale",
      status: "happy customer",
      img: review1,
    },
    {
      para: "As someone who adores flowers, I've tried numerous online flower shops, but none have impressed me as much as this one. From the moment I landed on their website, I was greeted with stunning visuals and a user-friendly interface. ",
      name: "supriya mule",
      status: "happy customer",
      img: review2,
    },
    {
      para: "I recently ordered flowers for my best friend's bridal shower from this website, and I couldn't be happier with my purchase. Not only were the flowers absolutely gorgeous and exactly as pictured, but the entire ordering process was seamless. ",
      name: "Bhavana purnale",
      status: "happy customer",
      img: review3,
    },
  ];

  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((data, index) => {
            const { para, name, status, img } = data;
            return (
              <>
                <div className="box" key={index}>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                  </div>
                  <p>{para}</p>
                  <div className="user">
                    <img src={img} alt={name} />
                    <div className="user-info">
                      <h3>{name}</h3>
                      <span>{status}</span>
                    </div>
                  </div>
                  <span>
                    <FaQuoteRight className="fa-quote-right" />
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Review;
