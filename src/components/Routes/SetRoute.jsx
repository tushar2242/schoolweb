
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/post/store";
import Home from "../jsx/Home/Home";
import EnquiryForm from "../jsx/schEnquiry/EnquiryForm";
import Register from "../jsx/schoolRegister/Register";
import CardDetail from "../jsx/schDetails/CardDetail";
import Search from "../jsx/search/Search";
import SchoolCardCarousel from "../jsx/recommendSchool/SchoolCardCarousel";
import Error from "../jsx/errorPage/Error";
import Enquiry from "../jsx/schEnquiry/Enquiry";
import Profile from "../jsx/profile/Profile";
import ArticleDetail from "../jsx/recentArticle/ArticleDetail";
import ResetPass from "../jsx/passWordReset/ResetPass";
import NewPassWord from "../jsx/passWordReset/NewPassWord";
// import { AnimationUsingaos } from "../jsx/react-spring/animationUsingaos";
import { Helmet } from "react-helmet";
import schIcon from '../images/logo2.png';
import AboutSchool from '../jsx/aboutUs/AboutSchool'
import Terms from '../jsx/privacy-policy/Terms'
import PrivacyPolicy from '../jsx/privacy-policy/PrivacyPolicy'
import ContactUs from "../jsx/contact/ContactUs";
const SetRoute = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href={schIcon} />
      </Helmet>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enquiry1" element={<EnquiryForm />} />
          {/* <Route path="/Register" element={<Register />} /> */}
          <Route path="/showSchool" element={<CardDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/card" element={<SchoolCardCarousel />} />
          <Route path="/aboutus" element={<AboutSchool />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/articleDetails" element={<ArticleDetail />} />
          <Route path="/resetpass" element={<ResetPass />} />
          <Route path='/ContactUs' element={<ContactUs/>} />
          {/* <Route path="/newpass" element={<NewPassWord />} /> */}
          {/* <Route path="/anime" element={<AnimationUsingaos />} /> */}
          <Route
            path="*"
            element={
              <Error
                statusCode="404"
                fText="Page Not Found"
                lText="Try Again"
              />
            }
          />
        </Routes>
      </Provider>
    </>
  );
};

export default SetRoute;
