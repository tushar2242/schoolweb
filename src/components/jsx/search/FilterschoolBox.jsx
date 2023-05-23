// import { useState, useEffect } from 'react';
import schoollogo from '../../images/logo1.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GradeIcon from '@mui/icons-material/Grade';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import SimpleLoader from '../loader/SimpleLoader';



const FilterschoolBox = (props) => {

    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     setIsLoading(false);
    // }, [])


    const { schData } = props;
    return (
        <>
            {
                <div className="filter-card-box shadow-sm mt-3 mb-3 ">
                    <div className="row">
                        <div className="col-md-3 text-center mt-2">
                            <img src={schoollogo} alt="logo" className="school-logo-img" />
                        </div>
                        <div className="col-md-9 mt-2">
                            <div className='d-flex justify-content-between'>
                                <p className="locate-para-font"><RemoveRedEyeIcon className="fs-5 text-success" /> 50 views</p>
                                <p className="locate-para-font"><GradeIcon className="fs-5 text-warning" /> 4.5 rating</p>
                            </div>

                            <div>
                                <h3 className="school-heading-font">{schData.name}</h3>
                                <p className="locate-para-font"><LocationOnIcon className="fs-5" /> {schData.address}</p>
                            </div>
                        </div>
                    </div>
                </div>

            }

        </>
    )
}


export default FilterschoolBox;