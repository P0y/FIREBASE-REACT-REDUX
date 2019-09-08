import React from 'react';
import Message from '../common/Message.js';
import TextInput from "../common/TextInput";

const ChatArea = ({liveMessage, currentUser, onChange, user, onClick}) => {
  return (
    <form>
      <Message
        liveMessage={liveMessage}
        currentUser={currentUser}
      />
      <TextInput
        name="message"
        label="Message"
        onChange={onChange}
        value={user.message}
      />
      <button onClick={onClick} type="button" className="btn btn-primary">Send</button>
    </form>
  );
};

ChatArea.propTypes = {
  liveMessage: React.PropTypes.array.isRequired,
  user: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default ChatArea;
