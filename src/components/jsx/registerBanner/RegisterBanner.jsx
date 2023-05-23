import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const userId = localStorage.getItem('userId');
export default class RegisterBanner extends React.Component {
    render() {
        return (
            <>

                <div className="banner-bg-1">
                    <div className="banner-txt-1">
                        <h1>Add Your School with us</h1>
                        <div className="bannerInputBox">
                            {userId ? <NavLink to="/register" className="bannerBtn">Register Your School </NavLink>
                                :
                                <NavLink to="/" className="bannerBtn">Please Login</NavLink>
                            }
                        </div>
                    </div>

                </div>
            </>
        )
    }
}


