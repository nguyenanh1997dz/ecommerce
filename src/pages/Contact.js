import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { IoHomeOutline, IoCallOutline } from "react-icons/io5";
import { CiCircleInfo, CiMail } from "react-icons/ci";
import Container from "../components/Container";
const Contact = () => {
  return (
    <>
      <Meta title="Contact"></Meta>
      <BreadCrumb title="Contact"></BreadCrumb>
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7836.929466242171!2d106.656876!3d10.852214000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1701780683182!5m2!1sen!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allow="fullscreen"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form className="d-flex flex-column gap-15" action="">
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
                    <textarea
                      placeholder="Comments"
                      className="w-100 form-control"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Send</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-3">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoHomeOutline className="fs-5" />
                      <address className="mb-0">
                        26 An Hoi, Go Vap, Ho Chi Minh
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoCallOutline />
                      <a className="text-dark mb-0" href="tel:+84923055947">
                        0923055947
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <CiMail />
                      <a
                        className="text-dark mb-0"
                        href="mail:nguyenanh1997dz@gmail.com"
                      >
                        nguyenanh1997dz@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <CiCircleInfo />
                      <p className="mb-0">Monday - Friday - 10Am - 8Pm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
