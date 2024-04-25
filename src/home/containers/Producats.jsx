
// Products.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Products = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/flowers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFlowers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="products" id="products">
      <h1 className="heading">
        latest <span>products</span>
      </h1>

      <div className="box-container">
        {flowers.map((flower, index) => (
          <div className="box" key={index}>
            <span className="discount">-{flower.discount}%</span>
            <div className="image">
              <img src={flower.imageURL} alt={flower.flowerTitle} />
              <div className="icons">
                <a href="#" className="product_icon">
                  <FaHeart />
                </a>
                <Link
                  to={`/productpage/${flower._id}`}
                  state={{ flower }}
                  className="cart-btn"
                >
                  See Full Details
                </Link>

                <a href="#" className="product_icon">
                  <FaShoppingCart />
                </a>
              </div>
            </div>
            <div className="content">
              <h3>{flower.flowerTitle}</h3>
              <div className="price">
                ₹ {flower.price - flower.price * (flower.discount / 100)}{" "}
                <span>₹ {flower.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

