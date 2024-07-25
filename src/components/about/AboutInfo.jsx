import React from "react";
import TechStack from "./TechStack";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import codeImage from "../../assets/coder.svg";
import GitHubCalendar from "react-github-calendar";

const AboutInfo = () => {
  return (
    <div className="about">
      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        <span>Education 📖</span>
      </h1>
      <div className="about-parent">
        <div className="about-text">
          {/* <p style={{ textAlign: "justify" }}>
            Hi people, I am{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              Rajkumaran S
            </span>{" "}
            from Tamil Nadu,India. I did my MBA-HR (Pondicherry University)
            from{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
            St. Joseph’s College, Trichy
            </span>{" "}
            and currently completed MERN Stack course at{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              GUVI 
            </span>
            .
          </p> */}
          <p style={{ textAlign: "justify" }}>
            <ul>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline", color: "#32CD30" }} />{" "}
                MBA-HR (Pondicherry University) from St. Joseph’s College, Trichy | <br /> 2019-2021
              </li>
              <br />
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline", color: "#32CD30" }} />{" "}
                Bachelor’s degree in Computer Science from Loyola College, Namakkal | <br /> 2015-2018
              </li>
              <br />
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline", color: "#32CD30" }} />{" "}
                HSC from Little Flower Higher Secondary School, Salem | 2012-2014
              </li>
              <br />
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline", color: "#32CD30" }} />{" "}
                SSLC from Little Flower Higher Secondary School, Salem | 2011-2012
              </li>
            </ul>
          </p>
        </div>
        <img
          className="rounded about-image"
          src={codeImage}
          alt="Extra large avatar"
        ></img>
      </div>
      <TechStack />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AboutInfo;
