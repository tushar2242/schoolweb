import { useState } from "react";
import { useSpring, animated } from "react-spring";

const CompTitle = (props) => {
  const [isAnimate, setIsAnimate] = useState(false);

  const slideBottom = useSpring({
    transform: isAnimate ? "translate3d(0,-80px,0)" : "translate3d(0,0,0)",
    from: {
      transform: "translateX(0)",
    },
    delay: 1000,
  });

  function handleAnimate() {
    setIsAnimate(true);
  }

  const { title, spanTitle } = props;
  return (
    <animated.h1
      className="text-center"
      style={slideBottom}
      onAnimationStart={handleAnimate}
    >
      <b>
        {title} <span>{spanTitle}</span>
      </b>
    </animated.h1>
  );
};

export default CompTitle;
