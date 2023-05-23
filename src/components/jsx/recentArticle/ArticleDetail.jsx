import React from 'react';
import blogImage from '../../images/blog/blogdetailimg.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import facebook from '../../images/social-icon/facebook.png';
import instagram from '../../images/social-icon/instagram.png';
import twitter from '../../images/social-icon/twitter.png';
import linkedin from '../../images/social-icon/linkedin.png';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NavBar from '../navbarWithLogin/NavBar';
import Footer from '../footer/Footer';
// import AnimatedCard from './AnimatedCard';
import { RecentArticle } from './RecentArticle';



export default class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: false,
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <>
        <NavBar />
        <div className="container mt-4" style={{ paddingTop: '30px' }}>
          <div className="row">
            <div className="col-md-8">
              <BlogDetails />
            </div>
            <div className="col-md-4">
              <Category />
              <RecentPost />
              <NewsLetter />
              <StayConnect />
            </div>


          </div>
        </div>

        <RecentArticle />
        <Footer />
      </>
    )
  }
}


class BlogDetails extends React.Component {
  render() {
    return (
      <>
        <div className=""><img src={blogImage} alt="Blog" className="img-fluid" /></div>
        <h3 className="blog-del-heading">Six Things Parents Should Consider Before Selecting a CBSE School</h3>
        <p className="blog-detail-para">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
        <p className="blog-detail-para">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>
        <div className="blog-headline-box mt-4">
          <div className="headline-box">
            <p className="blog-detail-para">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.</p>
          </div>
        </div>
        <p className="blog-detail-para">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>

        <hr className="mt-4"></hr>
        <div className="comment-box">
          <p className="blog-detail-para"><FavoriteBorderIcon className="fs-5" /> 4 people like this</p>
          <p className="blog-detail-para"><ChatBubbleOutlineIcon className="fs-5" /> 06 Comments</p>
          <p className="blog-detail-para"><PersonOutlineIcon className="fs-5" /> By Jhon Joe</p>
        </div>
      </>
    )
  }
}

class Category extends React.Component {
  render() {
    return (
      <>
        <div className="blog-headline-box">
          <h5><b>Category</b></h5>
          <hr />
          <p className="blog-detail-para pointer-del">CBSE Board (50)</p>
          <hr />
          <p className="blog-detail-para pointer-del">CBSE Board (50)</p>
          <hr />
          <p className="blog-detail-para pointer-del">CBSE Board (50)</p>
          <hr />
          <p className="blog-detail-para pointer-del">CBSE Board (50)</p>
          <hr />
          <p className="blog-detail-para pointer-del">CBSE Board (50)</p>
        </div>
      </>
    )
  }
}

class RecentPost extends React.Component {
  render() {
    return (
      <>
        <div className='mt-4'>
          <h5><b>Recent Post</b></h5>
          <hr />
          <div className="headline-box shadow-sm mt-4 pointer-del">
            <div className='comment-box mt-3'>
              <img src={blogImage} alt="Recent Post" className='img-fluid recent-post-img' />
              <div className="recent-post-heading mt-2"><p>Six Things Parents Should Consider Before Selecting a CBSE School</p>
                <hr />
                <p className="recent-post-heading">March 20,2023</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

class NewsLetter extends React.Component {
  render() {
    return (
      <>
        <div className="mt-4 blog-headline-box">
          <h5><b>Newsletter</b></h5>
          <hr />
          <form>
            <TextField fullWidth label="Enter Email" variant="outlined" margin="normal" />
            <Button fullWidth variant="contained" color="secondary" className="mt-2">
              <b>Subscribe</b>
            </Button>
          </form>
        </div>
      </>
    )
  }
}

class StayConnect extends React.Component {
  render() {
    return (
      <>
        <div className="mt-4 connect-box shadow">
          <div className="d-flex justify-content-center">
            <img src={facebook} alt="facebook" className="img-fluid connect-icon pointer-del" />
            <img src={instagram} alt="instagram" className="img-fluid connect-icon ms-2 pointer-del" />
            <img src={twitter} alt="twitter" className="img-fluid connect-icon ms-2 pointer-del" />
            <img src={linkedin} alt="linkedin" className="img-fluid connect-icon ms-2 pointer-del" />
          </div>
        </div>
      </>
    )
  }
}

