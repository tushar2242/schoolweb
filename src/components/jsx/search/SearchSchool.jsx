import React from 'react';
import NavBar from './NavBar';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';


export default class SearchSchool extends React.Component {
    render() {
        return (
            <>
                <NavBar
                    loginPopUp={false}
                />
                <FilterBox />
            </>
        )
    }
}


class FilterBox extends React.Component {


    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="filter-box mt-3">
                                <h6>FILTER BY BOARD</h6>

                                <div className="filter-scroll">
                                    <SchoolBoard board="CISCE" school="571" />
                                    <SchoolBoard board="CBSE" school="7571" />
                                    <SchoolBoard board="BSEAP" school="5" />
                                    <SchoolBoard board="BSEB" school="1" />
                                    <SchoolBoard board="DBSE" school="0" />
                                </div>
                            </div>

                            <div className="filter-box mt-3">
                                <h6>FILTER BY MEDIUM</h6>

                                <div className="filter-scroll">
                                    <SchoolMedium medium="English" schoolno="6571" />
                                    <SchoolMedium medium="Hindi" schoolno="7571" />
                                    <SchoolMedium medium="Punjabi" schoolno="5" />
                                    <SchoolMedium medium="Bengali" schoolno="1" />
                                    <SchoolMedium medium="Assamese" schoolno="0" />
                                </div>
                            </div>
                            <div className="filter-box mt-3">
                                <h6>FILTER BY RATING</h6>

                                <div className="filter-scroll">
                                    <SchoolRating schoolrating="57" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

class SchoolBoard extends React.Component {

    render() {
        return (
            <>

                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <Checkbox size="small" />
                        <p className="mt-3 board-font">{this.props.board}</p>
                    </div>
                    <p className="mt-3 board-font">({this.props.school})</p>
                </div>

            </>
        )
    }
}

class SchoolMedium extends React.Component {

    render() {
        return (
            <>

                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <Checkbox size="small" />
                        <p className="mt-3 board-font">{this.props.medium}</p>
                    </div>
                    <p className="mt-3 board-font">({this.props.schoolno})</p>
                </div>

            </>
        )
    }
}

class SchoolRating extends React.Component {

    render() {
        return (
            <>

                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <Checkbox size="small" />
                        <p className="mt-3 board-font"><StarIcon className="fs-5 text-warning" /> <StarIcon className="fs-5 text-warning" /><StarIcon className="fs-5 text-warning" /><StarIcon className="fs-5 text-warning" /></p>
                    </div>
                    <p className="mt-3 board-font">({this.props.schoolrating})</p>
                </div>

            </>
        )
    }
}