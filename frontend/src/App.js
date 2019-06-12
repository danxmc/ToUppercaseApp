import React, { Component } from 'react';
import axios from 'axios';

import AppNavbar from './components/AppNavbar';
import StringForm from './components/StringForm';
import NewString from './components/NewString';

import './App.css';

class App extends Component {

  state = {
    newString: '',
    inputString: ''
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Post to the backend
    axios
      .post('/api/strings', this.state)
      .then(res => {
        this.setState({
          newString: res.data.resultString
        });
      })
      .catch(err => {
          console.error(err);
          this.setState({
            newString: 'error!'
          });
      });

    // Reset state
    this.setState({
        inputString: ''
    });
  }
  
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <StringForm 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputString={this.state.inputString}
        />
        <NewString 
          resultString={this.state.newString}
        />
      </div>
    );
  }
}

export default App;
