import React, { useRef, useEffect } from "react";
import gsap from "gsap";


const Notification = (props) => {
    const myComponentRef = useRef(null);


    useEffect(() => {

        gsap.fromTo(myComponentRef.current, { opacity: 1 }, { opacity: 0, duration: 30.5 });

        setTimeout(() => {
            myComponentRef.current.remove();
        }, 100000);
    }, []);
    const { msg, color } = props;

    return (
        <>
            <div className="notify-box" ref={myComponentRef}
            >
                <div className={color} >{msg}</div>

            </div>

        </>
    )
}

export default Notification;