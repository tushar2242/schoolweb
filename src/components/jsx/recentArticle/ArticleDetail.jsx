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
import './comment.css'
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';



export default class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: false,

      isComment: false,
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.commentUpdate = this.commentUpdate.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  commentUpdate() {
    const isComment = this.state.isComment;
    this.setState({ isComment: !isComment })
  }

  render() {

    const { isComment } = this.state;
    return (
      <>
        <NavBar />
        <div className="container mt-4" style={{ paddingTop: '30px' }}>
          <div className="row">
            <div className="col-md-8">
              <BlogDetails
                commentUpdate={this.commentUpdate}
              />

              {
                isComment && <Comments />
              }

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


const BlogDetails = ({ commentUpdate }) => {

  // const { commentUpdate } = props;

  const [like, setLike] = useState(false);
  const [count, setCount] = useState(5);

  function isLike() {
    setLike(!like)
    if (!like) {
      setCount(count + 1)
    }
    else {
      setCount(count - 1)
    }
  }


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
        <p className="blog-detail-para ml-3" onClick={() => {
          isLike()
        }}>
          {!like ? <FavoriteBorderIcon className="fs-5" />
            : <FavoriteIcon className="fs-5"
              style={{ color: '#FF4848' }}

            />} {count}
        </p>
        <p className="blog-detail-para" onClick={() => {
          commentUpdate()
        }}>
          <ChatBubbleOutlineIcon className="fs-5" />
          06 Comments</p>
        <p className="blog-detail-para"><PersonOutlineIcon className="fs-5" /> By Jhon Joe</p>
      </div>
    </>
  )
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

const NewsLetter = () => {

  const [subscribeMail, setSubscribeMail] = useState('')

  return (
    <>
      <div className="mt-4 blog-headline-box">
        <h5><b>Newsletter</b></h5>
        <hr />
        <form>

          <TextField fullWidth
            label="Enter Email"
            variant="outlined"
            margin="normal"
            value={subscribeMail}
            onChange={(e) => setSubscribeMail(e.target.value)}
            type='email'
            required
          />
          <Button fullWidth variant="contained" color="secondary" className="mt-2">
            <b>Subscribe</b>
          </Button>
        </form>
      </div>
    </>
  )
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



const Comments = () => {

  const [comment, setComment] = useState('')
  return (
    <>
      <div className="container bootdey">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-body">
              <textarea
                className="form-control"
                rows="3"
                placeholder="What are you thinking?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <div className="mar-top text-end">
                <button
                  className="btn btn-sm btn-primary"
                  type="submit"
                  style={{ border: 'solid 1px' }}
                >
                  <i className="fa fa-pencil fa-fw"></i> Add Comment
                </button>
                {/* <a className="btn btn-trans btn-icon fa fa-video-camera add-tooltip" href="#"></a>
      <a className="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#"></a>
      <a className="btn btn-trans btn-icon fa fa-file add-tooltip" href="#"></a> */}
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="panel-body">
              {/* <!-- Newsfeed Content -->
    <!--===================================================--> */}
              <div className="media-block">
                <a className="media-left" href="#">
                  <img
                    className="comment-profile"
                    alt="Profile Picture"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  />
                </a>
                <div className="media-body">
                  <div className="ms-3">
                    <a
                      href="#"
                      className="btn-link text-semibold media-heading box-inline text-decoration-none"
                    >
                      Lisa D.
                    </a>
                    <p className="text-muted text-sm mt-2">
                      <i className="fa fa-mobile fa-lg"></i> 11
                      min ago
                    </p>
                  </div>
                  <p>
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat.
                  </p>
                  {/* <div className="pad-ver">
                    <div className="btn-group">
                      <a
                        className="btn btn-sm btn-default btn-hover-success text-decoration-none"
                        href="#"
                      >
                        <i className="fa fa-thumbs-up"></i>
                      </a>
                      <a
                        className="btn btn-sm btn-default btn-hover-danger"
                        href="#"
                      >
                        <i className="fa fa-thumbs-down"></i>
                      </a>
                    </div>
                    <a
                      className="btn btn-sm btn-default btn-hover-primary"
                      href="#"
                    >
                      Comment
                    </a>
                  </div> */}
                  <hr />

                  {/* <!-- Comments --> */}
                  <div>
                    <CommentReply
                    />

                    <CommentReply
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


const CommentReply = () => {
  return (
    <>
      <div className="media-block">
        <a className="media-left" href="#">
          <img
            className="comment-profile"
            alt="Profile Picture"
            src="https://bootdey.com/img/Content/avatar/avatar2.png"
          />
        </a>
        <div className="media-body">
          <div className="ms-3">
            <a
              href="#"
              className="btn-link text-semibold media-heading box-inline text-decoration-none"
            >
              Bobby Marz
            </a>
            <p className="text-muted text-sm mt-2">
              <i className="fa fa-mobile fa-lg"></i>
              7 min ago
            </p>
          </div>
          <p>
            Sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat. Ut wisi enim ad
            minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          {/* <div className="pad-ver">
                          <div className="btn-group">
                            <a
                              className="btn btn-sm btn-default btn-hover-success active"
                              href="#"
                            >
                              <i className="fa fa-thumbs-up"></i> You Like it
                            </a>
                            <a
                              className="btn btn-sm btn-default btn-hover-danger"
                              href="#"
                            >
                              <i className="fa fa-thumbs-down"></i>
                            </a>
                          </div>
                          <a
                            className="btn btn-sm btn-default btn-hover-primary"
                            href="#"
                          >
                            Comment
                          </a>
                        </div> */}
          <hr />
        </div>
      </div>
    </>
  )
}