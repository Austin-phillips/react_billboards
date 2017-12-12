import React, { Component } from 'react';
import axios from 'axios';

class SongList extends Component {
  state = {songs: [{ title: [], artist: [] }]};

  componentDidMount() {
    axios.get(`/api/billboards/:billboard_id/songs`)
    .then(res => {
      this.setState({songs: res.data})
    }).catch(res => {
      console.log(res.data)
    })
  }

  displayList = () => {
    return this.state.songs.map( song => {
      return (
        <li>
          Song title: {song.title} By: {song.artist}
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <ol>
          {this.displayList()}
        </ol>
      </div>
    )
  }
}

export default SongList;