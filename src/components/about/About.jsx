import React from 'react';
import bgAbout from "../../assets/videos/bgAbout.png";
import {
  SiFacebook, 
  SiTwitter, 
  SiLinkedin, 
  SiInstagram, 
  SiPinterest, 
  SiMysql,
  SiRubyonrails,
  SiPostgresql,
  SiTypescript,
  SiAmazonaws,
  SiPython,
  SiPhp,
  SiJavascript
 } from "react-icons/si";
import Typewriter from "typewriter-effect";
import './About'; // Import your CSS file
const divStyle = {
  height: "100%",
  backgroundImage: `url(${bgAbout})`,
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat', // Set background to not repeat
   // Set the height to auto
};
export default function About() {
  return (
    <div
      className="container-fluid d-flex align-items-center"
      style={{
        minHeight: "95vh",
        height: "auto",
      }}
    >
      <div className="container d-flex justify-content-center align-items-center my-4 py-4">
        <div
          style={divStyle}
          className="justify-content-center align-items-center w-100"
        >
          <div className="title my-2">
            <Typewriter
              className="fs-4"
              style={{
                fontFamily: "ariel",
                fontWeight: "400",
              }}
              options={{
                strings: ["Welcome To My World."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="text-white">
            <h2
              style={{
                fontFamily: "sans-serif",
                fontWeight: "800",
              }}
              className="fs-1 my-3"
            >
              Hi, I'm <span style={{ color: "#b34744" }}>Rabin Adhikari </span>
              <br />A Professional Coder.
            </h2>
          </div>
          <div className="des">
            <p
              style={{
                fontFamily: "ariel",
                fontWeight: "400",
              }}
              className="my-2 fs-5"
            >
              I'm a versatile full-stack developer based in Japan, currently
              working for a Japanese firm. <br />
              I'm passionate about crafting efficient digital solutions, with
              extensive experience in
              <br />
              software development and system engineering. Thriving on diverse
              projects as a freelancer,
              <br />
              my commitment to quality and adaptability has earned industry
              trust. I'm eager to collaborate
              <br />
              on innovative coding to shape the future together. Let's connect
              and create something extraordinary.
              <br />
            </p>
          </div>
          <div className="d-flex gap-5">
            <div className="d-flex flex-column gap-4">
              <h3 className="text-left w-100 my-3"> FIND ME </h3>
              <div className="d-flex gap-5">
                <a
                  href="https://www.facebook.com/rabin.adhikari.3532"
                  className="text-white"
                >
                  <SiFacebook size={40} />
                </a>
                <a
                  href="https://twitter.com/shribinstore"
                  className="text-white"
                >
                  <SiTwitter size={40} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rabin-adhikari-52573320b/"
                  className="text-white"
                >
                  <SiLinkedin size={40} />
                </a>
              </div>
              <div className="d-flex gap-5">
                <a
                  href="https://www.linkedin.com/in/rabin-adhikari-52573320b/"
                  className="text-white"
                >
                  <SiInstagram size={40} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rabin-adhikari-52573320b/"
                  className="text-white"
                >
                  <SiPinterest size={40} />
                </a>
              </div>
            </div>
            <div className="d-flex flex-column gap-4 px-3">
              <h3 className="text-left w-100 my-3"> BEST SKILLS ON </h3>
              <div className="d-flex gap-5">
                <SiPhp size={40} /> <SiPython size={40} />
                <SiJavascript size={40} /> <SiMysql size={40} /> <br />
              </div>
              <div className="d-flex gap-5">
                <SiRubyonrails size={40} />
                <SiPostgresql size={40} />
                <SiTypescript size={40} />
                <SiAmazonaws size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
