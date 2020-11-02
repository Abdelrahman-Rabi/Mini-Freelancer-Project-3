import React, { Component } from "react";

class PostItem extends Component {
  getStlye = () => {
    return {
      background: "#f4f4f4",
    };
  };

  render() {
    const { name, country, Lang, skills, payment } = this.props.onePost;

    return (
      <div style={this.getStlye()}>
        <p>
          Freelancer : {name} , Country : {country} , Lang : {Lang}
        </p>
        <p>
          Skills : {skills} , payment : {payment}
        </p>
      </div>
    );
  }
}

export default PostItem;
