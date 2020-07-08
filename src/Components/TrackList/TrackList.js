import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';


class TrackList extends Component {
  render() {
    return (
      <div class="TrackList">
        {
          this.props.tracks.map(track => {
            return <Track key={track.id}
              name={track.name}
              artist={track.artist}
              album={track.album}
              onAdd={this.props.onAdd}
            />
          })
        }
      </div>
    )
  }
}

export default TrackList