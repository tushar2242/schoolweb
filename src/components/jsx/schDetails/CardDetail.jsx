import React, { Component, useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import schoollogo from "../../images/logo1.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Button from "@mui/material/Button";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PeopleIcon from "@mui/icons-material/People";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import StarRateIcon from "@mui/icons-material/StarRate";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import NavBar from "../navbarWithLogin/NavBar";
import Footer from "../footer/Footer";
//  import ReactDOM from 'react-dom';
import { useSelector } from "react-redux";
import axios from "axios";
import LoadingPage from "../loader/LoadingPage";
import { gsap } from "gsap";
import { Skeleton } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import noImg from '../../images/noImg.jpg';
import showSchoolPreview from '../../images/banner/schoolDefault.jpg'

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};


const endPoint = "find/school/";
const ratingPostEndPoint = "rating/create";
const url = `https://hammerhead-app-iohau.ondigitalocean.app/`;

const postId = localStorage.getItem("postId");
const userId = localStorage.getItem("userId");



const Details = () => {
  const [dp, setDp] = useState("");




  const schCard = useRef(null);
  // const cardElement = schCard.current;
  // console.log(id);
  let id = useSelector((state) => state.post.id)


  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {

        // animate the opacity from 0 to 1
        // console.log(id);
        // const fullUrl = `${url}${endPoint}${id}`;
        // console.log(fullUrl);
        // console.log(postId)
        if (id !== 'None') {
          const response = await axios.get(`${url}${endPoint}${id}`);

          if (!response.data.data[0].school.schoolImage) {
            setDp(showSchoolPreview);
          }
          else {
            const tempDp = response.data.data[0].school.schoolImage;
            const mainDp = `${url}${tempDp}`;
            setDp(mainDp);
          }
          setCard(response.data.data[0]);
        } else {
          const response = await axios.get(`${url}${endPoint}${postId}`);
          if (!response.data.data[0].school.schoolImage) {
            setDp(showSchoolPreview);
          }
          else {
            const tempDp = response.data.data[0].school.schoolImage;
            const mainDp = `${url}${tempDp}`;
            setDp(mainDp);
          }
          setCard(response.data.data[0]);
        }
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, [id]);



  const [card, setCard] = useState([]);

  return (
    <>
      <NavBar />

      <div className="study-box">
        <div className="container-fluid" ref={schCard}>
          {card._id ? (
            <div className="row">
              <div className="col-md-8 mt-4">
                <Carddetails card={card} dp={dp} />
                <div className="shadow-sm standared-type">
                  <Standard class="L.K.G" />
                  <Standard class="U.K.G" />
                  <Standard class="1st" />
                  <Standard class="2nd" />
                  <Standard class="3rd" />
                  <Standard class="4th" />
                  <Standard class="5th" />
                  <Standard class="6th" />
                  <Standard class="7th" />
                  <Standard class="8th" />
                  <Standard class="9th" />
                  <Standard class="10th" />
                  <Standard class="11th" />
                  <Standard class="12th" />
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="hour-box shadow-sm">
                  <h5>Opening Hours</h5>
                  <p className="tagline"></p>
                  <OpeningHour
                    day="Monday"
                    morningtime="08:30 AM"
                    eveningtime="05:30 PM"
                  />
                  <OpeningHour
                    day="Tuesday"
                    morningtime="08:30 AM"
                    eveningtime="05:30 PM"
                  />
                  <OpeningHour
                    day="Wednesday"
                    morningtime="08:30 AM"
                    eveningtime="05:30 PM"
                  />
                  <OpeningHour
                    day="Thursday"
                    morningtime="08:30 AM"
                    eveningtime="05:30 PM"
                  />
                  <OpeningHour
                    day="Friday"
                    morningtime="08:30 AM"
                    eveningtime="05:30 PM"
                  />
                  <OpeningHour
                    day="Saturday"
                    morningtime="08:30 AM"
                    eveningtime="03:00 PM"
                  />
                  <OpeningHour day="Sunday" eveningtime="NA" />
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <div className="shadow-sm schoolcard-box">
                  <BasicTabs des={card.school.schoolDescription} />
                </div>
              </div>
            </div>
          ) : (
            <LoadingPage msg='Loading' />
            // <LoadingPage msg="loading" />
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

class Carddetails extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         dp: '',
  //         isLoading: false,
  //     }
  //     this.componentDidMount = this.componentDidMount.bind(this);

  // }

  // componentDidMount() {
  //     const { card } = this.props;
  //     if (!card.length === 0) {
  //         console.log(card)
  //         const preCardImg = card.profilePic[0].image;
  //         // const preCardImg = ''
  //         const dp1 = `http://34.29.141.94/${preCardImg}`;
  //         console.log(dp1)
  //         this.setState({ dp: dp1 })
  //         this.setState({ isLoading: true })

  //     }
  //     else {
  //         this.setState({ isLoading: false });
  //     }

  // }

  render() {
    const { card, dp } = this.props;
    // const { dp, isLoading } = this.state
    return (
      <>
        <div className="card shadow-sm schoolcard-box">
          <div className="row g-0">
            <div className="col-md-3 text-center">
              <img src={dp} className="img-fluid schoollogoImg" alt="logo" />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h4 className="card-title schoolHeading">
                  {card.school.name}
                  <CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon>
                </h4>

                <p className="tagline"></p>
                <SchoolDetailText
                  icon={<FmdGoodIcon className="fs-5 text-muted"></FmdGoodIcon>}
                  txt={card.school.address}
                />


                <div className="d-flex">
                  <SchoolDetailText
                    icon={<ApartmentIcon className="fs-5 text-muted"></ApartmentIcon>}
                    txt={card.school.schoolType}
                  />
                  <SchoolDetailText
                    icon={<WorkspacePremiumIcon className="fs-5 text-muted"></WorkspacePremiumIcon>}
                    txt={card.school.board}
                  />
                  <SchoolDetailText
                    icon={<PeopleIcon className="fs-5 text-muted"></PeopleIcon>}
                    txt={card.school.type}
                  />
                  <SchoolDetailText
                    icon={<LocalLibraryIcon className="fs-5 text-muted"></LocalLibraryIcon>}
                    txt={card.school.medium}
                  />

                </div>

                <div className="d-flex">
                  <SchoolDetailText
                    icon={<RemoveRedEyeIcon className="fs-4 text-success"></RemoveRedEyeIcon>}
                    txt={card.views}
                  />
                  <SchoolDetailText
                    icon={<RemoveRedEyeIcon className="fs-4 text-success"></RemoveRedEyeIcon>}
                    txt={card.rating}
                  />
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="button-box">
              <Button variant="contained" className="enquire-btn">
                Enquire Now
              </Button>

              <Button variant="contained" className="compare-btn">
                Compare
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}


const SchoolDetailText = (props) => {
  const { txt, icon } = props;
  return (
    <>
      <p className="locate-text ms-3">
        {icon}
        {txt}
      </p>
    </>
  )
}




class OpeningHour extends React.Component {
  render() {
    return (
      <>
        <div className="button-box">
          <p className="day-text">{this.props.day}</p>
          <p className="time-text">{this.props.morningtime}</p>
          <p className="time-text">{this.props.eveningtime}</p>
        </div>
        <p className="timeline"></p>
      </>
    );
  }
}

class Standard extends React.Component {
  render() {
    return (
      <>
        <p className="class-type">{this.props.class}</p>
      </>
    );
  }
}

class TabPanel extends Component {
  render() {
    const { children, value, index, ...other } = this.props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

class BasicTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.setState({ value: newValue });
  }

  render() {
    const { value } = this.state;
    const { des } = this.props;

    return (
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            aria-label="basic tabs example"
          >
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="Eligibility" {...a11yProps(1)} />
            <Tab label="Facilities" {...a11yProps(2)} />
            <Tab label="Gallery" {...a11yProps(3)} />
            <Tab label="Reviews" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AboutCard des={des} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Facility />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <GalleryCard />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ReviewForm />
        </TabPanel>
      </Box>
    );
  }
}

class AboutCard extends React.Component {
  render() {
    const { des } = this.props;
    return (
      <>
        <Card className="about-card">
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              className="about-school-heading"
            >
              ABOUT SCHOOL
            </Typography>

            <Typography variant="body2" className="about-school-para">
              {des}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </>
    );
  }
}
class Facility extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-between mt-4">
          <h5>EDUCATIONAL FACILITIES</h5>
          <h5>1/6</h5>
        </div>
        <div className="faclity-box">
          <div>
            <h6>
              <CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon>{" "}
              <HighlightOffIcon className="fs-5 text-muted"></HighlightOffIcon>{" "}
              Library
            </h6>
            <h6>
              <CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon>{" "}
              <HighlightOffIcon className="fs-5 text-muted"></HighlightOffIcon>{" "}
              Digital Library
            </h6>
          </div>
          <div>
            <h6>
              <CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon>{" "}
              <HighlightOffIcon className="fs-5 text-muted"></HighlightOffIcon>{" "}
              Career Counseling
            </h6>
            <h6>
              <CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon>{" "}
              <HighlightOffIcon className="fs-5 text-muted"></HighlightOffIcon>{" "}
              Counseling
            </h6>
          </div>
          <div>
            <h6>
              <CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon>{" "}
              <HighlightOffIcon className="fs-5 text-muted"></HighlightOffIcon>{" "}
              Student Exchange
            </h6>
            <h6>
              <CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon>{" "}
              <HighlightOffIcon className="fs-5 text-muted"></HighlightOffIcon>{" "}
              Test Center
            </h6>
          </div>
        </div>
      </>
    );
  }
}

const imgUrls = [
  "https://source.unsplash.com/PC_lbSSxCZE/800x600",
  "https://source.unsplash.com/lVmR1YaBGG4/800x600",
  "https://source.unsplash.com/5KvPQc1Uklk/800x600",
  "https://source.unsplash.com/GtYFwFrFbMA/800x600",
  "https://source.unsplash.com/Igct8iZucFI/800x600",
  "https://source.unsplash.com/M01DfkOqz7I/800x600",
  "https://source.unsplash.com/MoI_cHNcSK8/800x600",
  "https://source.unsplash.com/M0WbGFRTXqU/800x600",
  "https://source.unsplash.com/s48nn4NtlZ4/800x600",
  "https://source.unsplash.com/E4944K_4SvI/800x600",
  "https://source.unsplash.com/F5Dxy9i8bxc/800x600",
  "https://source.unsplash.com/iPum7Ket2jo/800x600",
];

class GalleryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return (
      <div onClick={(e) => this.openModal(e, index)}>
        <img src={src} alt="tg" />
      </div>
    );
  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  closeModal(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }
  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  }
  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  }
  render() {
    return (
      <div className="gallery-container">
        <div className="gallery-grid">
          {imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < imgUrls.length}
          src={imgUrls[this.state.currentIndex]}
        />
      </div>
    );
  }
}

