/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { TweenMax } from "gsap";
import SignUp from "./SignUp";
import ClearIcon from "@mui/icons-material/Clear";
import logo from "../../images/logo1.png";
import axios from "axios";
import { animated } from "react-spring";
// import Notification from "../notification/Notification";
import LoadingPage from "../loader/LoadingPage";
import TickIcon from "../../images/icon/correctTick.png";
import Cancel from "../../images/icon/cancel.png";


const endPoint = "user/login";
const url = `https://hammerhead-app-iohau.ondigitalocean.app/`;

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("login");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [notificationMsg, setNotificationMsg] = useState("");

  const [isToast, setIsToast] = useState("");
  function handleEmail(e) {
    // let email = e.target.value;
    // let emailcheck = /^[A-Za-z_0-9]{2,}@[A-Za-z]{2,}[.]{1}[A-Za-z.]{1,8}$/gm;
    setEmail(e.target.value);
    // if (!emailcheck.test(email)) {
    //     this.setState({ emailError: 'block' })
    // }
    // else {
    //     this.setState({ emailError: 'none' })
    // }
  }

  function handlePass(e) {
    // let password = e.target.value;

    // let passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/gms;
    setPassword(e.target.value);
    // if (!passwordcheck.test(password)) {
    //     this.setState({ passwordError: 'block' })
    // }
    // else {
    //     this.setState({ passwordError: 'none' })
    // }
  }

  function handleSubmit(e) {
    setIsToast("");
    e.preventDefault();

    setIsLoading(true);
    // console.log('fredd')
    axios
      .post(`${url}${endPoint}`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setIsToast("success");
        localStorage.setItem("accessToken", res.data.data.token);
        localStorage.setItem("userId", res.data.data._id);
        window.location.reload()
        console.log(res.data);
      })
      .catch((res) => {
        // alert(res.response.data.msg)
        setNotificationMsg(res.response.data.msg);
        // console.log(res.response.data.msg);/
        setIsToast("error");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setIsToast("");
    TweenMax.fromTo(
      ".Loginform",
      0.7,
      { y: -800, opacity: 0 },
      { y: 0, opacity: 1 }
    );
    TweenMax.fromTo(
      ".formOuter",
      0.85,
      { x: 800, opacity: 0 },
      { x: 0, opacity: 1 }
    );
  }, []);

  function showSignUp() {
    setDisplay("signup");
    // console.log('fired')
    document.body.style.backgroundAttachment = "fixed !important";
  }
  function hideSignUp() {
    setDisplay("login");
  }


  function handleToast() {
    setIsToast(!isToast)
  }

  // eslint-disable-next-line react/prop-types
  const { setLogin, handleLogindisplay } = props;
  return (
    <>
      {/* <SuccessMessage
        style="toast toast--green"
        img={TickIcon}
        message="Login Successfully "
        message2="Now You Can Register"
      /> */}
      {isToast === "success" ? (
        <SuccessMessage
          style="toast toast--green"
          img={TickIcon}
          message="Login Successfully "
          message2="Now You Can Register"
          handleToast={handleToast}
        />
      ) : isToast === "error" ? (
        <SuccessMessage
          style="toast toast--red"
          img={Cancel}
          message={notificationMsg}
          message2="Please Enter the Correct Details"
          handleToast={handleToast}
        />
      ) : null}
      {isLoading && <LoadingPage msg="Sign In" />}
      <div className="Loginform">
        {display === "login" ? (
          <FormContainer
            email={email}
            passoword={password}
            handleEmail={handleEmail}
            handlePass={handlePass}
            handleSubmit={handleSubmit}
            emailError={emailError}
            passwordError={passwordError}
            setLogin={setLogin}
            handleLogindisplay={handleLogindisplay}
            setShowFunction={showSignUp}
          />
        ) : (
          <SignUp
            hideSignUp={hideSignUp}
            setLogin={setLogin}
            handleLogindisplay={handleLogindisplay}
          />
        )}

        <div className="carouselOuter">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <Button type="button login" variant="contained" onClick={hideSignUp}>
            Login
          </Button>

          <Button type="button" variant="contained" onClick={showSignUp}>
            Sign Up
          </Button>
        </div>
      </div>

      {/* {<LoadingPage msg="Creating an Account" />} */}
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const FormContainer = (props) => {
  const {
    email,
    password,
    handleEmail,
    handlePass,
    setLogin,
    handleLogindisplay,
    setShowFunction,
    handleSubmit,
  } = props;
  return (
    <>
      <div className="formOuter">
        <center>
          <div className="txtContainer">
            <h4>Welcome Back</h4>
            <p>Sign in to Continue</p>
            {(
              <div className="clearIcon" onClick={handleLogindisplay} >
                <ClearIcon />
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <TextField
                type="email"
                id="outlined-basic"
                value={email}
                label="Email"
                variant="outlined"
                className="LogininputBox"
                focused
                required
                onChange={handleEmail}
              />
              {/* <label className="error" style={{ display: emailError }}>
                Enter the correct Email-id
              </label> */}
              <br />

              <TextField
                id="outlined-basic1"
                value={password}
                label="Password"
                variant="outlined"
                className="LogininputBox"
                focused
                required
                onChange={handlePass}
                type="password"
              />
              {/* <label className="error" style={{ display: passwordError }}>
                Invaild Password
              </label> */}

              <br />
              <div className="forpass">
                <NavLink to="/resetpass" className="p-1">
                  Forget Password
                </NavLink>
              </div>
              <div className="loginBtn">
                <Button variant="contained" color="success" type="submit">
                  Login
                </Button>
                {/* <Button variant="contained" color="primary">
                  Login with OTP
                </Button> */}
              </div>
            </form>

            <br />
            <div className="forpass">
              New to BharatSchool?
              <p className="p-1" onClick={setShowFunction}>
                Signup
              </p>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default Login;

const SuccessMessage = (props) => {
  const { img, style, message, message2, handleToast } = props;

  // const slide = useSpring({
  //   from: {
  //     opacity: 0,
  //   },
  //   to: {
  //     opacity: 1,

  //   },
  // });

  return (
    <>
      <animated.div className="outer-message" onClick={handleToast}>
        <div className="toast__container">
          <div className="toast__cell">
            <div className={style}>
              <div className="toast__icon">
                <img src={img} alt="Correct" />
              </div>
              <div className="toast__content">
                <p className="toast__type">{message}</p>
                <p className="toast__message">{message2}</p>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </>
  );
};
