import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    qwery: "",
  };

  handleChange = (e) => {
    this.setState({ qwery: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.state.qwery !== '' &&
    this.props.getQwery(this.state.qwery)
    this.claerForm()
  };

  claerForm = () => {
    this.setState({
      qwery: "",
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.qwery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;