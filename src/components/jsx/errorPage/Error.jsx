import React from 'react';
import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Error = (props) => {
    const { statusCode, fText, lText } = props
    return (
        <>
            {
                <div className="errOuter">

                    <div title="404">{statusCode}</div>

                    <Typewriter
                        options={{
                            strings: ['Try Again', 'Page Not Found'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <NavLink to='/' style={{ color: "#E74C3C" }}>Click Me</NavLink>
                </div>}
        </>
    )
}

export default Error;