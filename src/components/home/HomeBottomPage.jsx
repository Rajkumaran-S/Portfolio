import React from "react";
import avatar from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FiDownloadCloud } from "react-icons/fi";
import { Button } from "@mui/material";

const resumeURL = "https://drive.google.com/file/d/1ahsxf-lCTFqqF5amadW83EXtsNSWt8G5/view?usp=sharing";

const HomeBottomPage = () => {

  return (
    <div className="homeBottom" >
      <h1 style={{ fontSize: "2.6rem", marginBottom: "3.5rem" }}>
        Some Things <span style={{ color: "#32CD30" }}>About Me</span>
      </h1>
      <div className="introduction">
        <div className="intro-text">
          <p>
            I am RajKumaran S, currently completed my Course at GUVI <span style={{ color: "#32CD30" }}>MERN Stack Development.</span>
          </p>
          {/* <br /> */}
          <p>
          I enjoy taking complex problems and turning them into simple and beautiful interface designs. 
          <br />
          </p>
          <p>
          I also love the logic and structure of coding and always strive to write elegant and efficient.
          </p>
          <br />
          <p>
            Checkout my <span style={{ color: "#32CD30" }}>resume</span> for more about me.{" "}
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="intro-image">
          <Tilt>
            <img
              class="rounded w-36 h-36"
              src={avatar}
              alt="Extra large avatar"
            ></img>
          </Tilt>
        </div>
      </div>
      <div className="downloadPdf">
        <a
          href={resumeURL}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="contained"
            color="success"
            endIcon={<FiDownloadCloud />}
            style={{ marginBottom: "50px" }}
          >
            Resume
          </Button>
          <br />
        </a>
      </div>
    </div>
  );
};

export default HomeBottomPage;
