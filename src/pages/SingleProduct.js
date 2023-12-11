import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { VscGitCompare } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
const SingleProduct = () => {
  const [orderedProduct] = useState(true);
  const props = {
    width: 200,
    height: 500,
    zoomWidth: 500,
    img: "https://cdn.tgdd.vn/Products/Images/7264/315988/orient-ra-ak0801s10b-nam-1.jpg",
  };
  return (
    <>
      <Meta title="Product"></Meta>
      <BreadCrumb title="Product Name"></BreadCrumb>
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="orther-product-images d-flex flex-wrap gap-15">
                <div>
                  <img className="img-fluid" src="/images/watch.jpg" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="/images/watch.jpg" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="/images/watch.jpg" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="/images/watch.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom py-3">
                  <h3 className="title">Kid HeadPhones</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={14}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">(2 Reviews)</p>
                  </div>
                  <a className="t-review" href="#review">
                    Write a review
                  </a>
                </div>
                <div className=" py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h1 className="product-heading">Type:</h1>
                    <p className=" product-data">123s</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h1 className="product-heading">Brand:</h1>
                    <p className=" product-data">123s</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h1 className="product-heading">Category:</h1>
                    <p className=" product-data">123s</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h1 className="product-heading">Tag:</h1>
                    <p className=" product-data">123s</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h1 className="product-heading">Avaailablity:</h1>
                    <p className=" product-data">123s</p>
                  </div>
                  <div className="d-flex flex-column gap-10 my-2">
                    <h1 className="product-heading">Size:</h1>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10 my-2">
                    <h1 className="product-heading">Color:</h1>
                    <Color></Color>
                  </div>
                  <div className="d-flex flex-row align-items-center gap-30 mt-5">
                    <h1 className="product-heading">Quantity:</h1>
                    <div className="">
                      <input
                        style={{
                          width: "70px",
                          borderRadius: "4px",
                        }}
                        type="number"
                        min={1}
                        max={10}
                        className="form-control"
                      />
                    </div>
                    <div>
                      <button className="button">ADD TO CARD</button>
                    </div>
                  </div>
                  <div className="d-flex gap-15 align-items-center mt-2">
                  <div>
                    <a href="#compare"><VscGitCompare className="fs-5 me-2"/>Add to compare</a>
                  </div>
                  <div>
                    <a href="#compare"><AiOutlineHeart className="fs-5 me-2"/>Add to wishlist</a>
                  </div>
                  </div>
                  <div className="d-flex flex-column gap-15 my-3">
                  <h1 className="product-heading">Shipping & Returns:</h1>
                    <p className=" product-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nemo magni tempore dolor cupiditate culpa ab sequi sint consequuntur voluptates ullam. Maiores fuga fugiat corrupti quis pariatur eaque harum quam.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas ad earum autem impedit, facere maxime illum atque
                  commodi ipsa magni odit, labore numquam dignissimos dolore
                  magnam, tempore ut recusandae aliquid.
                </p>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <div id="review" className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Review</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={14}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Review</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a className="text-dark" href="/">
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <form className=" d-flex flex-column gap-15" action="">
                    <div>
                      <input
                        placeholder="Name"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Email"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Mobile Number"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <ReactStars
                        count={5}
                        size={14}
                        value={0}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Comments"
                        className="w-100 form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Send</button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">NguyenAnh</h6>
                      <ReactStars
                        count={5}
                        size={14}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>

                    <p className="mt-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Temporibus explicabo dolorum magnam nobis deleniti soluta
                      quia! Harum hic iusto atque sequi, eum provident
                      dignissimos nulla cupiditate sapiente nesciunt incidunt
                      saepe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
      </Container>
    </>
  );
};

export default SingleProduct;
