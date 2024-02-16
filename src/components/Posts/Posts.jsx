import React, { Component } from "react";
import { Header } from "./Header";
import { PostList } from "./PostList";
import { fetchPosts } from "../../services/postApi";
import { WrapperPosts } from "./Posts.styled";
import { Button } from "./Button";

export default class Posts extends Component {
  state = {
    posts: [],
    limit: 2,
    skip: 0,
  };
  async componentDidMount() {
    try {
      const { posts, limit } = await fetchPosts({
        limit: this.state.limit,
        skip: this.state.skip,
      }); // деструктуризація постів з data
      this.setState((prev) => ({ posts: [...prev.posts, ...posts], limit }));
    } catch (error) {
      alert(error.message);
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    const { skip } = this.state;
    if (prevState.skip !== skip) {
      try {
        const { posts, limit } = await fetchPosts({
          limit: this.state.limit,
          skip: this.state.skip,
        }); // деструктуризація постів з data
        this.setState((prev) => ({ posts: [...prev.posts, ...posts], limit }));
      } catch (error) {
        alert(error.message);
      }
    }
  }
  handleLoadMore = () => {
    this.setState((prev) => ({ skip: prev.skip + prev.limit }));
  };
  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <WrapperPosts>
          <PostList posts={posts} />
          <Button onClick={() => alert("Hello")} className="big" $bg="teal">
            Example
          </Button>
          <Button onClick={this.handleLoadMore} $bg="gray">
            Load more
          </Button>
        </WrapperPosts>
      </div>
    );
  }
}
