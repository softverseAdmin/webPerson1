import React, { useState } from "react";
import MenuItem from "./components/header/MenuItem";
import MenuButton from "./components/header/MenuButton";
import Menu from "./components/header/Menu";
import Footer from "./components/footer/Footer";
import TopContent from "./components/top/TopContent"; // Import TopContent
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Faq from "./components/faq/Faq";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    // change here for navigation 
  };

  const styles = {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: "99",
      opacity: 0.9,
      display: "flex",
      alignItems: "center",
      background: "black",
      width: "100%",
      color: "white",
      fontFamily: "Lobster",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100vw", 
      filter: menuOpen ? "blur(2px)" : null,
      transition: "filter 0.5s ease",
    },
  };

  const pathName = window.location.pathname; // Get the path of the URL
  console.log(pathName);
  const menu = [
    "Top",
    "Who Am I?",
    "What I Had Done?",
    "How To Reach Me?",
    "FAQ",
  ];

  const menuItems = menu.map((val, index) => (
    <MenuItem 
    key={index} delay={`${index * 0.1}s`} onClick={handleLinkClick}
    >
      {val}
    </MenuItem>
  ));

  return (
    <div>
      <div style={styles.container}>
        <MenuButton open={menuOpen} onClick={handleMenuClick} color="white" />
      </div>
      <Menu open={menuOpen}>{menuItems}</Menu>
      <div className="MainContent">
        {!pathName || pathName.trim() === "/" || pathName==='/Top' ? <TopContent /> : null}
        {/* Render TopContent */}
        {pathName === "/Who%20Am%20I" && <About />}
        {pathName === "/What%20I%20Had%20Done" && <Projects />}
        {pathName === "/How%20To%20Reach%20Me" && <Contact />}
        {pathName === "/FAQ" && <Faq />}
      </div>

      <div style={styles.body}>
        <Footer name="Menu" />
      </div>
    </div>
  );
}

export default App;