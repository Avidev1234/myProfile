import React from "react";
import Typical from "react-typical";
import './Profile.css'
export default function profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
          <div className="colz-icon">

          <a href="https://www.facebook.com/avidev.jha/">
            <i className="fa fa-facebook-square"></i>
          </a>
          {/* <a href="#">
        <i className="fa fa-google-plus-square"></i>
</a>*/}
          <a href="https://www.linkedin.com/in/avidev-jha-811b30200/">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="https://twitter.com/AvidevJ">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://github.com/Avidev1234">
            <i className="fa fa-github"></i>
          </a>
          
          
          </div>
          </div>

          <div className="porfile-detail-name">
            <span className="primary-text">
              {" "}
              Hello , I'M <span className="highlighted-text">Avidev</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "React developer",
                    1000,
                    "Full Stack developer",
                    1000,
                    "Mern Stack",
                    1000,
                    "Front End Developer",
                    1000,
                  ]}
                />
              </h1>

              <span className="profile-role-tagline">
              Intrested on building Front end and backend developer
              </span>
              </span>
          </div>

          <div className="profile-options">
          <button className="btn primary-btn">
          {""}
          Hire Me {" "}
          </button>

          <a href='Avidev.pdf' download='Ehiedu Avidev.pdf '>
          <button className='btn highlighted-btn'>get Resume</button>
          </a>
          </div>
        </div>

        <div className="profile-picture">
        <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
