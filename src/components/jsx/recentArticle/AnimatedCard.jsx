import React, { useEffect, useState } from "react";

import Clock from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CompTitle from "../componentTitle/CompTitle";


const url = 'https://hammerhead-app-iohau.ondigitalocean.app/';
const endPoint = 'blog/gets'

const AnimatedCard = () => {
  const [articleData, setArticleData] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}${endPoint}`)
      .then((res) => {
        setArticleData(res.data.data);
        // console.log(res.data, 'This is article data');
      })
      .catch((res) => console.log(res));
  }, []);
  return (
    <>
      <div className="container-1 ">
        <div className="info">
          <CompTitle title="Recent" spanTitle="Artical" />
        </div>
        <div className="cardBox">
          {articleData && articleData.map((item, index) => {
            return (
              <ArticalCard
                key={index}
                articleTitle={item.title}
                articleImg={item.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnimatedCard;

class ArticalCard extends React.Component {
  render() {
    return (
      <NavLink to="/articleDetails">
        <div className="column">
          <div className="demo-title">Normal</div>

          <div className="post-module">
            <div className="thumbnail">
              <div className="date">
                <div className="day">27</div>
                <div className="month">Mar</div>
              </div>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"
                alt="img"
              />
            </div>

            <div className="post-content">
              <div className="category">Photos</div>
              <h1 className="title">City Lights in New York</h1>
              <h2 className="sub_title">The city that never sleeps.</h2>
              <p className="description">
                New York, the largest city in the U.S., is an architectural
                marvel with plenty of historic monuments, magnificent buildings
                and countless dazzling skyscrapers.
              </p>
              <div className="post-meta">
                <span className="timestamp">
                  <Clock /> 6 mins ago
                </span>
                <span className="comments">
                  <CommentIcon /> 39 comments
                </span>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}

export { ArticalCard };