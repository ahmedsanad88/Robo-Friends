// The use of this component is to add scrolling component to any scrollable area in our app.

import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "auto",
        padding: "0.5em",
        height: "600px",
        boxShadow: "inset 0 0 25px rgba(0,0,0,0.3)",
        marginTop: "0.5em",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
