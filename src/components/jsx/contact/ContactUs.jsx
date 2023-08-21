import React from "react";
import "./contact.css";

const ContactUs = () => {
  return (
    <>
      <div className="container contact-box mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="cont-box-1">
              <h3>Let's get in touch</h3>
              <p style={{fontSize:'14px',fontWeight:'500'}}>we're open for any suggestion or just to have a chat</p>

              <div className="option-box d-flex">
              <i className="bi bi-geo-alt option-icon"></i> 
                <p className="p-tag-font ms-2">
                 <b>Address:</b>{" "}
                  198, west street Jaipur
                </p>
              </div>
              <div className="option-box d-flex">
              <i className="bi bi-telephone"></i> 
                <p className="p-tag-font ms-2">
                  <b>Phone:</b>{" "}
                  +91 - 9087654321
                </p>
              </div>

              <div className="option-box d-flex">
              <i className="bi bi-send option-icon"></i> 
                <p className="p-tag-font ms-2">
                 <b>Email:</b>{" "}
                  bharatschool@gmail.com
                </p>
              </div>
              <div className="option-box d-flex">
              <i className="bi bi-globe option-icon"></i> 
                <p className="p-tag-font ms-2">
                 <b>Website:</b>
                  yoursite.com
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <h2 className=" mt-3">Get in touch</h2>
            <form action="">
              <div className="row">
                <div className="col-md-6 mt-3">
                  <label htmlFor="" className="form-label label-inpt-text">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control opt-input-box"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6 mt-3">
                  <label htmlFor="" className="form-label label-inpt-text">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="form-control opt-input-box"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label htmlFor="" className="form-label label-inpt-text">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control opt-input-box"
                    placeholder="Subject"
                  />
                </div>

                <div className="col-md-12 mt-3">
                  <label htmlFor="" className="form-label label-inpt-text">
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="4"
                    placeholder="Message"
                    className="form-control opt-input-box"
                  ></textarea>
                </div>
              </div>
              <div>
                <button className="send-opt-btn mt-5">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
