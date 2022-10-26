import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2>Experience</h2>
        <hr />
        <h3>Career</h3>
        <div className="exp">
          <div className="row">
            <div className="col-lg-4">
              <h5>Self-Employed</h5>
              <p>Feb 2022 - present</p>
            </div>
            <div className="col-lg-8 description">
              <h5>Freelance - Full Stack Developer</h5>
              <p>
                I started my career as a Full Stack Developer using as my tools
                HTML5, CCS3, Javascript, Node.js, React.js and MongoDB. My first
                project was the designing of Pantelis Nikolaidis Pharmacy web
                page, a MERN full stack application.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <h5>Medical Diagnosis Group</h5>
              <p>Feb 2017 - present</p>
            </div>
            <div className="col-lg-8 description">
              <h5>Fulltime - Quality Assurance Supervisor</h5>
              <p>
                In 2017 after working in the Group for 4 years I was appointed
                to a new position as Quality Assurance Supervisor at Keratsini unit. During this
                time, I reorganized the medical laboratory file system and
                retrained the staff in order to comply for the EN ISO 9001:2008
                and EN ISO 15189:2012 procedures.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <h5>Medical Diagnosis Group/Centrallab</h5>
              <p>Sep 2015 - Jan 2017</p>
            </div>
            <div className="col-lg-8 description">
              <h5>Fulltime - Quality Assurance/Quality Control Officer</h5>
              <p>
                In September 2015 I was transfered to the newly built central
                laboratory of the Group. I was in charge of the daily quality
                control and maintenance of all analyzers, and pre-evaluation of
                blood test results.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <h5>Medical Diagnosis Group</h5>
              <p>Feb 2013 - Sep 2015</p>
            </div>
            <div className="col-lg-8 description">
              <h5>Fulltime - Clinical Chemist</h5>
              <p>
                Medical Diagnosis Group is a healthcare company. Following a 3 month
                intership, I started working at Chaidari unit as a Clinical
                Chemist. My main responsibilities were maintenance and
                adjustment of laboratory equipement and daily quality control
                for Biochemical analyzer.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <h3>Education</h3>
        <div className="exp">
        <div className="row">
            <div className="col-lg-4">
              <h5>University of Ioannina</h5>
              <p>Sep 2004 - Sep 2011</p>
            </div>
            <div className="col-lg-8 description">
              <h5>Bachelor - Chemistry</h5>
              <p>
                I speciallized about food chemistry.
                My thesis was on Tetra Pak packaging solutions.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <h5>33rd High School of Athens</h5>
              <p>Sep 2001 - Jun 2003</p>
            </div>
            <div className="col-lg-8 description">
              <h5>Highschool</h5>
              <p>
                I graduated  having choose the Sciences & Health sciences field
                wich included Biology, Chemistry and Mathematics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
