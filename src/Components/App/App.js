import React, { Component } from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Satan',
          artist: 'Who cares',
          album: 'Not a real album',
          id: 666, 
        },
        {
          name: 'Piss',
          artist: 'Who cares tho?',
          album: 'Not a real album either',
          id: 999, 
        },
        {
          name: 'Sausages',
          artist: 'Sausages are yummy',
          album: 'Not a real album, sadly',
          id: 333, 
        },
      ],
      playlistName: 'Burning churches phynthyme',
      playlistTracks: [
        {
          name: 'Sandwiches',
          artist: 'Sandwiches are yummy',
          album: 'Bread & Butter',
          id: 1, 
        },
        {
          name: 'Bangers & Mash',
          artist: 'Ketchup Party',
          album: 'DINNER',
          id: 2, 
        },
        {
          name: 'Pandemic Blues',
          artist: 'Corona & the Virus',
          album: 'Can I leave my house yet?',
          id: 3, 
        },
      ]
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track)
    this.setState({playlistTracks: tracks})
    // this.setState({playlistTracks: [...tracks, track]})
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
