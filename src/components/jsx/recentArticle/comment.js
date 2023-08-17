import React from "react";
import "./comment.css";

export default function comment() {
  return (
    <>
      <div className="container bootdey">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-body">
              <textarea
                className="form-control"
                rows="3"
                placeholder="What are you thinking?"
              ></textarea>
              <div className="mar-top text-end">
                <button
                  className="btn btn-sm btn-primary"
                  type="submit"
                >
                  <i className="fa fa-pencil fa-fw"></i> Share
                </button>
                {/* <a className="btn btn-trans btn-icon fa fa-video-camera add-tooltip" href="#"></a>
      <a className="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#"></a>
      <a className="btn btn-trans btn-icon fa fa-file add-tooltip" href="#"></a> */}
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="panel-body">
              {/* <!-- Newsfeed Content -->
    <!--===================================================--> */}
              <div className="media-block">
                <a className="media-left" href="#">
                  <img
                    className="comment-profile"
                    alt="Profile Picture"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  />
                </a>
                <div className="media-body">
                  <div className="ms-3">
                    <a
                      href="#"
                      className="btn-link text-semibold media-heading box-inline text-decoration-none"
                    >
                      Lisa D.
                    </a>
                    <p className="text-muted text-sm mt-2">
                      <i className="fa fa-mobile fa-lg"></i> - From Mobile - 11
                      min ago
                    </p>
                  </div>
                  <p>
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat.
                  </p>
                  <div className="pad-ver">
                    <div className="btn-group">
                      <a
                        className="btn btn-sm btn-default btn-hover-success text-decoration-none"
                        href="#"
                      >
                        <i className="fa fa-thumbs-up"></i>
                      </a>
                      <a
                        className="btn btn-sm btn-default btn-hover-danger"
                        href="#"
                      >
                        <i className="fa fa-thumbs-down"></i>
                      </a>
                    </div>
                    <a
                      className="btn btn-sm btn-default btn-hover-primary"
                      href="#"
                    >
                      Comment
                    </a>
                  </div>
                  <hr />

                  {/* <!-- Comments --> */}
                  <div>
                    <div className="media-block">
                      <a className="media-left" href="#">
                        <img
                          className="comment-profile"
                          alt="Profile Picture"
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        />
                      </a>
                      <div className="media-body">
                        <div className="ms-3">
                          <a
                            href="#"
                            className="btn-link text-semibold media-heading box-inline text-decoration-none"
                          >
                            Bobby Marz
                          </a>
                          <p className="text-muted text-sm mt-2">
                            <i className="fa fa-mobile fa-lg"></i> - From Mobile
                            - 7 min ago
                          </p>
                        </div>
                        <p>
                          Sed diam nonummy nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat. Ut wisi enim ad
                          minim veniam, quis nostrud exerci tation ullamcorper
                          suscipit lobortis nisl ut aliquip ex ea commodo
                          consequat.
                        </p>
                        <div className="pad-ver">
                          <div className="btn-group">
                            <a
                              className="btn btn-sm btn-default btn-hover-success active"
                              href="#"
                            >
                              <i className="fa fa-thumbs-up"></i> You Like it
                            </a>
                            <a
                              className="btn btn-sm btn-default btn-hover-danger"
                              href="#"
                            >
                              <i className="fa fa-thumbs-down"></i>
                            </a>
                          </div>
                          <a
                            className="btn btn-sm btn-default btn-hover-primary"
                            href="#"
                          >
                            Comment
                          </a>
                        </div>
                        <hr />
                      </div>
                    </div>

                    <div className="media-block">
                      <a className="media-left" href="#">
                        <img
                          className="comment-profile"
                          alt="Profile Picture"
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        />{" "}
                      </a>

                      <div className="media-body">
                        <div className="ms-3">
                          <a
                            href="#"
                            className="btn-link text-semibold media-heading box-inline text-decoration-none"
                          >
                            Lucy Moon
                          </a>
                          <p className="text-muted text-sm mt-2">
                            <i className="fa fa-globe fa-lg"></i> - From Web - 2
                            min ago
                          </p>
                        </div>
                        <p>
                          Duis autem vel eum iriure dolor in hendrerit in
                          vulputate ?
                        </p>
                        <div className="pad-ver">
                          <div className="btn-group">
                            <a
                              className="btn btn-sm btn-default btn-hover-success"
                              href="#"
                            >
                              <i className="fa fa-thumbs-up"></i>
                            </a>
                            <a
                              className="btn btn-sm btn-default btn-hover-danger"
                              href="#"
                            >
                              <i className="fa fa-thumbs-down"></i>
                            </a>
                          </div>
                          <a
                            className="btn btn-sm btn-default btn-hover-primary"
                            href="#"
                          >
                            Comment
                          </a>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
