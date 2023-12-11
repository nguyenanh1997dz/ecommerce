import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import InputCustom from "../components/InputCustom";
const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot-Password"></Meta>
      <BreadCrumb title="Forgot Password"></BreadCrumb>
      <Container class1="login-wrapper py-5 home-wrapper-2">
      <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form className="d-flex flex-column gap-30">
              <InputCustom 
                  type="email"
                  name="email"
                  placeholder="Email"
                ></InputCustom>
                <div className="d-flex flex-column justify-content-center gap-15 align-items-center">
                  <button className="button border-0">Submit</button>
                  <Link to="/login">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>

    </>
  );
};

export default ForgotPassword;
