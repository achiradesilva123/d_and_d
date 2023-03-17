import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {

    const user = this.props.data;

    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={user?.image} />
          </div>

          <button className="btnVideoCall" id="videoCallBtn">
            <i className="fa fa-video-camera"/>
          </button>
          <p>Video Call</p>

          <h4>{user?.name}</h4>
          <p>Telepathy only ..</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}
