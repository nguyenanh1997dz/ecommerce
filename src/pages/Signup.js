import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import InputCustom from "../components/InputCustom";
const Signup = () => {
  return (
    <>
      <Meta title="Sign-Up"></Meta>
      <BreadCrumb title="Sign Up"></BreadCrumb>
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form  className="d-flex flex-column gap-30">
              <InputCustom 
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                ></InputCustom>
                <InputCustom 
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                ></InputCustom>
                <InputCustom 
                  type="tel"
                  name="mobilePhone"
                  placeholder="Mobile"
                ></InputCustom>
              <InputCustom
                  type="email"
                  name="email"
                  placeholder="Email"
                ></InputCustom>
                <InputCustom 
                  type="password"
                  name="password"
                  placeholder="Password"
                ></InputCustom>
                <InputCustom 
                  type="password"
                  name="rep-password"
                  placeholder="Password Repeat"
                ></InputCustom>
                <Link  className="text-dark" to={"/login"}>Allready account?Login</Link>
                <div className="d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">SignUp</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
