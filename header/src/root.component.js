import React from "react";
import App from "./App";
import "./style.css";

export default function Root(props) {
  return (
    <div className="custom_header">
      <section>
        <div>{props.name} is mounted!</div>
        <App />
      </section>
    </div>
  );
}
