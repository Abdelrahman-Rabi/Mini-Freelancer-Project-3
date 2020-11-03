import React, { Component } from "react";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      country: "",
      Lang: "",
      skills: "",
      payments: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleCountryChange = (e) => {
    this.setState({ country: e.target.value });
  };
  handleLangChange = (e) => {
    this.setState({ Lang: e.target.value });
  };

  handleSkillsChange = (e) => {
    this.setState({ skills: e.target.value });
  };
  handlePaymentsChange = (e) => {
    this.setState({ payments: e.target.value });
  };

  handleSubmit = (e) => {
    console.log(this.state.name);
    e.preventDefault();
    this.props.addPost(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="submit-form">
        <div>
          <label>Freelancer Name : </label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          ></input>
        </div>
        <br></br>
        <div>
          <label>Country : </label>
          <input
            type="text"
            value={this.state.country}
            onChange={this.handleCountryChange}
          ></input>
        </div>
        <br></br>
        <div>
          <label>Language : </label>
          <input
            type="text"
            value={this.state.Lang}
            onChange={this.handleLangChange}
          ></input>
        </div>
        <br></br>
        <div>
          <label>Skills : </label>
          <input
            type="text"
            value={this.state.skills}
            onChange={this.handleSkillsChange}
          ></input>
        </div>
        <br></br>
        <div>
          <label>Payments : </label>
          <input
            type="text"
            value={this.state.payments}
            onChange={this.handlePaymentsChange}
          ></input>
        </div>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewPost;
