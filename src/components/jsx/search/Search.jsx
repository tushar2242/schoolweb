/* eslint-disable react/prop-types */
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';

import NavBar from '../navbarWithLogin/NavBar';
import Footer from '../footer/Footer';

import axios from 'axios';
// import Filterschool from './Filterschool';

import React, { useEffect, useState } from 'react';
import FilterschoolBox from './FilterschoolBox';
import { useDispatch, useSelector } from 'react-redux';
import { addSchool } from '../../redux/post/postSlice';

import SimpleLoader from '../loader/SimpleLoader';


const endPoint = "school/find-to/filter";
const filterEndPoint = 'school/filter';
const url = `https://hammerhead-app-iohau.ondigitalocean.app/`;



// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('');
    // const [school, setSchool] = useState([]);


    const searchValue = useSelector((state) => state.post.search)
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch()
    const schools = useSelector((sch) => sch.post.schools)

    // setSearchQuery(searchValue);


    // useEffect(() => {
    //     setSearchQuery(searchValue)
    // }, [searchValue])

    useEffect(() => {
        // console.log('log')
        setSearchQuery(searchValue)
        async function fetData() {

            try {
                const encodedQuery = encodeURIComponent(searchQuery);
                //  console.log(`${url}school?search=${encodedQuery}`);
                const result = await axios.get(`${url}school?search=${encodedQuery}`)

                dispatch(addSchool(result.data.data))
                //setSchool(result.data.data)
                setIsLoading(false)

            } catch (error) {
                console.log(error)
                // setSchool('')
            }
        }

        fetData()
        window.scroll(0, 0)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery, searchValue])




    return (
        <>
            <NavBar
                loginPopUp={false}
            />

            <div className="filter-display-box" style={{ position: 'relative', top: '20px' }}>
                <div className="container mt-4 mb-4">
                    <div className="row">
                        <div className="col-md-3">
                            <Filterbox />
                        </div>
                        <div className="col-md-9" style={{ height: '130vh', overflow: 'scroll', paddingTop: '10px' }}>

                            {
                                isLoading ? <SimpleLoader /> :
                                    schools.length > 0 && schools.map(schData => {
                                        // console.log(schData)
                                        return <FilterschoolBox schData={schData} key={schData._id} />
                                    })
                            }
                            {/* <FilterschoolBox /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* -----------------------------------For Tablet and Mobile View----------------------------------------------------------- */}
            <div className="tablet-vw-filter" style={{ position: 'relative', top: '20px' }}>
                <div className="container">
                    <FilterByBMR schData={schools} />
                    {
                        isLoading ? <SimpleLoader /> : schools.length > 0 && schools.map(schData => {
                            // console.log(schData)
                            return <FilterschoolBox
                                schData={schData}
                                key={schData._id}

                            />
                        })
                    }
                </div>
            </div>
            <Footer />

        </>
    )
}





const Filterbox = () => {
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        axios.get(`${url}${endPoint}`)
            .then((res) => {
                // console.log(res.data.data)
                setFilterData(res.data.data)

            })
            .catch(res => {
                console.log(res)
            })
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {
                            <>
                                <FilterByBoard
                                    filterData={filterData[0]}
                                    title='FILTER BY BOARD'
                                />
                                <FilterByBoard
                                    filterData={filterData[1]}
                                    title='FILTER BY MEDIUM'
                                />
                            </>

                        }

                        <div className="filter-box mt-3">


                            <h6>FILTER BY RATING</h6>

                            <div className="filter-scroll">
                                <SchoolRating schoolrating="57" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}




const SchoolBoard = (props) => {

    const { board, school, handleClick } = props;
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e, val) => {
        e.preventDefault()
        // Perform actions when checkbox is checked or unchecked
        if (!isChecked) {
            handleClick(val, true)
        }
        else {
            handleClick(val, false)
        }
        setIsChecked(!isChecked)
    };

    return (
        <>

            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <Checkbox size="small" checked={isChecked} onChange={(e) => handleCheckboxChange(e, board)} />
                    <p className="mt-3 board-font">{board}</p>
                </div>
                <p className="mt-3 board-font">({school})</p>
            </div>

        </>
    )
}

// class SchoolMedium extends React.Component {

//     render() {
//         return (
//             <>

//                 <div className="d-flex justify-content-between">
//                     <div className="d-flex">
//                         <Checkbox size="small" />
//                         <p className="mt-3 board-font">{this.props.medium}</p>
//                     </div>
//                     <p className="mt-3 board-font">({this.props.schoolno})</p>
//                 </div>

//             </>
//         )
//     }
// }

class SchoolRating extends React.Component {

