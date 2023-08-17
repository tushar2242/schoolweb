import React from "react";
import "./review.css";

const Review = () => {
    return (
        <>
            {/* <! - -Testimonials */}
            <section id="testimonials">
                {/* <!--heading---> */}
                {/* <div class="testimonial-heading">
          <span>Comments</span>
          <h1>Clients Says</h1>
        </div> */}
                <div className="testimonials-box-container">

                    {/* box-1 */}
                    <div className="testimonial-box">
                        <div className="box-top">
                            <div className="profile">
                                <div className="profile-img">
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        alt=""
                                    />
                                </div>
                                <div className="name-user">
                                    <strong>Lakhan Singh</strong>
                                    <span>@lakhan.com</span>
                                </div>
                            </div>
                            <div className="reviews">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>

                        <div className="client-comment">
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>

                    {/* box-2 */}
                    <div className="testimonial-box">
                        <div className="box-top">
                            <div className="profile">
                                <div className="profile-img">
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        alt=""
                                    />
                                </div>
                                <div className="name-user">
                                    <strong>Lakhan Singh</strong>
                                    <span>@lakhan.com</span>
                                </div>
                            </div>
                            <div className="reviews">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>

                        <div className="client-comment">
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Review