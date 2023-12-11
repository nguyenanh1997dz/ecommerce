import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import InputCustom from '../components/InputCustom';
const Resetpassword = () => {
  return <>
        <Meta title="Reset-Password"></Meta>
       <BreadCrumb title="Reset Password"></BreadCrumb>
       <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <form className="d-flex flex-column gap-30">
                <InputCustom 
                  type = "text"
                  name ="reset-password"
                  placeholder="Password"
                ></InputCustom>
                <div className="d-flex flex-column justify-content-center gap-15 align-items-center">
                  <button className="button border-0">Submit</button>
                  <Link to="/login">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  </>
}   

export default Resetpassword
