import React, { Component } from "react";
import { Header } from "./Header";
import { PostList } from "./PostList";
import { fetchPosts } from "../../services/postApi";
import { WrapperPosts } from "./Posts.styled";
import { Button } from "./Button";

export default class Posts extends Component {
  state = {
    posts: [],
    limit: null,
  };
  async componentDidMount() {
    try {
      const { posts, limit } = await fetchPosts({ limit: 10 }); // деструктуризація постів з data
      this.setState({ posts, limit });
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <WrapperPosts>
          <PostList posts={posts} />
          <Button>Load more</Button>
        </WrapperPosts>
      </div>
    );
  }
}
