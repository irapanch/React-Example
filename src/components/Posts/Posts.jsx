import React, { Component } from "react";
import { Header } from "./Header";
import { PostList } from "./PostList";
import { fetchPosts } from "../../services/postApi";

export default class Posts extends Component {
  state = {
    posts: [],
    limit: null,
  };
  async componentDidMount() {
    try {
      const { posts, limit } = await fetchPosts({ limit: 3 }); // деструктуризація постів з data
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
        <section>
          <PostList posts={posts} />
        </section>
      </div>
    );
  }
}
