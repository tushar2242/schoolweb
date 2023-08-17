import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Clock from '@mui/icons-material/AccessTime';
import CommentIcon from '@mui/icons-material/Comment';
import { NavLink } from "react-router-dom";
import axios from "axios";
import CompTitle from "../componentTitle/CompTitle";


const url = 'https://hammerhead-app-iohau.ondigitalocean.app/';


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
    Smallmobile: {
        breakpoint: { max: 700, min: 0 },
        items: 1,
    },
};

class ArticalCard extends React.Component {


    render() {
        const { articleImg, articleTitle, description } = this.props;
        // console.log(description.substring(0,100))
        return (
            <NavLink to='/articleDetails'>
                <div className="column">
                    <div className="demo-title">Normal</div>

                    <div className="post-module">

                        <div className="thumbnail">
                            <div className="date">
                                <div className="day">27</div>
                                <div className="month">Mar</div>
                            </div>
                            <img src={url + articleImg} alt="img" />
                        </div>

                        <div className="post-content">
                            <div className="category">Photos</div>
                            <h2 className="title">{articleTitle}</h2>
                            {/* <h2 className="sub_title">The city that never sleeps.</h2> */}
                            <p className="description">{description.length == 100 ? description : description.substring(0, 100) + "..."} </p>
                            <div className="post-meta"><span className="timestamp"><Clock /> 6 mins ago</span><span className="comments"><CommentIcon /> 39 comments</span></div>
                        </div>
                    </div>
                </div>
            </NavLink>
        )
    }
}

export const RecentArticle = () => {


    const [articleData, setArticleData] = useState([]);
    useEffect(() => {
        axios
            .get(`${url}blog/gets`)
            .then((res) => {
                setArticleData(res.data.data);
                console.log(res.data, 'This is article data');
            })
            .catch((res) => console.log(res));
    }, []);


    return (
        <>
            <div className="container-fluid" style={{paddingLeft:'10px',paddingRight:'0px'}}>
                <CompTitle title="Recent" spanTitle="Articles" />

                <div className="IndicatorCarousel">
                    <br></br>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        removeArrowOnDeviceType={["desktop", "tablet", "mobile", "Smallmobile"]}
                    >
                        {articleData && articleData.map((item, index) => {
                            return (
                                <div className="IndicatorCarouselCard" key={item._id}>
                                    <ArticalCard
                                        key={index}
                                        articleTitle={item.title}
                                        articleImg={item.image}
                                        description={item.des}
                                    />
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </>
    );
}


// const RecentCarousel = () => {
//     return (
//         <>

//         </>
//     );
// }



// const SchoolSliderCard = () => {
//     return (
//         <>
//             <div className="slider-card-sch">
//                 <div className="post">
//                     <div className="header_post">
//                         <div className="sch-logo-img"><img src={schoolimage} alt="logo" /></div>
//                     </div>

//                     <div className="body_post">
//                         <div className="post_content">
//                             <h5 className="bht-sch-heading">Bharat School.Org <CheckCircleIcon className="mat-icon1" /></h5>
//                             <p className="loct-font"><FmdGoodIcon className="locate-icon" /> Sector 1Rd,Sector 2,Sector-1,Vidhyadhar Nagar,Jaipur,(Raj.) 302039</p>

//                             <div className="container_infos">
//                                 <p className="icon-font"><RemoveRedEyeIcon className="mat-icon1" /> 50 Views</p>
//                                 <p className="icon-font"><GradeIcon className="mat-icon2" /> 100+</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }