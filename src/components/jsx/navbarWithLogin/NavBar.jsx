import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Login from './Login';
import logo from '../../images/logo2.png';

import { NavDropdown } from 'react-bootstrap';
import AccountIcon from '@mui/icons-material/AccountCircle';


import { addSearch } from '../../redux/post/postSlice';
import LoadingPage from "../loader/LoadingPage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


// const accessToken = localStorage.getItem('accessToken');
const userId = localStorage.getItem('userId');



const NavBar = () => {

    const [search, setSearch] = useState('');
    const [getLogin, setLogin] = useState(false);
    // const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false)
    const [blockBackground, setBlockBackground] = useState(false);
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.post.search);
    const navigate = useNavigate()

    useEffect(() => {
        setSearch(searchValue)
    }, [])



    function handleSearch(e) {
        setSearch(e.target.value)
        handleSearchRedux()
    }

    // function authHeader() {
    //     const user = JSON.parse(localStorage.getItem('userId'));

    //     if (user && user.accessToken) {
    //         return { Authorization: 'Bearer ' + user.accessToken };
    //     } else {
    //         return {};
    //     }
    // }

    async function handleSearchRedux() {
        await dispatch(addSearch(search));
        navigate('/search')
    }


    function hideLogin() {
        setLogin(false)

        // return {
        //     position: 'relative',
        // };
        document.body.style.position = ''
        document.body.style.width = '100%';
        document.body.style.height = '100%';

    }

    function blockBackgroundOnMobile() {
        setBlockBackground(!blockBackground)
        if (!blockBackground) {
            document.body.style.position = 'fixed'
            document.body.style.width = '100%';
            document.body.style.height = '100%';
            document.body.style.top = '0px';
            document.body.style.zIndex = '-1';
        }
        else {
            document.body.style.position = ''
            document.body.style.width = '100%';
            document.body.style.height = '100%';
        }

    }
    function showLogin() {
        setLogin(true)

        document.body.style.position = 'fixed'
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.top = '0px';
        document.body.style.zIndex = '-1';

    }


    function handleLogOut() {
        setLoading(true)
        axios.post(`34.29.141.94/user/logout-api`)
            .then(res => {
                console.log(res)
            })
            .catch(res => {
                console.log(res)
            })



        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        window.location.reload();
    }


    return (
        <>
            {getLogin && <div className="blur-page"></div>}
            {loading && <LoadingPage msg="Log Out" />}


            <nav className="navbar">
                <div className="navbar-container container nav-contx">
                    <input type="checkbox" name="" id="" onClick={blockBackgroundOnMobile} />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <div className="search__container">

                            <input
                                className="search__input"
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={handleSearch}
                            />

                            <i className="fa fa-search searchInputIcon" aria-hidden="true" style={{ cursor: 'pointer' }} onClick={handleSearchRedux}></i>
                        </div>
                        {userId && <li>
                            <NavLink to="/Register" className="reg-color hover-list-color">
                                <b>Register</b>
                            </NavLink>
                        </li>}
                        {getLogin ? <li>
                            <NavLink className="log-color hover-list-color" onClick={showLogin} >
                                <b>Login</b>
                            </NavLink>
                        </li>
                            :
                            (!userId) ?
                                <li>
                                    <NavLink className="log-color hover-list-color" onClick={showLogin}>
                                        <b>Login</b>
                                    </NavLink>
                                </li>
                                :
                                <NavDropdown
                                    id="nav-dropdown-example"
                                    title={<AccountIcon />}
                                    menuVariant="dark"
                                    className='userIcon'
                                    style={{
                                        top: '15px'
                                    }}
                                >

                                    <NavLink to='/profile' className='dropdown-item'>
                                        Profile
                                    </NavLink>
                                    <NavDropdown.Item onClick={handleLogOut}>
                                        Log Out
                                    </NavDropdown.Item>

                                </NavDropdown>
                        }
                    </ul>
                    <NavLink to='/' className="logo-image" >
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
            </nav>
            <div style={{ marginBottom: '65px' }}></div>
            {/* <div className="registerLogin">
                        {userId && <NavLink variant="contained" className="ms-3 register-btn" to="/Register">Register Schools</NavLink>}
                        {
                            getLogin ?
                                <Button variant="contained" className="ms-3 login-btn" onClick={showLogin}>LOGIN</Button>
                                :
                                (!userId) ?
                                    <Button variant="contained" className="ms-3 login-btn" onClick={showLogin}>LOGIN</Button>
                                    : 

                        }
                    </div> */}


            {getLogin &&
                <Login
                    getLogin={getLogin}
                    handleLogindisplay={hideLogin}
                />
            }
        </>
    )
}


export default NavBar;



// In navigation we use redux for login popup in update for centralize state variable with navbar component