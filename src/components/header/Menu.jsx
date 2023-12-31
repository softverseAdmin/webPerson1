import React from 'react'

export default function Menu(props) {
  const styles = {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      height: props.open ? "100%" : 0,
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      background: "black",
      opacity: 0.85,
      color: "#fff",
      transition: "height 0.3s ease",
      zIndex: 2,
    },
    menuList: {
      paddingTop: "3rem",
    },
  };

  return (
    <div style={styles.container}>
      {props.open ? <div style={styles.menuList}>{props.children}</div> : null}
    </div>
  );
}
