import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {chatAction} from '../../actions/chatActions';
import ChatArea from './ChatArea';
import * as firebase from 'firebase/firebase-browser';
import toastr from "toastr";

export class ChatPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        message: ""
      },
      liveMessage: []
    };

    this.updateMessageChange = this.updateMessageChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    const live = firebase
      .database()
      .ref('message')
      .on('value', (snapshot) => {
        let datas = snapshot.val();
        let newDatas = [];
        for (let data in datas) {
          if (newDatas.length > 10) {
            newDatas.splice(0, 1);
          }
          newDatas.push(
            datas[data]
          );
        }
        this.setState({liveMessage: newDatas});
      });
  }

  updateMessageChange(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  sendMessage(event) {
    this.props.actions.chatAction(this.state.user.message, this.props.currentUserId)
      .then(message => toastr.success('Message send'))
      .catch(error => {
        toastr.error(error.message);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Chat Room</h1>
        <ChatArea liveMessage={this.state.liveMessage} currentUser={this.props.currentUserId} onChange={this.updateMessageChange} user={this.state.user} onClick={this.sendMessage}/>
      </div>
    );
  }
}

ChatPage.propTypes = {
  actions: PropTypes.object.isRequired
};

ChatPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    currentUserId: state.auth.currentUserUID
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({chatAction}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);

