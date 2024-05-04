import React from "react";
import "../Assets/Css/main.css";
// import { FaCheckedBox } from "react-icons/fa";

const Main = () => {
  return (
    <>
      <div className="main-content">
        <div className="main-image">
          <img
            src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713540294/Link_img_uoxnll.png"
            height="400px"
            width="500px"
            alt=""
          />
        </div>
        <div className="card">
          <h6> Design Your Own</h6>
          <h1>
            You've got the ideas, <br /> We've got the tools
          </h1>
          <h5>
            T-shirt printing for Everyone get headstart with free design <br />
            template you can customize in few clicks.
            
          </h5>
          {/* <div className="text">
          <h4>
            <img
              src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713570812/Icon_byyyf9.png"
              height="10px"
              alt=""
            />
            Top quality printing using the latest technology
          </h4>
          <h4>
            <img
              src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713570812/Icon_byyyf9.png"
              height="10px"
              alt=""
            />
            Max and Match colors, sizes and designs
          </h4>

          <h4>
            <img
              src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713570812/Icon_byyyf9.png"
              height="10px"
              alt=""
            />
            Fast and fire standing stripping
          </h4>

          <h4>
            <img
              src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713570812/Icon_byyyf9.png"
              height="10px"
              alt=""
            />
            Customers happiness guarentee
          </h4>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Main;
