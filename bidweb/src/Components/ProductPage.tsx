//import React from "react"; // Ensure React is imported
//import BicycleAuction from "./BicycleAuction"; // Adjust the path if needed
import AuctionItemsRow from "./AuctionItemsRow"; // Adjust the path if needed
import AuctionItemsView from "./AuctionItemsView";
import BuySellButtons from "./BuySellButtonsHorizontal";
import Footer from "./Footer";

const ProductPage = () => {
  return (
    <div>
      <BuySellButtons/>
      <AuctionItemsRow/>
      <AuctionItemsView/>
      <Footer/>
      
      
    </div>
  );
};

export default ProductPage;
