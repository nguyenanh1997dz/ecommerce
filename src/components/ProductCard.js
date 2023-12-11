import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link,useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const {grid} = props;
  console.log(grid);
  let location = useLocation();
  return (
    <div className={`${location.pathname === "/product" ? `gr-${grid}` : `col-3`}` }>
      <Link to="/product/:id" className="product-card position-relative">
        <div className="wist-list-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src="/images/wish.svg" alt="prodcompare" />
          </button>
        </div>
        <div className="product-image">
          <img className="img-fluid" src="/images/watch.jpg" alt="product images" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">Kids headphones</h5>
          <ReactStars
            count={5}
            size={18}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description py-3 ${grid === 12 ? "d-block" :"d-none"}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, impedit earum. Aut dicta maxime, consectetur consequatur enim ut soluta. Id molestiae ducimus at quo deserunt nobis quod quam corporis! Expedita?
          </p>
          <p className="product-price">$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-10">
            <button className="border-0 bg-transparent">
              <img src="/images/prodcompare.svg" alt="prodcompare" />
            </button >
            <button className="border-0 bg-transparent">
              <img src="/images/view.svg" alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="/images/add-cart.svg" alt="add" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
