import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog = props => (
  <tr>
    <td>{props.blog.username}</td>
    <td>{props.blog.title}</td>
    <td>{props.blog.content}</td>
    <td>{props.blog.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.blog._id}>edit</Link> | <a href="#" onClick={() => { props.deleteblog(props.blog._id) }}>delete</a>
    </td>
  </tr>
)

export default class AllBlogs extends Component {
  constructor(props) {
    super(props);

    this.deleteblog = this.deleteblog.bind(this)

    this.state = {blogs: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blogs/')
      .then(response => {
        this.setState({ blogs: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteblog(id) {
    axios.delete('http://localhost:5000/blogs/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      blogs: this.state.blogs.filter(el => el._id !== id)
    })
  }

  blogList() {
    return this.state.blogs.map(currentblog => {
      return <Blog blog={currentblog} deleteblog={this.deleteblog} key={currentblog._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged blogs</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Title</th>
              <th>Content</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.blogList() }
          </tbody>
        </table>
      </div>
    )
  }
}
