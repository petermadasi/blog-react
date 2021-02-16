import React, { Component } from 'react';
import axios from 'axios';

export default class AddUser extends Component {
  constructor(props) {
    // importing props from Component class from react
    super(props);

    // Declaring the variables and their intial state
    this.state = {
        username: ''
    }

    //Binding the defined methods
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }// constructor ends


  
  //Method when the existing username is changed in the state
  onChangeUsername(e) {
    this.setState({
        //e.target.value is the value property of some DOM element, 
        //in this case that means the text entered in the search input.
        //target is whole DOM
      username: e.target.value
      
    })
    console.log("this is from onchuser", this.state.username);
  }



  onSubmit(e) {
      //this is tp prevent the default submit button functions like refreshing the bowser
      //if we dont do it can ignore the actual code that to write for onSubmit.
    e.preventDefault();

    //intialize a variable user
    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
    
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            {/*Here, when there is a change in TextBox it triggers onChangeUsername
            which will setState with the value entered*/}
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}