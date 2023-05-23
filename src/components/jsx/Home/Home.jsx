import React from 'react';
import NavBar from '../navbarWithLogin/NavBar';
// import { TweenMax } from "gsap";
import Banner from '../banner/Banner';
// import SchoolCard from './SchoolCard';
import SchoolCardCarousel from '../recommendSchool/SchoolCardCarousel';
import Testimonial from '../testimonial/Testimonial';
import RegisterBanner from '../registerBanner/RegisterBanner';
import Footer from '../footer/Footer';
// import Gallery from './Gallery';
import AboutSchool from '../aboutUs/AboutSchool';
import NewsCard from '../inNews/NewsCard';
import CounterCard from '../counter/CounterCard';
// import {reducer} from './redux/reducer';
// import { createStore } from 'redux';
// import Counter from './redux/Counter';
// import LoadingPage from "../loader/LoadingPage";

import { RecentArticle } from '../recentArticle/RecentArticle';
// import LoadingPage from '../loader/LoadingPage';
// const proto = "http://";
// const endPoint = "counter";
// const url = `${proto}34.29.141.94/`;


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {

    // TweenMax.fromTo('.shadow', 0.7, { y: -70, opacity: 0 }, { y: 0, opacity: 1 });
    // this.setState({ isLoading: false })
    // const accessToken = localStorage.getItem('accessToken');
    // console.log(accessToken);
    // const userId = localStorage.getItem('userId');
    // console.log(userId);
  }



  render() {
    // const { isLoading } = this.state;
    return (
      <>

        <NavBar />

        <Banner />

        <SchoolCardCarousel />

        <AboutSchool />

        <RegisterBanner />

        <CounterCard />

        <Testimonial />

        <RecentArticle />

        <NewsCard />

        <Footer />
      </>
    );
  }
}

