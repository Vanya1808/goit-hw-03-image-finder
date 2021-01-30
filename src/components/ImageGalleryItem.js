import React, { Component } from "react";
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  openModal = () => {
    this.props.openModal(this.props.largeImageURL)
  }

  render() {
    const { webformatURL, id } = this.props;
    return (
      <li className="ImageGalleryItem" id={id}>
        <img src={webformatURL} alt="" className="ImageGalleryItem-image" onClick={this.openModal}/>
      </li>
    );
  }
}

ImageGalleryItem.propTypes  = {
  webformatURL: PropTypes.string,
  id: PropTypes.number,
}

ImageGalleryItem.propDefault = {
  webformatURL: 'https://cdn.icon-icons.com/icons2/1489/PNG/512/loadingcircles_102612.png'
}

export default ImageGalleryItem;