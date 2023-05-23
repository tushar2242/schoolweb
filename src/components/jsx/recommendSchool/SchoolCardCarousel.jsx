import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import schoollogo from "../../images/logo1.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import StarIcon from "@mui/icons-material/Star";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { addId } from "../../redux/post/postSlice";
import { useSelector } from "react-redux";
import CompTitle from "../componentTitle/CompTitle";
import LeftOutlined from '@mui/icons-material/ArrowBackIosNew';
import RightOutlined from '@mui/icons-material/ArrowForwardIos';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'; 
import GradeIcon from '@mui/icons-material/Grade';






const endPoint = "school/find";
const url = `https://hammerhead-app-iohau.ondigitalocean.app/`;

export default class SchoolCardCarousel extends React.Component {
  render() {
    return (
      <>
        <SchoolCard />
      </>
    );
  }
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};



const SchoolCard = () => {
  const [data, setData] = useState([]);

  const id = useSelector((state) => state.post.id);
  console.log(id);

  useEffect(() => {
    setSchoolData();
  }, []);

  const setSchoolData = () => {
    axios
      .get(`${url}${endPoint}`)
      .then((res) => {
        // console.log(res.data.data, "this carousel");/
        setData(res.data.data);
      })
      .catch((res) => console.log(res));
  };

  return (
    <>
      <div className="container-2" style={{ paddingBottom: '0px' }}>
        <div className="IndicatorCarousel">
          <CompTitle title="Recommanded" spanTitle="School" />
          <br></br>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            arrows={true}
            minimumTouchDrag={80}
            //customTransition="all .5"
            // transitionDuration={700}
            keyBoardControl={true}
            containerClass="carousel-container"

          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
          >
            {data.length > 0 &&
              data.map((data, index) => {
                let imgLength = data.school.profilePic.length;
                let img;
                if (imgLength) {
                  let imgPath = data.school.profilePic[0].image;
                  img = `${url}${imgPath}`;
                } else {
                  img = schoollogo;
                }
                return (
                  <SchoolCard1
                    key={index}
                    schId={data._id}
                    schName={data.school.name}
                    schView={data.views}
                    schDp={img}
                    schLocation={data.school.address}
                    schRating="1"
                    schAdmission={true}
                  />
                );
              })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

// const Card = (props) => {
//   const {
//     schName,
//     schView,
//     schDp,
//     schLocation,
//     schRating,
//     schAdmission,
//     schId,
//   } = props;
//   // let img = `http://34.29.141.94/${schDp}`;
//   const dispatch = useDispatch();
//   return (
//     <>
//       <NavLink
//         to="/showSchool"
//         onClick={() => {
//           dispatch(addId(schId));
//           localStorage.setItem("postId", schId);
//         }}
//         className="IndicatorCarouselCard"
//       >

//         <div className="card card-box">
//           <div className="scl-logo-img">
//             <img src={schDp} className="img-fluid card-img-top" alt="logo" />
//           </div>
//           <div className="card-body">
//             <hr></hr>
//             <div className="card-view">
//               <h6 className="rev-text">
//                 <RemoveRedEyeIcon className="text-success fs-5"></RemoveRedEyeIcon>
//                 {schView}
//               </h6>
//               <h6 className="rev-text">
//                 <StarIcon className="text-warning fs-5"></StarIcon>
//                 {schRating}
//               </h6>
//             </div>
//             <h5 className="school-title">
//               {schName}
//               <CheckCircleIcon className="fs-5 text-success"></CheckCircleIcon>
//             </h5>
//             <p className="card-text sl-location">

//               <FmdGoodIcon className="fs-5 text-muted"></FmdGoodIcon>
//               {schLocation}
//             </p>
//           </div>
//           <div className="ad-open">Admission Open</div>
//         </div>
//       </NavLink>
//     </>
//   );
// };


const SchoolCard1 = (props) => {
  const {
    schName,
    schView,
    schDp,
    schLocation,
    schRating,
    schAdmission,
    schId,
  } = props;


  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <>

      <div className="slider-card-sch">
        <div className="post">
          <div className="header_post">
            <div className="sch-logo-img"><img src={schDp} alt="logo" /></div>
          </div>

          <div className="body_post">
            <div className="post_content" onClick={async () => {
              await dispatch(addId(schId));
              await localStorage.setItem("postId", schId);
              navigate('/showSchool')
            }}>
              <h5 className="bht-sch-heading">{schName} <CheckCircleIcon className="mat-icon1" /></h5>
              <p className="loct-font"><FmdGoodIcon className="locate-icon" />{schLocation}</p>

              <div className="container_infos">
                <p className="icon-font"><RemoveRedEyeIcon className="mat-icon1" />{schRating}</p>
                <p className="icon-font"><GradeIcon className="mat-icon2" />{schView}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
