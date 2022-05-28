import React from "react";
import { CartState } from "../../context/Context";
import Filters from "../filters/Filters";
import SaleItem from "../saleItem/SaleItem";
import "./home.css";

const Home = () => {
  const { state } = CartState();

  console.log(state);

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {state.products.map((item) => {
          return <SaleItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
