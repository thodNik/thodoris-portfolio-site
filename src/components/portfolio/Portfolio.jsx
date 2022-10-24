import React from 'react'
import "./portfolio.css";
import pic from "../../images/icon-white.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h2>Projects</h2>
        <hr/>
        <div>
        <figure className="project">
          <img src={pic} alt="pharmacy"/>
          <figcaption>
          <a href="https://pantelis-nikolaidis-pharmacy.netlify.app/" >Pantelis Nikolaidis <br/>Pharmacy</a>
          </figcaption>
          
        </figure>

        </div>
      </div>
    </section>
  )
}

export default Portfolio