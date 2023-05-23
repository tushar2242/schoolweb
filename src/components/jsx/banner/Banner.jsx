import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
import Typewriter from "typewriter-effect";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSearch } from "../../redux/post/postSlice";
// import store from "../../redux/store";
// import { updateValue } from "../../redux/valueAction";
import AOS from "aos";
// import { useSpring, animated } from "react-spring";
// import {easeLinear} from 'd3-ease';

const Banner = () => {
  const [pinValue, setPinValue] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();


  async function handleSearchRedux() {
    await dispatch(addSearch(pinValue));
    navigate('/search')
  }
  // const [isRender, setIsRender] = useState(false);

  function handlePin(e) {
    setPinValue(e.target.value);
    // let pinValue = this.state.pinValue;
    // store.dispatch(updateValue(e.target.value));
  }

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  // <---- Just UnComment for a animation ---->

  // const fadeTop = useSpring({
  //   opacity: isRender ? 1 : 0,
  //   transform: isRender ? `translate3d(0,0,0)` : "translate3d(-90px,0,0)",
  //   config: { duration: 250, loop: true },

  // });

  // function handleSlide() {
  //   setIsRender(true);
  // }




  return (
    <>
      <div className="banner-bg">
        <div
          className="banner-txt col-md-6"
        // style={fadeTop}
        // onAnimationStart={handleSlide}
        // data-aos="fade-up"
        >
          <h1>Search Your</h1>
          <h2>Future</h2>

          <Typewriter
            options={{
              strings: ["Schools", "Colleges"],
              autoStart: true,
              loop: true,
            }}
          />
          <br />
          <div className="container">
            <div className="container__item">
              <form className="form">
                <input
                  type="number"
                  className="form__field"
                  placeholder="Enter Pin-Code"
                  value={pinValue}
                  onChange={handlePin}
                  required
                />
                <NavLink
                  onClick={handleSearchRedux}
                  className="btn btn--primary btn--inside upprcase"
                >
                  Search
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
