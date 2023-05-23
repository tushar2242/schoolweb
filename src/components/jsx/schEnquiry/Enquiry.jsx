import React from 'react';
import Iframe from 'react-iframe';
import logo from '../../images/logo2.png';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import facebook from '../../images/social-icon/facebook.png';
import instagram from '../../images/social-icon/instagram.png';
import twitter from '../../images/social-icon/twitter.png';
import linkedin from '../../images/social-icon/linkedin.png';

export default class Enquiry extends React.Component {
  render() {
    return (
      <>

        <div className="container">
          <div className="shadow p-3">
            <div className="d-flex">
              <img src={logo} alt="logo" className="logo-icon" />
              <div className="school-name-box">
                <h5 className="school-name">Burdwan Model School</h5>
                <p className="school-loct-font"><LocationOnSharpIcon className="fs-5" /> Dewandighi, Katwa Rd, Burdwan (Bardhaman)</p>
              </div>
            </div>
            <hr className="w-50 m-auto" />
            <h3 className="enq-text">Enquiry Form</h3>
            <hr className="w-50 m-auto" />
            <div className="row mt-4">
              <div className="col-md-8">
                <EnquiryPage />
              </div>
              <div className="col-md-4 mt-4">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.549732400763!2d75.8375939!3d26.9494854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db116f0ddf9b7%3A0x6d42b8919f551433!2sRamgarhmode%2C%20Parasrampuri%2C%20Jaipur%2C%20Rajasthan%20302002!5e0!3m2!1sen!2sin!4v1679293341115!5m2!1sen!2sin" className="school-map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
              </div>
            </div>
            <hr className="mt-4" />
            <div className="d-flex justify-content-center">
              <img src={facebook} alt="facebook" className="school-social-icon" />
              <img src={instagram} alt="instagram" className="school-social-icon ms-2" />
              <img src={linkedin} alt="linkedin" className="school-social-icon ms-2" />
              <img src={twitter} alt="twitter" className="school-social-icon ms-2" />
            </div>

          </div>
        </div>
      </>
    )
  }
}

class EnquiryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameofstudent: '',
      previousSchool: '',
      pinCode: '',
      emailaddress: '',
      classSeeking: '',
      phonenumber: '',
      leavemessage: '',
    };

  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-6">
            <TextField fullWidth id="nameofstudent" label="Name of the Student *" variant="standard" margin="normal" value={this.state.nameofstudent} onChange={(e) => {
              this.setState({ nameofstudent: e.target.value })
            }} />
          </div>
          <div className="col-md-6">
            <TextField fullWidth id="previousSchool" label="Previous School Name *" variant="standard" margin="normal" value={this.state.previousSchool} onChange={(e) => {
              this.setState({ previousSchool: e.target.value })
            }} />
          </div>
          <div className="col-md-6">
            <TextField fullWidth id="pinCode" label="Pin Code *" variant="standard" margin="normal" value={this.state.pinCode} onChange={(e) => {
              this.setState({ pinCode: e.target.value })
            }} />
          </div>
          <div className="col-md-6">
            <TextField fullWidth id="emailaddress" label="Email Address *" variant="standard" margin="normal" value={this.state.emailaddress} onChange={(e) => {
              this.setState({ emailaddress: e.target.value })
            }} />
          </div>

          <div className="col-md-6">
            <FormControl variant="standard" fullWidth margin="normal">
              <InputLabel>Class Seeking Admission *</InputLabel>
              <Select
                labelId=""
                id="classSeeking" value={this.state.classSeeking} onChange={(e) => {
                  this.setState({ classSeeking: e.target.value })
                }}>
                <MenuItem value="Nursery">Nursery</MenuItem>
                <MenuItem value="LKG">LKG</MenuItem>
                <MenuItem value="UKG">UKG</MenuItem>
                <MenuItem value="Class 1">Class 1</MenuItem>
                <MenuItem value="Class 2">Class 2</MenuItem>
                <MenuItem value="Class 3">Class 3</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="col-md-6">
            <TextField fullWidth id="phonenumber" label="Phone Number *" variant="standard" margin="normal" value={this.state.phonenumber} onChange={(e) => {
              this.setState({ phonenumber: e.target.value })
            }} />
          </div>
          <div className="col-md-12">
            <TextField fullWidth id="leavemessage" label="Leave your message" variant="outlined" margin="normal" multiline
              rows={6} value={this.state.leavemessage} onChange={(e) => {
                this.setState({ leavemessage: e.target.value })
              }} />
          </div>

          <Button variant="contained" color="success" className="mt-3 enq-btn-frm">
            Submit
          </Button>

        </div>
      </>
    )
  }
}

