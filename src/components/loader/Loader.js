import React from "react";
import "./Loader.css";
import LoaderImg from "../../assets/loader.png";

const Loader = (props) => {
  return (
    <div className="loader-wrapper">
      <div className="overlay-loader">
        <div className="overlay-middle">
          <div className="overlay-content">
            <img className="logo-zoom" alt="loader" src={LoaderImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
