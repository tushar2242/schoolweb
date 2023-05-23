import React from 'react';
import schoollogo from './images/logo1.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Button from '@mui/material/Button';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PeopleIcon from '@mui/icons-material/People';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import StarRateIcon from '@mui/icons-material/StarRate';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const schClass = ["L.K.G", "U.K.G", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"];
const schDays = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];

export default class details extends React.Component {
    render() {
        return (
            <>
                <div className="study-box">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 mt-4">
                                <Carddetails />
                                <div className="shadow-sm standared-type">
                                    {schClass.map((value) => {
                                        return (
                                            <Standard class={value} key={value} />
                                        )

                                    })}


                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="hour-box shadow-sm">
                                    <h5>Opening Hours</h5>
                                    <p className="tagline"></p>
                                    {
                                        schDays.map((days) => {
                                            return (
                                                <OpeningHour day={days} key={days} />
                                            )

                                        })
                                    }


                                </div>
                            </div>
                            <div className="col-md-12 mt-4">
                                <div className="shadow-sm schoolcard-box">
                                    <h4>Facilities</h4>
                                    <Facility />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


class Carddetails extends React.Component {
    render() {
        return (
            <>
                <div className="card shadow-sm schoolcard-box">
                    <div className="row g-0">
                        <div className="col-md-3 text-center">
                            <img src={schoollogo} className="img-fluid schoollogoImg" alt="logo" />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h4 className="card-title schoolHeading">Stem World School <CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon></h4>
                                <p className="tagline"></p>
                                <p className="locate-text"><FmdGoodIcon className="fs-5 text-muted"></FmdGoodIcon> Near Barrackpore Wireless Gate, Barrackpore, West Bengal - 700121</p>
                                <div className="d-flex">
                                    <p className="locate-text"><ApartmentIcon className="fs-5 text-muted"></ApartmentIcon> Private</p>
                                    <p className="locate-text ms-4"><WorkspacePremiumIcon className="fs-5 text-muted"></WorkspacePremiumIcon> ICSE</p>
                                    <p className="locate-text ms-4"><PeopleIcon className="fs-5 text-muted"></PeopleIcon> CoEd</p>
                                    <p className="locate-text ms-4"><LocalLibraryIcon className="fs-5 text-muted"></LocalLibraryIcon> English</p>
                                </div>

                                <div className="d-flex">
                                    <p className="locate-text"><StarRateIcon className="fs-4 text-warning"></StarRateIcon> 4.0/5.0</p>
                                    <p className="ms-4 locate-text"><RemoveRedEyeIcon className="fs-4 text-success"></RemoveRedEyeIcon> 9529 Views</p>

                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="button-box">
                            <Button variant="contained" color="success" className="enquire-btn">
                                Enquire Now
                            </Button>

                            <Button variant="contained" color="secondary" className="compare-btn">
                                Compare
                            </Button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

class OpeningHour extends React.Component {
    render() {
        return (
            <>
                <div className="button-box">
                    <p className="day-text">{this.props.day}</p>
                    <p className="time-text">08:30 AM</p>
                    <p className="time-text">05:30 PM</p>
                </div>
                <p className="timeline"></p>
            </>
        )
    }
}
class Standard extends React.Component {
    render() {
        return (
            <>

                <p className="class-type">{this.props.class}</p>

            </>
        )
    }
}

class Facility extends React.Component {
    render() {
        return (
            <>
                <div className="d-flex justify-content-between mt-4">
                    <h5>EDUCATIONAL FACILITIES</h5>
                    <h5>(1/6)</h5>

                </div>
                <div className="faclity-box">
                    <div>
                        <h6><CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon> <HighlightOffIcon className="fs-5 text-muted"></HighlightOffIcon> Library</h6>
                        <h6><CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon> <HighlightOffIcon className="fs-5 text-muted"></HighlightOffIcon> Digital Library</h6>
                    </div>
                    <div>
                        <h6><CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon> <HighlightOffIcon className="fs-5 text-muted"></HighlightOffIcon> Career Counseling</h6>
                        <h6><CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon> <HighlightOffIcon className="fs-5 text-muted"></HighlightOffIcon> Counseling</h6>
                    </div>
                    <div>
                        <h6><CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon> <HighlightOffIcon className="fs-5 text-muted"></HighlightOffIcon> Student Exchange</h6>
                        <h6><CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon> <HighlightOffIcon className="fs-5 text-muted"></HighlightOffIcon> Test Center</h6>
                    </div>
                </div>

            </>
        )
    }
}