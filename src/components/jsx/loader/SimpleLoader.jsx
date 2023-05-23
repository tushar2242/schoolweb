import Aos from "aos";
import { useEffect } from "react";


const SimpleLoader = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className="Loadercontainer mt-4" data-aos='fade-up'>
            <div className="yellow"></div>
            <div className="red"></div>
            <div className="blue"></div>
            <div className="violet"></div>
        </div>
    )
}

export default SimpleLoader;