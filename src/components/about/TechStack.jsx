import React, { useState,useEffect } from "react";
import { Card } from "semantic-ui-react";
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiRedux } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiNetlify } from "react-icons/si";

const TechStack = () => {
  const [width,setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  },[]);

  return (
    <div className="techstack">
      <h1>
        My{" "}
        <span
          style={{
            color: "#32CD30",
            marginTop: "3rem",
            fontFamily: "Fira Code",
            fontWeight: "bold",
          }}
        >
          SkillSet
        </span>
      </h1>
      <h3>
      <span
          style={{
            color: "white",
            marginTop: "3rem",
            fontFamily: "Fira Code",
            fontWeight: "normal",
            textAlign:"justify"
          }}
        >
          As a fresher, the skills below mentioned are core for me in Frontend, <br />Which is been learned and practiced well and upscaling the knowledge <br /> in Frontend Development. The skills in Backend are just for learning <br /> purpose And others skill are known well.
        </span>
      </h3>
      <div className="techstack-row">
        <Card.Group itemsPerRow={width > 768 ? 5 : 2}>
          <Card raised className="item">
            {" "}
            <DiJavascript1
              style={{ width: "100%", height: "auto", color: "#FFC300" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <DiReact
              style={{ width: "100%", height: "auto", color: "#61DBFB" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <SiRedux
              style={{ width: "100%", height: "auto", color: "#913DFF" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <FaHtml5
              style={{ width: "100%", height: "auto", color: "#EBDB49" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <FaCss3Alt
              style={{ width: "100%", height: "auto", color: "#3ED2FF" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <BsFillBootstrapFill
              style={{ width: "100%", height: "auto", color: "#913DFF" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <DiNodejs
              style={{ width: "100%", height: "auto", color: "green" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <DiMongodb
              style={{ width: "100%", height: "auto", color: "green" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <SiMysql
              style={{ width: "100%", height: "auto", color: "#00758f" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <SiExpress
              style={{ width: "100%", height: "auto", color: "#070706" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <SiGithub
              style={{ width: "100%", height: "auto", color: "#070706" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <SiNetlify
              style={{ width: "100%", height: "auto", color: "#00758f" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <TbBrandVscode
              style={{ width: "100%", height: "auto", color: "#3D7EFF" }}
            />{" "}
          </Card>
        </Card.Group>
      </div>
    </div>
  );
};

export default TechStack;
