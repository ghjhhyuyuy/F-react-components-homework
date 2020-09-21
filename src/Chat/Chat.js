import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';
import { ROLE } from '../constants';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  updateMessage = (text) => {
    const message = {};
    message.role = ROLE.CUSTOMER;
    message.text = text;
    let messages = this.state.messages.concat(message);
    const defaultMessage = answersData.find((answer) => answer.tags.includes(text));
    if (defaultMessage !== undefined) {
      messages = messages.concat(defaultMessage);
    }
    setTimeout(() => {
      this.setState({
        messages,
      });
    }, 1000);
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput updateMessage={this.updateMessage} />
      </main>
    );
  }
}

export default Chat;
