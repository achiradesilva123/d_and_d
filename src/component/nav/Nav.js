import React, { Component } from "react";
import "./nav.css";
import logo from "./../../assest/images/logo.png";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__blocks">
          <img src={logo}/>
        </div>
        <div className="nav__blocks"/>
        <div className="nav__blocks"/>
      </div>
    );
  }
}
