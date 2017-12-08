import React, { Component } from 'react';
import axios from 'axios';
import SongForm from './Components/SongForm';
import SongList from './Components/SongList';
import { Container, Header } from 'semantic-ui-react';


class App extends Component {
  state = {title: []}

  componentDidMount() {
    axios.get(`/api/billboards/:billboard_id/songs`)
      .then(res => this.setState({ title: res.data }))
  }


  render() {
    return (
      <Container>
        <Header size='huge' textAlign='center'>Music Billboard React</Header>
        <SongForm />
        <SongList
        title={this.state.title}
         />
      </Container>
    );
  }
}

export default App;
