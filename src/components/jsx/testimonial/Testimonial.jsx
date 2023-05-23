import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import userImage from "../../images/user.png";
import CompTitle from "../componentTitle/CompTitle";
import { GetData } from "../../hooks/AccessData";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const endPoint = "testimonials/get";
const url = `https://hammerhead-app-iohau.ondigitalocean.app/`;

const Testimonial = () => {
  const [testmonialCards, setTestmonialCards] = useState([]);

  fetchData()

  async function fetchData() {
    try {
      const result = await GetData(url, endPoint)
      setTestmonialCards(result.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="container-fluid testimonial">
        <CompTitle title="Our" spanTitle="Testimonials" />

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
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          >
            {testmonialCards &&
              testmonialCards.map((testCard) => {
                return <TestimonialCard card={testCard} key={testCard._id} />;
              })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

const TestimonialCard = (props) => {
  const { description, designation, image, name } = props.card;

  let userDp = `${url}${image}`;
  if (image === "") userDp = userImage;

  return (
    <>
      <div className="IndicatorCarouselCard">
        <main className="l-card">
          <section className="l-card__text">
            <p>{description}</p>
          </section>
          <section className="l-card__user">
            <div className="l-card__userImage">
              <img src={userDp} alt="Naruto" />
            </div>
            <div className="l-card__userInfo">
              <span>{name}</span>
              <span>{designation}</span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
