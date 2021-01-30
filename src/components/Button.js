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

Button.PropTypes = {
  loadMore: PropTypes.func,
};

export default Buttton;