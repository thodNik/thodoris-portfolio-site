import React from "react";
import "./contact.css";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="contact-header">Contact</h2>
        <hr />
        <div className="row cont">
          <div className="col-lg-6 linkd">
            <a className="a-cont" href="https://linkedin.com/in/nikolaidisthod"><BsLinkedin size={28}style={{ className:"react-icon", color: "#d1512d", marginRight: "10px"}} /> linkedin.com/in/nikolaidisthod</a>
          </div>
          <div className="col-lg-6 gmail">
            <a className="a-cont" href="mailto:thodorisnik@gmail.com"> <AiOutlineMail size={28} style={{className:"react-icon", color: "#d1512d", marginRight: "10px"}}/> thodorisnik@gmail.com</a>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Contact;
