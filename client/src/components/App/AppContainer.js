import React, { Component } from 'react';
import axios from 'axios';
import App from './App';

class AppContainer extends Component {
  state = {
    _this: '', // use "_this" b/c "this" is a reserved word
    that: '',
    error: false
  };

  componentDidMount() {
    this.fetchPair();
  }

  fetchPair = async () => {
    try {
      const { data } = await axios.get('/api/pair');
      this.setState({ _this: data.this, that: data.that });
    } catch (err) {
      console.error(err);
      this.setState({ error: 'Something went wrong. Please try again.' });
    }
  };

  render() {
    return <App {...this.state} fetchPair={this.fetchPair} />;
  }
}

export default AppContainer;
