import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  render() {
    const post1 = this.props.postArr.map((post, i) => (
      <PostItem onePost={post} key={i} delPost={this.props.delPost} />
    ));
    return (
      <div>
        <h1>Post List</h1>
        {post1}
      </div>
    );
  }
}

export default PostList;
