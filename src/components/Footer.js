import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row algin-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="new letter" />
                <h2 className='mb-0 text-white'>Sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <div class="input-group ">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  Subcribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
              <div className="col-4 text-white">
                <h4>Contact Us</h4>
                <div className='footer-link d-flex flex-column'>
                  <address>24 An Hoi, Phuong 13, Go Vap</address>
                  <a className='text-white' href="mailto:nguyenanh1997dz@gmail.com">Email: nguyenanh1997dz@gmail.com</a>
                </div>
              </div>
              <div className="col-3 text-white">
                <h4>Information</h4>
                <div className='footer-link d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>Laptops</Link>
                  <Link className='text-white py-2 mb-1'>Headphones</Link>
                  <Link className='text-white py-2 mb-1'>Tablet</Link>
                  <Link className='text-white py-2 mb-1'>Watch</Link>
                </div>
              </div>
              <div className="col-3 text-white">
                <h4>Acount</h4>
                <div className='footer-link d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>About Us</Link>
                  <Link className='text-white py-2 mb-1'>Faq</Link>
                  <Link className='text-white py-2 mb-1'>Tablets</Link>
                  <Link className='text-white py-2 mb-1'>Watch</Link>
                </div>
              </div>
              <div className="col-2 text-white">
                <h4>Quick Links</h4>
                <div className='footer-link d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>Laptops</Link>
                  <Link className='text-white py-2 mb-1'>Headphones</Link>
                  <Link className='text-white py-2 mb-1'>Tablet</Link>
                  <Link className='text-white py-2 mb-1'>Watch</Link>
                </div>
              </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-start text-white">&copy: {new Date().getFullYear()}, Make By Chau Nguyen Anh</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
