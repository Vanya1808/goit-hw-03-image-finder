import React, { Component } from "react";
import "./App.css";

import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import Button from "./components/Button";
import Loader from "./components/Loader";

class App extends Component {
  state = {
    info: {
      qwery: "",
      page: 1,
    },
    content: [],

    isOpenLoader: false,
  };

  goToBootm = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  handleGetQwery = (q) => {
    this.setState({ info: { qwery: q, page: 2 } });

    this.changeLoader(true);
    this.callToServer(q, 1)
      .then((data) => {
        this.setState({ content: [...data.hits] });
      })
      .finally(() => {
        this.changeLoader(false);
      });
  };

  callToServer = (q, page) => {
    let key = "18650833-a90d8ca1012121c54ee062bd0";
    let url = `https://pixabay.com/api/?q=${q}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`;

    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        return data;
      });
  };

  handleGetMore = () => {
    const { qwery, page } = this.state.info;
    this.setState((prev) => ({ info: { page: prev.info.page + 1, qwery: prev.info.qwery } }));

    this.changeLoader(true);

    this.callToServer(qwery, page)
      .then((data) => {
        this.setState((prev) => ({ content: [...prev.content, ...data.hits] }));
      })
      .finally(() => {
        this.changeLoader(false);
      });
  };

  changeLoader = (bool) => {
    bool && this.goToBootm();
    this.setState({ isOpenLoader: bool });
  };

  componentDidUpdate(prevProps, prevState) {
    prevState.content !== this.state.content && this.goToBootm();
    return prevState.content !== this.state.content;
  }

  render() {
    return (
      <>
        <Searchbar getQwery={this.handleGetQwery} />
        <ImageGallery picture={this.state.content} />

        {this.state.content.length !== 0 && <Button getMore={this.handleGetMore} />}

        {this.state.isOpenLoader && <Loader />}
      </>
    );
  }
}

export default App;