import React from "react";
import Header from "../components/container/header";
import Footer from "../components/homePage/footer";
import Content from "../components/buyerPage/content";

const BuyerPage = () => {
  return (
    <div className="w-full">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default BuyerPage;
