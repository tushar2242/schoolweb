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
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';


const url = `https://hammerhead-app-iohau.ondigitalocean.app/`;
const endPoint = 'blog/getsById?blogeId='
const commentEndPoint = 'get/comment/blog?blogId='





const blogId = localStorage.getItem('blogId');
const userId = localStorage.getItem('userId')

const ArticleDetail = () => {







  const [isData, setIsData] = useState([]);
  const [isComment, setIsComment] = useState(false)

  const articleId = useSelector((state) => state.post.blogId)

  async function fetchArticleDetails() {
    try {
      if (articleId !== '') {
        const res = await axios.get(`${url}${endPoint}${articleId}`);
        console.log(res.data.data[0]);
        setIsData(res.data.data[0])
      } else {
        const res = await axios.get(`${url}${endPoint}${blogId}`);
        console.log(res.data.data[0])
        setIsData(res.data.data[0])
      }
    } catch (error) {
      console.log(error)
    }
  };



  useEffect(() => {
    fetchArticleDetails()
    window.scrollTo(0, 0)
  }, [blogId, articleId])

  function commentUpdate() {
    setIsComment(!isComment)
  }


  return (
    <>
      <NavBar />
      <div className="container mt-4" style={{ paddingTop: '30px' }}>
        <div className="row">
          <div className="col-md-8">
            <BlogDetails
              commentUpdate={commentUpdate}
              blog={isData}
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


export default ArticleDetail

const BlogDetails = ({ commentUpdate, blog }) => {

  // console.log(blog)
  // const { commentUpdate } = props;

  const addLike = '/like/blog?userId=';
  const removeLike = 'unlike/blog?userId='

  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);


  async function LikeFn(point) {
    try {
      const res = await axios.post(url + point + userId, {
        "blogId": blogId
      })
      console.log(res.data)
    }
    catch (err) {
      console.log(err)
      // alert(err.response.data.msg)
    }
  }

  async function fetchLike() {
    const getLike = await blog.like;
    await setCount(getLike)
  }


  useEffect(() => {
    console.log(blog.like)
    // fetchLike()
    // setCount(blog.like)
  }, [])


  function isLike() {
    setLike(!like)
    if (!like) {
      setCount(count + 1)
      LikeFn(addLike)
    }
    else {
      setCount(count - 1)
      LikeFn(removeLike)
    }
  }


  return (
    <>
      <div className="">
        <img src={url + blog.image} alt="Blog" className="article-details" />
      </div>
      <h3 className="blog-del-heading">{blog.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: blog.des2 }}>

      </div>

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
          {blog.comment} Comments</p>
        <p className="blog-detail-para"><PersonOutlineIcon className="fs-5" /> {blog.name}</p>
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
          <p className="blog-detail-para pointer-del">Technology (20)</p>
          <hr />
          <p className="blog-detail-para pointer-del">Nature (52)</p>
          <hr />
          <p className="blog-detail-para pointer-del">Health (23)</p>
          <hr />
          <p className="blog-detail-para pointer-del">Finance (13)</p>
          {/* <hr /> */}
          {/* <p className="blog-detail-para pointer-del">CBSE Board (50)</p> */}
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

  const addcom = 'comment/bloge?userId='


  const [comment, setComment] = useState('');

  const [commentData, setCommentData] = useState([])


  async function fetchCommentData() {
    try {
      const res = await axios.get(url + commentEndPoint + blogId)

      console.log(res.data.data)
      setCommentData(res.data.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchCommentData()
  }, [blogId, userId])


  async function handleAddComment() {
    try {
      const res = await axios.post(url + addcom + userId, {
        "blogId": blogId,
        "comment": comment
      })
      console.log(res.data)
      setComment('')
    }
    catch (err) {
      console.log(err)
    }
  }


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
                  onClick={() => {
                    handleAddComment()
                  }}
                >
                  <i className="fa fa-pencil fa-fw"></i> Add Comment
                </button>
                {/* <a className="btn btn-trans btn-icon fa fa-video-camera add-tooltip" href="#"></a>
                      <a className="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#"></a>
                      <a className="btn btn-trans btn-icon fa fa-file add-tooltip" href="#"></a> */}
              </div>
            </div>
          </div>
          {
            commentData.length > 0 && commentData.map((comment) => {

              return (
                <>
                  <CommentSection
                    comment={comment}
                  />
                </>
              )
            })
          }



        </div>
      </div>
    </>
  )
}


const CommentSection = ({ comment }) => {

  return (
    <>
      <div className="panel">
        <div className="panel-body">
          {/* <!-- Newsfeed Content --*/}
          <div className="media-block">
            <div className="media-left" href="#">
              <img
                className="comment-profile"
                alt="Profile Picture"
                src={url + comment.user[0].image}
              />
            </div>
            <div className="media-body">
              <div className="ms-3">
                <div

                  className="btn-link text-semibold media-heading box-inline text-decoration-none"
                >
                  {comment.user[0].name}
                </div>
                <p className="text-muted text-sm mt-2">
                  <i className="fa fa-mobile fa-lg"></i> 11
                  min ago
                </p>
              </div>
              <p>
                {comment.comment}
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
                {/* <CommentReply
                />

                <CommentReply
                /> */}

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