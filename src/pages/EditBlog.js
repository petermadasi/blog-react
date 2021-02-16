import React, { Component } from 'react';
import axios from 'axios';

import {Form, Button, Col, Container, Row } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";


export default class EditBlog extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      title: '',
      content: '',
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blogs/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          title: response.data.title,
          content: response.data.content,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value
    })
  }

  
  onSubmit(e) {
    e.preventDefault();

    const blog = {
      username: this.state.username,
      title: this.state.title,
      content: this.state.content,
      date: this.state.date
    }

    console.log(blog);

    axios.post('http://localhost:5000/blogs/update/' + this.props.match.params.id, blog)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
        <Container>
                <Row>
                <Col sm={4}>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label className="test-left">User Name</Form.Label>
                                <Form.Control as="select" value={this.state.username} onChange={this.onChangeUsername}>
                                {
                                this.state.users.map(function(user) {
                                return <option key={user} value={user}>
                                        {user}
                                    </option>;
                                })
                            }
                        </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formBasicText">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text"
                                placeholder="Enter a title for your blog"
                                required
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}  />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3} 
                                className="form-control"
                                value={this.state.content}
                                onChange={this.onChangeContent}
                            />
                        </Form.Group>
                    
                    <Button variant="primary" type="submit">Submit</Button>
                    </Form> 
                </Col>

                <Col></Col>

                </Row>
            </Container>
    )
  }
}