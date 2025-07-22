import React, { Component } from 'react';
import Post from './post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => {
        console.error("Error fetching posts:", error);
        this.setState({ hasError: true });
      });
  }

  componentDidCatch(error, info) {
    alert("Something went wrong: " + error.toString());
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Oops! Something went wrong while loading posts.</h2>;
    }

    return (
      <div>
        <h2>All Blog Posts</h2>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
