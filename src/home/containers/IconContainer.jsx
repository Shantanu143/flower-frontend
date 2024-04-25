import icon1 from "../../assets/icon_1.png";
import icon2 from "../../assets/icon_2.png";
import icon3 from "../../assets/icon_3.png";
import icon4 from "../../assets/icon_3.png";

const icons = [
  {
    head: "free delivery",
    span: "on all order",
    img: icon2,
  },
  {
    head: "10 days return",
    span: "moneyback guarantee",
    img: icon1,
  },
  {
    head: "offer & gifts",
    span: "on all order",
    img: icon3,
  },
  {
    head: "secure payments",
    span: "protected by payalr",
    img: icon4,
  },
];
const IconContainer = () => {
  return (
    <section className="icons-container">
      {icons.map((data) => {
        const { head, span, img } = data;
        return (
          <>
            <div className="icons">
              <img src={img} alt={head} />
              <div className="info">
                <h3>{head}</h3>
                <span>{span}</span>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default IconContainer;
