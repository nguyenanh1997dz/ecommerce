import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
const Blog = () => {
  return (
    <>
      <Meta title="Blogs"></Meta>
      <BreadCrumb title="Blogs"></BreadCrumb>
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-card-title">Find By Category</h3>
              <div>
                <ul className="ps-0">
                  <li>Blog</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-4 mb-0">
                <BlogCard></BlogCard>
              </div>
              <div className="col-4 mb-0">
                <BlogCard></BlogCard>
              </div>
              <div className="col-4 mb-0">
                <BlogCard></BlogCard>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
