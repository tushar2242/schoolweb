import React from 'react';
// import Slider from "react-slick";
import Carousel from 'react-multi-carousel';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Virtual, Pagination, Navigation } from "swiper";


import 'swiper/css/virtual';

import 'swiper/css';
// import company from './logo1.png';



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


export default class NewsCard extends React.Component {

  render() {
    return (
      <>
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
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
          <LogoImage />
          <LogoImage />
          <LogoImage />
          <LogoImage />
          <LogoImage />

        </Carousel>
      </>
      // <NewSlider></NewSlider>
    )
  }
}


class LogoImage extends React.Component {
  render() {

    return (
      <>
        <div className="newsImg">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" alt="news" />
        </div>
      </>
    )
  }
}


// var breakPoints =
// {
//   480: {
//     slidesPerView: 2,
//     spaceBetween: 10,
//   },
//   640: {
//     slidesPerView: 2,
//     spaceBetween: 20,
//   },
//   768: {
//     slidesPerView: 4,
//     spaceBetween: 40,
//   },
//   1024: {
//     slidesPerView: 6,
//     spaceBetween: 50,
//   },
// }

// const NewSlider = () => {
//   return (
//     <>
//       <Swiper
//         loop={true}
//         // pagination={{
//         //   clickable: true,
//         // }}
//         rewind={true}
//         navigation={true}
//         modules={[Pagination, Navigation, Virtual]}
//         className="mySwiper"

//         breakpoints={breakPoints}

//         autoplay={{
//           delay: 1500,
//         }}

//       >
//         <SwiperSlide><LogoImage /></SwiperSlide>
//         <SwiperSlide><LogoImage /></SwiperSlide>
//         <SwiperSlide><LogoImage /></SwiperSlide>
//         <SwiperSlide><LogoImage /></SwiperSlide>
//         <SwiperSlide><LogoImage /></SwiperSlide>
//         <SwiperSlide><LogoImage /></SwiperSlide>
//         <SwiperSlide><LogoImage /></SwiperSlide>
//         <SwiperSlide><LogoImage /></SwiperSlide>

//       </Swiper >
//     </>
//   )
// }
