import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ProductsImg = () => {
  const { id } = useParams();
  const api = `/api/flowers/${id}`;

  const [flowerData, setFlowerData] = useState({
    flowerTitle: "",
    price: "",
    imageURL: "",
    discount: "",
  });

  useEffect(() => {
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch flower data");
        }
        return res.json();
      })
      .then((data) => {
        setFlowerData(data);
      })
      .catch((error) => console.error("Error fetching flower data:", error));
  }, [api]);

  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>Product :</span> {flowerData.flowerTitle}
      </h1>

      <div className="row">
        <div className="video-container">
          <img src={flowerData.imageURL} alt={flowerData.flowerTitle} />
        </div>

        <div className="content">
          <h3>{flowerData.flowerTitle}</h3>
          <div className="mt-4">
            <span className="text-gray-700">Price: </span>
            <span className="text-xl font-semibold text-indigo-600">
              ₹{" "}
              {flowerData.price -
                flowerData.price * (flowerData.discount / 100)}
            </span>
          </div>
          <div className="mt-4">
            <span className="text-gray-700">Availability: </span>
            <span className="text-green-600">In Stock</span>
          </div>
          <div className="mt-4">
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <i key={index}>
                  <FaStar />
                </i>
              ))}
            </div>
          </div>
          <p>
            In gardens and meadows, the flower reigns supreme, With petals soft
            as whispers, in hues that gleam. From the delicate rose to the proud
            sunflower's grace, Each bloom tells a story, each one finds its
            place.
          </p>
          <a href="#" className="btn">
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsImg;
