/* eslint-disable react/prop-types */
import React from 'react'
import axios from "axios";
import { Carousel } from 'antd';
import AOS from 'aos';



const endPoint = "about/us/get";
const url = `https://hammerhead-app-iohau.ondigitalocean.app/`;

// const getDirection = (index) => {
//   switch (index) {
//     case 0:
//       return 'fade-left';
//     case 1:
//       return 'fade-right';
//     case 2:
//       return 'fade-left';
//     default:
//       return 'fade-right';
//   }
// }



export default class AboutSchool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutData: [],
      isDataLoad: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    AOS.init({ duration: 1200 });
    axios
      .get(`${url}${endPoint}`)
      .then((res) => {
        // console.log(res.data.data);
        this.setState({
          aboutData: res.data.data[0],
          isDataLoad: true,

        });
      })
      .catch((res) => console.log(res.msg));

  }

  render() {
    const { aboutData, isDataLoad } = this.state;

    return (
      <>
        {isDataLoad &&
          aboutData.image && <AboutUsSlider
            img={aboutData.image}
          />}
        <div className="container p-4">
          <div className="row" style={{ overflow: 'hidden' }}>
            <div className="col-md-6 about-Us-Off">
              <div className="row">
                {isDataLoad &&
                  aboutData.image &&
                  aboutData.image.map((data, index) => {

                    // const direction = getDirection(index);

                    return (
                      <StudentCard key={index}
                        img={data}
                      //  direction={direction}
                      />
                    )
                  })}
              </div>
            </div>

            <div className="col-md-6 mt-3">
              <SchoolDetails
                title={aboutData.title}
                des={aboutData.description}
              />
            </div>
          </div>
        </div>

      </>
    );
  }
}

class StudentCard extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.componentDidMount = this.componentDidMount.bind(this);
  // }
  // componentDidMount(){
  //     const
  // }

  render() {
    const { img, direction } = this.props;
    let imgPath = `${url}${img}`;
    return (
      <>

        <div className="col-md-6 mt-3" data-aos={direction}>
          <div className="center">
            <div className="article-card">
              <div className="content">
                <p className="date">Jan 1, 2022</p>
                <p className="title">Article Title Goes Here</p>
              </div>
              <img src={imgPath} alt="article-cover" />
            </div>
          </div>
        </div>


      </>
    );
  }
}

class SchoolDetails extends React.Component {
  render() {
    const { title, des } = this.props;
    return (
      <>

        <div data-aos="fade-left" >
          <h2 className="school-heading mb-3">{title}</h2>
          <p className="sc-details-para">{des}</p>
          {/* <p className="sc-details-para">Welcome to School Dekho,Best School near me,Kolkata. India’s first search engine for school admissions. We're dedicated to giving you the best ICSE schools in Kolkata, CBSE schools in kolkata, Best schools in kolkata according to area of your choice with a focus on education as a priority, infrastructure & nature, like extra-curricular activities, programs, etc.</p> */}
        </div>
      </>
    );
  }
}



function AboutUsSlider(props) {


  const { img } = props
  return (
    <div className="mainCarouSelDiv">
      <Carousel
        autoplay
        draggable
        dots={false}
        pauseOnHover={true}
        style={{ width: '300px' }}

      >
        {img && img.map((image, index) => {
          const imgFullPath = `${url}${image}`;


          // console.log(imgFullPath)
          return (
            <div key={index} className='about-us-img'>
              <img src={imgFullPath} className='carouselImage' />
            </div>

          )
        })}

      </Carousel>
    </div>
  )
} 