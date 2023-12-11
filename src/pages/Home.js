import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
// import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { services } from "../utils/Data";
const Home = () => {
  return (
    <>
      <Meta title="Home"></Meta>
      <Container class1={"home-wrapper-1 py-5"}>
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                className="img-fluid rounded-3"
                src="images/main-banner-1.jpg"
                alt="main banner"
              />
              <div className="main-banner-content  position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>Ipad S13+ Pro</h5>
                <p>From $999.00 </p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className=" d-flex gap-10 justify-content-between algin-items-center flex-wrap ">
              <div className="small-banner position-relative  ">
                <img
                  className="img-fluid rounded-3"
                  src="images/catbanner-01.jpg"
                  alt="main banner"
                />
                <div className="small-banner-content  position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Ipad S13+ Pro</h5>
                  <p>From $999.00 </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
              <div className="small-banner position-relative  ">
                <img
                  className="img-fluid rounded-3"
                  src="images/catbanner-01.jpg"
                  alt="main banner"
                />
                <div className="small-banner-content  position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Ipad S13+ Pro</h5>
                  <p>From $999.00</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
              <div className="small-banner position-relative  ">
                <img
                  className="img-fluid rounded-3"
                  src="images/catbanner-01.jpg"
                  alt="main banner"
                />
                <div className="small-banner-content  position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Ipad S13+ Pro</h5>
                  <p>From $999.00</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
              <div className="small-banner position-relative  ">
                <img
                  className="img-fluid rounded-3"
                  src="images/catbanner-01.jpg"
                  alt="main banner"
                />
                <div className="small-banner-content  position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Ipad S13+ Pro</h5>
                  <p>From $999.00</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1={"home-wrapper-2 py-5"}>
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15 " key={j}>
                    <img src={i.image} alt="" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
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
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
        </div>
      </Container>
      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner card-wrapper">
              <Marquee className="d-flex ">
                <div className=" mx-4 w-25">  
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Out Latest Blog</h3>
          </div>
          <div className="col-3">Comming soon!</div>
        </div>
      </Container>
    </>
  );
};

export default Home;
