import React from 'react'
import NavBar from '../navbarWithLogin/NavBar';
import Footer from '../footer/Footer';
import '../../css/terms.css'


const Terms = () => {
    return (
        <>
        <NavBar />
         <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5 mb-4">
                    <h1>Terms & Conditions</h1>
                    <p className="mt-3 terms-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto enim cupiditate quos consequatur recusandae perferendis, eveniet similique nihil quasi laborum quisquam rem, natus ducimus assumenda sequi rerum ea officiis explicabo!</p>
                    <p className="mt-3 terms-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque perferendis iusto facilis aliquam ducimus architecto possimus, rem inventore praesentium reprehenderit!</p>
                    <ul>
                        <li className="mt-3 terms-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, autem blanditiis dignissimos beatae enim facere explicabo amet eveniet tempore ab!</li>
                        <li className="mt-3 terms-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, autem blanditiis dignissimos beatae enim facere explicabo amet eveniet tempore ab!</li>
                        <li className="mt-3 terms-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, autem blanditiis dignissimos beatae enim facere explicabo amet eveniet tempore ab!</li>
                        <li className="mt-3 terms-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, autem blanditiis dignissimos beatae enim facere explicabo amet eveniet tempore ab!</li>
                        <li className="mt-3 terms-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, autem blanditiis dignissimos beatae enim facere explicabo amet eveniet tempore ab!</li>
                    </ul>
                </div>
            </div>
         </div>
        <Footer />
        </>
    );
}
export default Terms;


