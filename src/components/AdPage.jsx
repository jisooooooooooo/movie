import React, { Component } from "react";
import Ad from "./Ad";
import "./AdPage.css";

class AdPage extends Component {
  constructor() {
    super();
    this.state = {
      showAd: true,
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd,
    }));
  };

  render() {
    return (
      <div className="ad-page">
        {this.state.showAd && <Ad />}

        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? "광고 안 보기" : "광고 보이기"}
        </button>
      </div>
    );
    
  }
}

export default AdPage;
