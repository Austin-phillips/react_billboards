import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class SongForm extends React.Component {
  state = { billboardId: 1, title: '', artist: ''};

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ title: '', artist: ''})
    axios.post(`/api/billboards/${this.state.billboardId}/songs`, {...this.state})
      .then(res => {
        this.setState({title: '', artist: ''});
      }).catch(res => {
        console.log(res.data)
      })
  }

  render() {
    const {title, artist} = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Song Title</label>
          <input
            value={title}
            name='title'
            onChange={this.handleChange}
            placeholder='Song Title'
            />
        </Form.Field>
        <Form.Field>
          <label>Artist</label>
          <input 
            value={artist}
            name='artist'
            onChange={this.handleChange}
            placeholder='Artist'
           />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default SongForm;