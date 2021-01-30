import React, { Component } from "react";
import PropTypes from 'prop-types';

class Loader extends Component {
  render() {
    return (
      <>
        <svg
          className='Loader'
          width="80"
          height="80"
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#00BFFF"
          aria-label="audio-loading"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".4" cx="10" cy="10" r="10"></circle>
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 10 10"
                  to="150 10 10"
                  dur="1s"
                  repeatCount="indefinite"
                ></animateTransform>
              </path>
            </g>
          </g>
        </svg>
      </>
    );
  }
}

Loader.propTypes  = {
  url: PropTypes.string,
}

export default Loader;