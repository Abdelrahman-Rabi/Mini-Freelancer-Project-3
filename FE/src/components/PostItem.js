import React, { Component } from "react";

class PostItem extends Component {
  getStlye = () => {
    return {
      background: "#f4f4f4",
    };
  };

  render() {
    const { id, name, country, Lang, skills, payments } = this.props.onePost;
    return (
      <div style={this.getStlye()}>
        <p>
          Freelancer : {name} &nbsp;&nbsp;|| &nbsp;&nbsp; Country : {country}{" "}
          &nbsp;&nbsp;|| &nbsp;&nbsp; Lang : {Lang}
        </p>
        <p>
          Skills : {skills} &nbsp;&nbsp;|| &nbsp;&nbsp; Payment &nbsp;&nbsp;||
          &nbsp;&nbsp; {payments}
          <button onClick={this.props.delPost.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  boarderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
export default PostItem;
