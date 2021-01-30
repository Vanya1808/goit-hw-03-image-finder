import React, { Component } from "react";
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount(){
    window.addEventListener('keydown', this.removeListener)
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.removeListener)
  }

  removeListener= (e) => {
    e.key === 'Escape' && this.props.onClose()
  }

  clickToOverlay = () => {
    this.props.onClose()
  }

  render() {
    return (
      <div className="Overlay" onClick={this.clickToOverlay}>
        <div className="Modal">
          <img src={this.props.url} alt='loading' />
        </div>
      </div>
    );
  }
}

Modal.propTypes  = {
  url: PropTypes.string,
}

Modal.propDefault = {
  url: 'https://cdn.icon-icons.com/icons2/1489/PNG/512/loadingcircles_102612.png'
}

export default Modal;