    render() {
        return (
            <>

                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <Checkbox size="small" />
                        <p className="mt-3 board-font"><StarIcon className="fs-5 text-warning" /> <StarIcon className="fs-5 text-warning" /><StarIcon className="fs-5 text-warning" /><StarIcon className="fs-5 text-warning" /></p>
                    </div>
                    <p className="mt-3 board-font">({this.props.schoolrating})</p>
                </div>

            </>
        )
    }
}


// function TabRes() {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//         setValue(newValue);
//     };

//     return (

//         <Tabs
//             value={value}
//             onChange={handleChange}
//             variant="scrollable"
//             scrollButtons={false}
//             aria-label="scrollable prevent tabs example"
//         >
//             <Tab label="Item One" />
//             <Tab label="Item Two" />
//             <Tab label="Item Three" />
//             <Tab label="Item Four" />
//             <Tab label="Item Five" />
//             <Tab label="Item Six" />
//             <Tab label="Item Seven" />
//         </Tabs>
//     );
// }


function FilterByBMR() {
    const [filterValue, setFilterValue] = useState('');
    const [fData, setFData] = useState('')

    useEffect(() => {
        axios.get(`${url}${endPoint}`)
            .then((res) => {
                // console.log(res.data.data)
                setFData(res.data.data)
                // setFilterData(res.data.data)

            })
            .catch(res => {
                console.log(res)
            })
    }, [])

    let filterData;

    switch (filterValue) {
        case 'Board':
            filterData = <FilterByBoard
                filterData={fData[0]}
                title='FILTER BY BOARD'
            />;
            break;
        case 'Medium':
            filterData = <FilterByBoard
                filterData={fData[1]}
                title='FILTER BY Medium'
            />;
            break;
        case 'Rating':
            filterData = <FilterByRating />;
            break;
        default:
            filterData = null;
            break;
    }
    return (
        <>
            <div className="filterBmrOuter">
                <div className="filterBtns">
                    <h2 className='my-3'>Filter By : </h2>
                    <ul>
                        <li className="hover-tab" onClick={() => { setFilterValue('Medium'); }}>Medium</li>
                        <li className="hover-tab" onClick={() => { setFilterValue('Board'); }}>Board</li>
                        <li className="hover-tab" onClick={() => { setFilterValue('Rating'); }}>Rating</li>
                    </ul>
                </div>

                <div className="mb-tab-filterData">
                    {filterData}
                </div>
            </div>
        </>
    );
}


// function FilterByMedium(props) {
//     return (
//         <>
//             <div className="filter-box mt-3">
//                 <h6>FILTER BY MEDIUM</h6>

//                 <div className="filter-scroll">
//                     <SchoolMedium medium="English" schoolno="6571" />
//                     <SchoolMedium medium="Hindi" schoolno="7571" />
//                     <SchoolMedium medium="Punjabi" schoolno="5" />
//                     <SchoolMedium medium="Bengali" schoolno="1" />
//                     <SchoolMedium medium="Assamese" schoolno="0" />
//                 </div>
//             </div>
//         </>
//     );
// }

function FilterByRating(props) {
    return (
        <>
            <div className="filter-box mt-3">
                <h6>FILTER BY RATING</h6>

                <div className="filter-scroll">
                    <SchoolRating schoolrating="57" />

                </div>
            </div>
        </>
    );
}


function FilterByBoard(props) {
    const { filterData, title } = props;
    const [filterValue, setFilterValue] = useState([]);

    const dispatch = useDispatch()


    async function fetchSchValue(fillValue) {
        const encodeFilterValue = encodeURIComponent(fillValue)

        try {
            // console.log(`${url}school?search=${encodeFilterValue}`)
            const result = await axios.get(`${url}${filterEndPoint}?search=${encodeFilterValue}`)
            // console.log(result.data.data)
            const filterSchValue = result.data.data
            return filterSchValue
        }
        catch (err) {
            alert(err.response.data.msg)
            return null
        }


    }

    async function handleClick(val, con) {
        if (con) {
            filterValue.push(val)

            let fillValue = filterValue.join(',')
            console.log(fillValue)
            const filterSchList = await fetchSchValue(fillValue)
            filterSchList !== null ?
                dispatch(addSchool(filterSchList))
                : null
        }
        else {
            // console.log('fired',val)
            setFilterValue(
                (prevFilter) =>
                    prevFilter = prevFilter.filter(fName => fName !== val)
            )
            let fillValue = await filterValue.filter(fName => fName !== val).join(',')
            const filterSchList = await fetchSchValue(fillValue)
            filterSchList !== null ?
                dispatch(addSchool(filterSchList))
                : null
        }
        // await console.log(filterValue)

    }
    return (
        <>
            <div className="filter-box mt-3">
                <h6>{title}</h6>

                <div className="filter-scroll">
                    {
                        filterData && filterData.map((board, index) => {
                            return (
                                <SchoolBoard board={board.name} school={board.count} key={index} handleClick={handleClick} />
                            )
                        })
                    }

                </div>
            </div>
        </>
    );
}



export default Search;