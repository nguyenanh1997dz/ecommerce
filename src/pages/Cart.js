import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const Cart = () => {
  return (
    <>
      <Meta title="Cart"></Meta>
      <BreadCrumb title="Carts"></BreadCrumb>
      <Container class1="cart-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data mb-3 py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      className="img-fluid"
                      src="/images/watch.jpg"
                      alt="product"
                    />
                  </div>
                  <div className="w-75">
                    <p>123asd</p>
                    <p>123</p>
                    <p>123</p>
                  </div>
                </div>

                <div className="cart-col-2">
                  <h5 className="price">$ 100</h5>
                </div>
                <div className="cart-col-3 d-flex gap-15 align-items-center">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      min={1}
                      max={10}
                      value={1}
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">123asd</h5>
                </div>
              </div>
              <div className="col-12 py-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <Link to={"/product"} className="button">
                      Continue To Shopping
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between align-items-end flex-column">
                      <h4>SubTotal: $ 1000</h4>
                      <Link to={"/checkout"} className="button">
                        Check Out
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>

    </>
  );
};

export default Cart;