class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27) this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev) this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext) this.props.findNext();
  }
  render() {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } =
      this.props;
    if (!src) {
      // console.log(src);
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div isopen={!!src} className="modal" style={{ display: "block" }}>
          <div className="modal-body">
            <a
              href="#"
              className="modal-close"
              onClick={closeModal}
              onKeyDown={this.handleKeyDown}
            >
              &times;
            </a>
            {hasPrev && (
              <a
                href="#"
                className="modal-prev"
                onClick={findPrev}
                onKeyDown={this.handleKeyDown}
              >
                &lsaquo;
              </a>
            )}
            {hasNext && (
              <a
                href="#"
                className="modal-next"
                onClick={findNext}
                onKeyDown={this.handleKeyDown}
              >
                &rsaquo;
              </a>
            )}
            <img src={src} />
          </div>
        </div>
      </div>
    );
  }
}

const ReviewForm = () => {
  const [star, setStar] = useState(3);
  const [ratingName, setRatingName] = useState("");
  const [ratingMail, setRatingMail] = useState("");
  const [ratingMsg, setRatingMsg] = useState("");

  const handleReviewSubmit = async (e) => {

    e.preventDefault();
    if (userId) {
      try {
        const res = await axios.post(`${url}${ratingPostEndPoint}?userId=${userId}`, {
          schoolId: postId,
          name: ratingName,
          email: ratingMail,
          text: ratingMsg,
          rating: star
        })

        console.log(res.data)
        alert(res.data.msg)
      }
      catch (err) {
        console.log(err)
        setStar(3)
        setRatingMail('')
        setRatingMail('')
        setRatingMsg('')
        alert(err.response.data.msg)
      }
    }

    else {
      alert("Please Login Before Review")
      setStar(3)
      setRatingName('')
      setRatingMail('')
      setRatingMsg('')
    }


  }


  return (
    <>
      <div>
        <h2>Drop a review</h2>
        <p className="borderline"></p>
        <Stack spacing={1}>
          <div className="row">
            <div className="col-md-3">
              <Rate
                // defaultValue={3}
                character={({ index }) => customIcons[index + 1]}
                value={star}
                onChange={(value) => {
                  setStar(value);
                }}

                style={{ color: '#ff4848' }}
              />
            </div>
          </div>
        </Stack>
        <div className="row">
          <div className="col-md-4">
            <TextField
              fullWidth
              id="standard-basic"
              label="Name"
              variant="standard"
              margin="normal"
              value={ratingName}
              onChange={(e) => setRatingName(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <TextField
              fullWidth
              id="standard-basic"
              label="E-Mail"
              variant="standard"
              margin="normal"
              value={ratingMail}
              onChange={(e) => setRatingMail(e.target.value)}
            />
          </div>
          {/* <div className="col-md-4">
              <TextField
                fullWidth
                id="standard-basic"
                label="Mobile Number"
                variant="standard"
                margin="normal"
              />
            </div> */}
          <div className="col-md-12">
            <TextField
              fullWidth
              id="descibe"
              label="Descibe Yourself"
              variant="outlined"
              margin="normal"
              multiline
              rows={5}
              value={ratingMsg}
              onChange={(e) => setRatingMsg(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            className="submit-btn"
            onClick={handleReviewSubmit}
          >
            DROP YOUR REVIEW
          </Button>
        </div>
      </div>
    </>
  );
};

export default Details;



