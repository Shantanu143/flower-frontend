import Header from "../home/containers/Header";
import ProductsImg from "./containers/ProductsImg";
import { Outlet } from "react-router-dom";
import Review from "../home/containers/Review";
const ProductDetails = () => {
  return (
    <>
      <Header />
      <div className="pt-32">

        <ProductsImg />
      </div>
      <Review />
      <Outlet />
    </>
  );
};

export default ProductDetails;
