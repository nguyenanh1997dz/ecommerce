import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = () => {
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-center">
          <div>
            <img className="img-fluid" src="images/watch.jpg" alt="watch" />
          </div>
          <div className="special-product-content py-5">
            <h5 className="brand">Havels</h5>
            <h6 className="product-title mb-3">Samsung</h6>
            <ReactStars
              count={5}
              size={18}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="product-price">
                <span className="red-p">$100</span> &nbsp; <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                    <b>5</b>days
                </p>
                <div className="d-flex gap-10 align-items-center">
                        <span className="badge rounded-circle p-3 bg-danger">1</span>:
                        <span className="badge rounded-circle p-3 bg-danger">1</span>:
                        <span className="badge rounded-circle p-3 bg-danger">1</span>
                    </div>
            </div>
            <Link className="button mt-3">Add to Cart</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
