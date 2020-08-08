import React, {Component} from 'react';

class AddPlayerForm extends Component {

  state = {
    value: ''
  };

  handleValueChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    console.log(this.state.value);
    return (
      <form>
        <input 
          type="text" 
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Who's joining?"
        />
        <input
          type="submit"
          value="Add Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;