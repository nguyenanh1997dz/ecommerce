import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
const Wishlist = () => {
  return (
    <>
      <Meta title="WishList"></Meta>
      <BreadCrumb title="Wishlist"></BreadCrumb>
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-product-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt="cross"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="product" />
              </div>
              <div className="wishlist-product-details">
                <h5 className="title">Ihone 15</h5>
                <h6 className="price">$ 200</h6>
              </div>
            </div>
          </div>
        </div>
      </Container> 
    </>
  );
};

export default Wishlist;
