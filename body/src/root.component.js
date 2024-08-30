import React from "react";
import './style.css';

export const Root = (props) => {
  return (
  <section className="container">
    <div className="body">Body da Aplicação {props.name}</div>
  </section>);
};

export default Root;
