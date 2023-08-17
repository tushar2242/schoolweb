import React from "react";
import { TextField, Button } from "@mui/material";
// import MenuItem from '@mui/material/MenuItem';
import ClearIcon from "@mui/icons-material/Clear";
//import moment from 'moment';
import axios from "axios";

// import { formik } from 'formik';

const endPoint = "user/registration";
const url = `https://hammerhead-app-iohau.ondigitalocean.app/`;

const Stream = [
  "Commerce and Banking",
  "Design",
  "Engineering",
  "Management",
  "Hotel Management",
  "Information Technology",
  "Media and Mass Communication",
  "Medical",
  "Retail",
  "Arts and Humanities",
  "Law",
  "Science",
  "Vocational",
  "Others",
  "Physical Education",
  "Education",
];

const States = [
  { code: "AN", name: "Andaman and Nicobar Islands" },
  { code: "AP", name: "Andhra Pradesh" },
  { code: "AR", name: "Arunachal Pradesh" },
  { code: "AS", name: "Assam" },
  { code: "BR", name: "Bihar" },
  { code: "CG", name: "Chandigarh" },
  { code: "CH", name: "Chhattisgarh" },
  { code: "DH", name: "Dadra and Nagar Haveli" },
  { code: "DD", name: "Daman and Diu" },
  { code: "DL", name: "Delhi" },
  { code: "GA", name: "Goa" },
  { code: "GJ", name: "Gujarat" },
  { code: "HR", name: "Haryana" },
  { code: "HP", name: "Himachal Pradesh" },
  { code: "JK", name: "Jammu and Kashmir" },
  { code: "JH", name: "Jharkhand" },
  { code: "KA", name: "Karnataka" },
  { code: "KL", name: "Kerala" },
  { code: "LD", name: "Lakshadweep" },
  { code: "MP", name: "Madhya Pradesh" },
  { code: "MH", name: "Maharashtra" },
  { code: "MN", name: "Manipur" },
  { code: "ML", name: "Meghalaya" },
  { code: "MZ", name: "Mizoram" },
  { code: "NL", name: "Nagaland" },
  { code: "OR", name: "Odisha" },
  { code: "PY", name: "Puducherry" },
  { code: "PB", name: "Punjab" },
  { code: "RJ", name: "Rajasthan" },
  { code: "SK", name: "Sikkim" },
  { code: "TN", name: "Tamil Nadu" },
  { code: "TS", name: "Telangana" },
  { code: "TR", name: "Tripura" },
  { code: "UK", name: "Uttarakhand" },
  { code: "UP", name: "Uttar Pradesh" },
  { code: "WB", name: "West Bengal" },
];

