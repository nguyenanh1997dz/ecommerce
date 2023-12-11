import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import Container from "../components/Container";
const Checkout = () => {
  return (
    <>
      <Meta title="Check Out" />
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">NGUYENANH</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": "'>'" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item " aria-current="page">
                    Information
                  </li>
                  <li className="breadcrumb-item " aria-current="page">
                    Shipping
                  </li>
                  <li className="breadcrumb-item " aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total-price">Contact Infomation</h4>
              <p className="user-details total">nguyenanh1997dz</p>
              <form
                className="d-flex gap-15 flex-wrap justify-content-between"
                action=""
              >
                <div className="w-100">
                  <select className="form-control form-select" name="" id="">
                    <option className="selected disable" value="">
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, ..."
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select className="form-control form-select" name="" id="">
                    <option className="selected disable" value="">
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zip"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex gap-15 align-items-center justify-content-between">
                    <Link className="text-dark" to={"/cart"}>
                      <IoChevronBackOutline className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to={"/product"} className="button">
                      Continue Payment
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img src="/images/watch.jpg" alt="" className="img-fluid" />
                  </div>
                  <div>
                    <h5 className="title total">asdasd</h5>
                    <p className="total-price">12321321</p>
                  </div>
                </div>
                <div className="flex-grow-1 text-end">
                  <h5 className="total-price">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-item-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$ 1000</p>
              </div>
              <div className="d-flex justify-content-between align-item-center">
                <p className="total">Shipping</p>
                <p className="total-price">0</p>
              </div>
              <div className="d-flex justify-content-between align-item-center  ">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$ 1000</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
