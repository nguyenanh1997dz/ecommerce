import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import InputCustom from "../components/InputCustom";
const Login = () => {
  return (
    <>
      <Meta title="Login"></Meta>
      <BreadCrumb title="Login"></BreadCrumb>
      <Container class1="login-wrapper py-5 home-wrapper-2">
      <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form  className="d-flex flex-column gap-30">
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
                <div>
                    <Link to="/forgot-password"className="text-dark">Forgot Password</Link>
                </div>
                <div className="d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Login</button>
                    <Link to={"/signup"} className="button sigup">SignUp</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>

    </>
  );
};

export default Login;
