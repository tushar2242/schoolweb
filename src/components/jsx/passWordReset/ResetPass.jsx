import axios from "axios";
import React, { useState } from "react";

import logo from "../../images/logo3.png";
import Notification from "../notification/Notification";

const proto = "http://";
const endPoint = "send/mail";
const url = `${proto}34.29.141.94/`;

const ResetPass = () => {
  return (
    <>
      <ResetPassByEmail />
    </>
  );
};

export default ResetPass;

const ResetPassByEmail = () => {
  const [resetEmail, setResetEmail] = useState("");
  const [proMessage, setProMessage] = useState("");
  const [proColor, setProColor] = useState("");

  function handleEmail() {
    setProMessage("");
    setProColor("");
    axios
      .post(`${url}${endPoint}`, {
        email: resetEmail,
      })
      .then((res) => {
        console.log(res);
        setProMessage("Email Send Succesfully");
        setProColor("alert alert-success");
      })
      .catch((res) => {
        console.log(res);
        setProMessage("Please Enter a Correct E-mail");
        setProColor("alert alert-error");
      });
  }

  return (
    <>
      {proMessage !== "" && <Notification msg={proMessage} color={proColor} />}

      <div className="forget-row">
        <img src={logo} alt="logo" />
        <h1>Password assistance</h1>
        <h6 className="information-text">
          Enter your registered email to get your reset password link.
        </h6>
        <div className="form-group">
          <input
            type="email"
            name="user_email"
            value={resetEmail}
            onChange={(e) => {
              setResetEmail(e.target.value);
            }}
          />
          <p>
            <label htmlFor="username">Your Email-id</label>
          </p>
          <button onClick={() => handleEmail()}>Reset Password</button>
        </div>
      </div>
    </>
  );
};

// const ChangePass = () => {
//     return (
//         <>
//             <div className="mainDiv">
//                 <div className="cardStyle">
//                     <form action="" method="post" name="signupForm" id="signupForm">

//                         <img src="" id="signupLogo" alt='logo' />

//                         <h2 className="formTitle">
//                             Login to your account
//                         </h2>

//                         <div className="inputDiv">
//                             <label className="inputLabel" for="password">New Password</label>
//                             <input type="password" id="password" name="password" required />
//                         </div>

//                         <div className="inputDiv">
//                             <label className="inputLabel" for="confirmPassword">Confirm Password</label>
//                             <input type="password" id="confirmPassword" name="confirmPassword" />
//                         </div>

//                         <div className="buttonWrapper">
//                             <button type="submit" id="submitButton" onclick="validateSignupForm()" className="submitButton pure-button pure-button-primary">
//                                 <span>Continue</span>
//                                 <span id="loader"></span>
//                             </button>
//                         </div>

//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }
