import React from 'react';
import PropTypes from "prop-types";

export default function Footer(props) {
  const styles = {
    footer: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      marginTop: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: props.color,
    },
    line: {
      height: "1px",
      width: "90%",
      background: props.color,
    },
    text: {
      padding: "0.5rem",
    },
  };

  return (
    <div style={styles.footer}>
      <div style={styles.line}></div>
      <div style={styles.text}>
        {props.title} Powered By Softverse &copy; {new Date().getFullYear()};
      </div>
    </div>
  );
}

Footer.defaultProps = {
  color: "#fff",
  title: "Rabin Adhikari -",
};


Footer.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
};
