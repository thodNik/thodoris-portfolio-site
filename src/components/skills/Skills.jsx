import React from "react";
import "./skills.css";
import {SiHtml5} from "react-icons/si";
import {IoLogoCss3} from "react-icons/io";
import {BsBootstrapFill} from "react-icons/bs";
import {SiJavascript} from "react-icons/si"
import {SiJquery} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress} from "react-icons/si";
import {FaPercent} from "react-icons/fa";
import {AiFillApi} from "react-icons/ai";
import {SiMongodb} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <hr className="ski-r"/>
        <div className="ski">
          <div className="row">
            <div className="col-md-6 skill">
              <ul>
                <li><SiHtml5 style={{color: "red"}}/> HTML(5)</li>
                <li><IoLogoCss3 style={{color: "blue"}}/> CSS(3)</li>
                <li><BsBootstrapFill style={{color: "purple"}}/> Bootstrap</li>
                <li><SiJavascript style={{color: "gold" ,backgroundColor: "black"}}/> Javascript</li>
                <li><SiJquery style={{color: "darkblue"}}/> JQuery</li>
                <li><FaReact style={{color: "darkturquoise"}}/> React.Js</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li><FaNodeJs style={{color: "darkgreen"}}/> Node.Js</li>
                <li><SiExpress style={{color: "darkgrey"}}/> Express.Js</li>
                <li><FaPercent style={{color: "darkred"}}/> EJS</li>
                <li><AiFillApi style={{color: "royalblue"}}/> APIs</li>
                <li><SiMongodb style={{color: "green"}}/> MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