const Level = ["UG", "PG", "Diploma", "Ph.D", "Certificate"];
const Gender = ["Male", "Female", "Other"];

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dob: "",
      email: "",
      phone: "",
      stream: "Commerce and Banking",
      state: "Andaman and Nicobar Islands",
      level: "UG",
      gender: "Male",
      password: "",
      nameError: "none",
      emailError: "none",
      passwordError: "none",
      phError: "none",

      isSubmit: true,
      isOtp: false,
      otp: '',

      isLoading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentDidMount = this.componentDidMount(this);
  }

  componentDidMount() {
    document.body.style.backgroundAttachment = "fixed !important";
  }

  handleSubmit(e) {
    this.setState({ isLoading: true });
    e.preventDefault();
    const { name, dob, email, phone, stream, state, level, gender, password } =
      this.state;

    axios
      .post(`${url}${endPoint}`, {
        name: name,
        gender: gender,
        stream: stream,
        state: state,
        graduation: level,
        dob: dob,
        number: phone,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res)
        localStorage.setItem("accessToken", res.data.data.token);
        localStorage.setItem("userId", res.data.data._id);

        alert(res.data.msg);
        window.location.reload();
        this.setState({ isLoading: false });
      })
      .catch((err) => {
        alert(err.msg);
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", err.message);
        }
        this.setState({ isLoading: false });
      });
  }

  handleSign(e) {

    this.setState({ isOtp: true })
  }
  render() {
    const {
      name,
      dob,
      email,
      phone,
      stream,
      state,
      level,
      gender,
      password,
      nameError,
      emailError,
      passwordError,
      phError,
      isLoading,
      isOtp,
      otp
    } = this.state;
    const { hideSignUp, setLogin, handleLogindisplay } = this.props;
    // const formattedDob = moment(dob).format('yyyy-MM-dd');
    // console.log(formattedDob)
    return (
      <>



        <div className="formOuter">
          <center>

            <div className="txtContainer">
              <h4>Welcome Back</h4>
              {!isOtp ? <p>Create your account here</p> : <p>Enter Otp To Verify the account</p>}
              {(
                <div
                  className="clearIcon"
                  onClick={handleLogindisplay}
                  style={{ right: "55px" }}
                >
                  <ClearIcon />
                </div>
              )}
              {!isOtp ?
                <div className="signUpOuter" >
                  <TextField
                    value={name}
                    label="Name"
                    variant="outlined"
                    className="LogininputBox"
                    focused
                    required
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                      // console.log(e.target.value);
                      let nameCheck = /[a-zA-Z]{2,}/gms;
                      if (!nameCheck.test(e.target.value)) {
                        this.setState({
                          nameError: "block",
                          isSubmit: false,
                        });
                      } else {
                        this.setState({ nameError: "none" });
                      }
                    }}
                  />
                  <label className="error" style={{ display: nameError }}>
                    Name Must Be Greater than two character
                  </label>
                  <br />

                  <TextField
                    value={dob}
                    id="date"
                    label="Date Of Birth"
                    variant="outlined"
                    className="LogininputBox"
                    focused
                    onChange={(e) => this.setState({ dob: e.target.value })}
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />
                  <TextField
                    value={email}
                    label="Email"
                    variant="outlined"
                    type="email"
                    className="LogininputBox"
                    focused
                    required
                    onChange={(e) => {
                      this.setState({ email: e.target.value, isSubmit: false });
                      // console.log(e.target.value);
                      let emailCheck =
                        /^[A-Za-z_0-9]{2,}@[A-Za-z]{2,}[.]{1}[A-Za-z.]{1,6}$/gms;
                      if (!emailCheck.test(e.target.value)) {
                        this.setState({ emailError: "block", isSubmit: false });
                      } else {
                        this.setState({ emailError: "none" });
                      }
                    }}
                  />
                  <label className="error" style={{ display: emailError }}>
                    Enter a Correct Email
                  </label>

                  <TextField
                    value={phone}
                    label="Phone"
                    variant="outlined"
                    className="LogininputBox"
                    focused
                    required
                    onChange={(e) => {
                      this.setState({ phone: e.target.value });
                      let phoneCheck = /^[6-9]\d{8}$/gms;
                      if (!phoneCheck.test(phone)) {
                        this.setState({
                          phError: "block",
                          isSubmit: false,
                        });
                      } else {
                        this.setState({ phError: "none" });
                      }
                    }}
                    type="number"
                  />
                  <label className="error" style={{ display: phError }}>
                    Enter a Correct Mobile No.
                  </label>

                  <label htmlFor="gender-select" className="inptLabel">
                    Select your gender:
                  </label>
                  <select
                    value={gender}
                    className="LogininputBox selectInputBox"
                    variant="outlined"
                    onChange={(e) => this.setState({ gender: e.target.value })}
                  >
                    {Gender.map((value) => {
                      return (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </select>

                  <label htmlFor="stream" className="inptLabel">
                    Learning Stream:
                  </label>
                  <select
                    value={stream}
                    className="LogininputBox selectInputBox"
                    variant="outlined"
                    onChange={(e) => this.setState({ stream: e.target.value })}
                  >
                    {Stream.map((value) => {
                      return (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                  <label htmlFor="state" className="inptLabel">
                    State:
                  </label>
                  <select
                    value={state}
                    className="LogininputBox selectInputBox"
                    variant="outlined"
                    onChange={(e) => this.setState({ state: e.target.value })}
                  >
                    {States.map((value) => {
                      return (
                        <option key={value.code} value={value.name}>
                          {value.name}
                        </option>
                      );
                    })}
                  </select>
                  <label htmlFor="education" className="inptLabel">
                    Education Qualification:
                  </label>
                  <select
                    value={level}
                    className="LogininputBox selectInputBox"
                    variant="outlined"
                    onChange={(e) => this.setState({ level: e.target.value })}
                  >
                    {Level.map((value) => {
                      return (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </select>

                  <TextField
                    value={password}
                    label="Password"
                    variant="outlined"
                    className="LogininputBox"
                    focused
                    required
                    onChange={(e) => {
                      this.setState({ password: e.target.value });

                    }}
                    type="password"
                  />
                  <label className="error" style={{ display: passwordError }}>
                    Create a Correct passoword
                  </label>

                  <br />

                  <div className="loginBtn">
                    <Button variant="contained" color="success" onClick={() => {
                      this.handleSign()
                    }} >
                      Sign Up
                    </Button>
                  </div>
                  <br />
                  <div className="forpass">
                    Already have an account?
                    <p onClick={hideSignUp} className="p-1">
                      Login
                    </p>
                  </div>
                </div>
                :
                <>


                  <TextField
                    value={otp}
                    label="OTP"
                    variant="outlined"
                    className="LogininputBox"
                    type="number"
                    focused
                    required
                    onChange={(e) => {
                      this.setState({ otp: e.target.value });
                    }}
                  />

                  <br />

                  <div className="loginBtn">
                    <Button variant="contained" color="warning" onClick={() => this.handleSubmit()}>
                      Submit Otp
                    </Button>
                  </div>
                  <div className="forpass mt-3">
                    <p onClick={hideSignUp} className="p-1">
                      Resend OTP
                    </p>
                  </div>
                </>
              }
            </div>

          </center>
        </div>

      </>
    );
  }
}
