import React, { Component } from "react";
import "./App.css";
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          name: "abd",
          country: "Jordan",
          Lang: "Arabic",
          skills: "FE",
          payments: "paypla",
        },
        {
          name: "Rabie",
          country: "KSA",
          Lang: "Eng",
          skills: "FE",
          payments: "paypla",
        },
        {
          name: "Moh",
          country: "Jordan",
          Lang: "Arabic",
          skills: "FE",
          payments: "paypla",
        },
      ],
    };
  }

  createNewPost = (post) => {
    const { name, country, Lang, skills, payments } = post;
    const newPost = { name, country, Lang, skills, payments };
    const newArr = [...this.state.posts];
    newArr.push(newPost);
    this.setState({ posts: newArr });
  };
  render() {
    return (
      <div>
        <h1>APP</h1>
        <NewPost addPost={this.createNewPost} />
        <PostList postArr={this.state.posts} />
      </div>
    );
  }
}
