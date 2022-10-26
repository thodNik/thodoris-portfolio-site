import React from "react";
import "./about.css";
import Me from "../../images/Thodoris.jpg";
import cv from "../../images/CV.pdf"

const About = () => {
  function getAge() {
    let today = new Date();
    let birthDate = new Date("1985/07/24");
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <section id="about">
      <div className="container">
      <h2>Profile</h2>
        <hr />
        <div className="row">
          <div className="col-lg-4 about-me">
            <h3>About me</h3>
            <p>
              I am a full stack developer with strong organizational skills.
              Experienced with working in teams, achieving the goals assigned to me and
              working under pressure. I am a fast learner and always
              willing to explore professional opportunities that will leverage my
              skills and professional development.
            </p>
          </div>
          <div className="col-lg-4 profile-center">
            <img className="me img-fluid" src={Me} alt="Thodoris Nikolaidis"></img>
            <a href={cv} download type="button" class="btn btn-outline-danger shadow-none">
              Download CV
            </a>
          </div>
          <div className="col-lg-4 details">
            <h3>Details</h3>
            <strong>Name:</strong>
            <p>Thodoris Nikolaidis</p>
            <strong>Age:</strong>
            <p>{getAge()}</p>
            <strong>Location:</strong>
            <p>Athens, Greece</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
