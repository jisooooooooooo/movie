
import React, { Component } from "react";
import Ad from "../components/Ad";

class Home extends Component {
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
      <div className="home">
        {this.state.showAd && <Ad />}

        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? "광고 안 보기" : "광고 보이기"}
        </button>
      </div>
    );
  }
}

export default Home;
