import React, { Component } from "react";

class PostItem extends Component {
  getStlye = () => {
    return {
      background: "#f4f4f4",
    };
  };

  render() {
    const { name, country, Lang, skills, payments } = this.props.onePost;

    return (
      <div style={this.getStlye()}>
        <p>
          Freelancer : {name} &nbsp;&nbsp;|| &nbsp;&nbsp; Country : {country}{" "}
          &nbsp;&nbsp;|| &nbsp;&nbsp; Lang : {Lang}
        </p>
        <p>
          Skills : {skills} &nbsp;&nbsp;|| &nbsp;&nbsp; Payment &nbsp;&nbsp;||
          &nbsp;&nbsp; {payments}
        </p>
      </div>
    );
  }
}

export default PostItem;
