import React, { Component } from "react";
import Display from "../display/display";
import Edit from "../edit/edit";
import "./main.css";

class Main extends Component {
  render() {
    return (
      <section className="main">
        Main
        <Display />
        <Edit />
      </section>
    );
  }
}

export default Main;
