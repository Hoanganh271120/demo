import React, { Component } from 'react';
import axios from "axios";
import './App.css';


import UserForm from "./components/UserForm";

class App extends Component {
  state = {
    repos: null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`http://localhost:8888/user/`)
      .then((res) => {
        const repos = res.data;
        this.setState({ repos });
        // return res
      })
    } else return;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
        <UserForm getUser={this.getUser} />
        { this.state.repos ? <p>Number of repos: { this.state.repos }</p> : <p>Please enter a username.</p> }
      </div>
    );
  }
};

export default App;
