import React, { Component } from 'react';
import SearchBar from './searchBar/searchBar';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
    };
  }

  fetchSongs = () => {
    console.log('klicked!');
  };

  render() {
    const { initialMessage } = this.state;
    return (
      <div>
        <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
        {initialMessage}
      </div>
    );
  }
}
