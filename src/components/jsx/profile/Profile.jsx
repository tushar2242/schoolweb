/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Notification from "../notification/Notification";

//import { useLocation } from "react-router-dom";
import axios from "axios";
// import logo from "../../images/logo3.png";

const userId = localStorage.getItem("userId");


const updateEndPoint = "user/profile-update";
const endPoint = "user/get/";
const url = `https://hammerhead-app-iohau.ondigitalocean.app/`;
//const accessToken = localStorage.getItem('accessToken');

const Profile = () => {
  // const { user } = props;

  const [profileData, setProfileData] = useState({ dp: "" });
  const [profileForm, setProfileForm] = useState(false);

  const [proMessage, setProMessage] = useState("");
  const [proColor, setProColor] = useState("");

  // const location = useLocation();
  // const profiledata = location.state;
  const [isEditable, setIsEditable] = useState(true);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getProfile();
  }, []);

  function setProfile() {
    axios
      .put(`${url}${updateEndPoint}`, {
        userId: profileData._id,
        ...profileData,
      })
      .then((res) => {
        console.log(res.data);
        setProMessage(res.data.msg);
        setProColor("alert alert-success");
      })
      .catch((res) => {
        console.log("Error " + res);
        setProMessage(res.msg);
        setProColor("alert alert-danger");
      });
  }

  // function authHeader() {

  //     if (user && user.accessToken) {
  //         return { Authorization: 'Bearer ' + user.accessToken };
  //     } else {
  //         return {};
  //     }
  // }

  function handleEdit() {
    setIsEditable(false);
    setProMessage("");
  }

  function handleSave() {
    setIsEditable(true);
    setProfile();
  }

  // const getStyle = () => {

  // }

  function getProfile() {
    //const userId = "640ecfa3b947ef62d1162184";

    axios
      .get(`${url}${endPoint}${userId}`)
      .then((res) => {
         console.log(res.data);
        setProfileData(res.data.data);

        setProfileForm(true);
      })
      .catch((res) => {
        console.log("Error " + res);
      });
  }

  const { name, dob, email, number, stream, state, graduation, gender, image } =
    profileData;
  return (
    <>
      {proMessage !== "" && <Message msg={proMessage} color={proColor} />}

      {profileForm && (
        <div className="container profileOuter">
          <div className="card">
            <div className="info">
              <span>Edit form</span>
              {isEditable ? (
                <button id="savebutton" onClick={handleEdit}>
                  Edit
                </button>
              ) : (
                <button id="savebutton" onClick={handleSave}>
                  Save
                </button>
              )}
            </div>

            <div className="forms">
              <div className="inputs">
                {isEditable ? (
                  <img src={`${url}${image}`} alt="logo" />
                ) : (
                  <input
                    type="file"
                    onChange={(e, profileData) => {
                      console.log(e.target.files);
                      let fileName = e.target.files[0].name;
                      setProfileData({ ...profileData, dp: fileName });
                    }}
                    className="profileImgInput"
                  />
                )}

                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  readOnly={isEditable}
                  className="editInput"
                />
              </div>
              <div className="inputs">
                <span>Date Of Birth</span>
                <input
                  type="text"
                  name="dob"
                  value={dob}
                  onChange={handleChange}
                  readOnly={isEditable}
                  className="editInput"
                />
              </div>
              <div className="inputs">
                <span>Gender</span>
                <input
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                  readOnly={isEditable}
                  className="editInput"
                />
              </div>
              <div className="inputs">
                <span>Email</span>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  readOnly={isEditable}
                  className="editInput"
                />
              </div>
              <div className="inputs">
                <span>Phone</span>
                <input
                  type="text"
                  name="number"
                  value={number}
                  onChange={handleChange}
                  readOnly={isEditable}
                  className="editInput"
                />
              </div>
              <div className="inputs">
                <span>Stream </span>
                <input
                  type="text"
                  name="stream"
                  value={stream}
                  onChange={handleChange}
                  readOnly={isEditable}
                  className="editInput"
                />
              </div>
              <div className="inputs">
                <span>State</span>
                <input
                  type="text"
                  name="state"
                  value={state}
                  onChange={handleChange}
                  readOnly={isEditable}
                  className="editInput"
                />
              </div>
              <div className="inputs">
                <span>Level</span>
                <input
                  type="text"
                  name="graduation"
                  value={graduation}
                  onChange={handleChange}
                  readOnly={isEditable}
                  className="editInput"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

const Message = (props) => {
  const { msg, color } = props;
  return (
    <>
      <Notification msg={msg} color={color} />
    </>
  );
};
