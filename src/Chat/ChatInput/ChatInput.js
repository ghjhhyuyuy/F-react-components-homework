import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  addContent = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  sendMessage = () => {
    this.props.updateMessage(this.state.message);
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.addContent} value={this.state.message} />
        <button type="button" onClick={this.sendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
