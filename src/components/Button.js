import React, { Component } from "react";

class Buttton extends Component {
  clickToBtn = () => {
    this.props.getMore();
  };

  render() {
    return (
      <>
        <button className="Button" onClick={this.clickToBtn}>
          Load More
        </button>
      </>
    );
  }
}

export default Buttton;