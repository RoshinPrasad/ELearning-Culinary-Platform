import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../axios/axios";
import { storage } from "../../src/firebase/firebaseconfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
import Cookies from "js-cookie";
import "./UserProfile.css";

const UserProfile = () => {
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [udata, setUdata] = useState("");

  useEffect(() => {
    const userObjFromCookies = Cookies.get("userDetails");
    const userObjFromLocalStorage = localStorage.getItem("userDetails");

    const userObj = userObjFromCookies
      ? JSON.parse(userObjFromCookies)
      : userObjFromLocalStorage
      ? JSON.parse(userObjFromLocalStorage)
      : null;

    setUdata(userObj);
  }, []);

  function handleImage(e) {
    setImage(e.target.files[0]);
  }

  const handleApi = () => {
    const reference = ref(storage, `users/${image.name + v4()}`);
    uploadBytes(reference, image).then((response) => {
      getDownloadURL(reference).then((url) => {
        const datas = {
          id: udata.id,
          imageurl: url,
        };

        axiosInstance
          .post("image-upload/", datas)
          .then((response) => {
            setUdata(response.data.details);
          })
          .catch((error) => {
            alert(error);
          });
      });
    });
  };

  return (
    <div className="user-profile-container">
      <br></br>
      <div
        className="d-flex justify-content-between"
        style={{ marginRight: "1020px" }}
      >
        <h4>
          <Link to="/">Go Home</Link>&lt;&lt;&lt;
        </h4>
        <h4>User Profile</h4>
      </div>
      <div className="bordered-box gradient-custom">
        <div className="image-container" style={{ marginLeft: "100px" }}>
          <img src={udata.image} alt="image" className="user-image" />
        </div>
        <input
          type="file"
          name="file"
          style={{ marginLeft: "70px" }}
          onChange={handleImage}
        />
        <br></br>
        <button
          onClick={handleApi}
          style={{ height: "40px", padding: "2px", margin: "5px" }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "darkgreen")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "")}
        >
          Change Image
        </button>
        <br></br>
        <div className="user-details-container">
          <h1>
            &nbsp;&nbsp;&nbsp;&nbsp;NAME&nbsp;&nbsp; :{" "}
            {String(udata.name).toUpperCase()}{" "}
          </h1>
          <h3>UserName : {udata.username} </h3>
          <p>Email :{udata.email} </p>
          {udata.phone && <p>Phone :{udata.phone} </p>}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
