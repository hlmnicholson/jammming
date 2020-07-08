import React, { Component } from 'react';
import './Track.css';
// import Playlist from '../Playlist/Playlist';


class Track extends Component {
  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-action">-</button>
    } else {
      return <button className="Track-action" onClick={this.addTrack()}>+</button>
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p>{this.props.artist} | {this.props.album}</p>
        </div>
        {this.renderAction()}
      </div>
    )
  }
}

export default Track