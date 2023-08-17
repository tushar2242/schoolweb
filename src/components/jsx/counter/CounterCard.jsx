import { useEffect, useState, ref } from "react";
import CountUp from "react-countup";
import schoolicon from "../../images/schoolicon.png";

import VisibilitySensor from 'react-visibility-sensor';
import { GetData } from "../../hooks/AccessData";

const endPoint = "counter/get";
const url = `https://hammerhead-app-iohau.ondigitalocean.app/`;


const CounterCard = () => {


  const [count, setCount] = useState([])

  fetchData()

  async function fetchData() {
    try {
      const result = await GetData(url, endPoint)
      setCount(result.data)
    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="counter-bg">
        <div className="container">
          <div className="d-flex justify-content-between">
            {count.map((item, index) => {
              return (
                <SchoolCounter
                  key={index}
                  title={item.name}
                  count={item.data}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}


const SchoolCounter = ({ title, count }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };

  useEffect(() => {
    // Add any side effects or additional logic here if needed
  }, []);

  return (
    <div className="col-md-4 text-center mt-3">
      <VisibilitySensor
        partialVisibility={true}
        onChange={onVisibilityChange}
        active={!isVisible} // Ensure the sensor is active when isVisible is false
      >
        <div className="d-flex" style={{justifyContent:'center'}}>
          <img src={schoolicon} alt="icon" className="school-icon" />
          <div>
            {isVisible ? (
              <CountUp
                className="counter-font"
                start={0}
                end={count}
                suffix="+"
                key={count}
              />
            ) : (
              <span className="counter-font">0</span>
            )}
            <h6 className="reg-school ms-3">{title}</h6>
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};




export default CounterCard