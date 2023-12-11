import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";
const CompareProduct = () => {
  return (
    <>
      <Meta title="Compare"></Meta>
      <BreadCrumb title="Compare"></BreadCrumb>
      <Container className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt="cross"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="product" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Ihone 15</h5>
                <h6 className="price">$ 200</h6>
              </div>
              <div className="product-detail d-flex justify-content-between align-items-center">
                <h5>Brand:</h5>
                <p>Havels</p>
              </div>
              <div className="product-detail d-flex justify-content-between align-items-center">
                <h5>Colors</h5>
                <Color />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt="cross"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="product" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Ihone 15</h5>
                <h6 className="price">$ 200</h6>
              </div>
              <div className="product-detail d-flex justify-content-between align-items-center">
                <h5>Brand:</h5>
                <p>Havels</p>
              </div>
              <div className="product-detail d-flex justify-content-between align-items-center">
                <h5>Colors</h5>
                <Color />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
