import { connect } from "react-redux";

import { selectChatRoomsActiveRoom, selectChatRoomsList, setActiveRoom, sendMessage } from '../../store/chatRooms';
import { useState } from 'react';

function ChatRoomButton({ room, onSelect }) {
  return (
    <div className="chat-room-button" onClick={onSelect}>
      <div className="chat-room-name">{room.title}</div>
      <div className="chat-room-last-text"></div>
    </div>
  );
}

function ChatMessage({ message }) {
  return (
    <div className="chat-message">
      <div className="message-text">
        {message.message}
      </div>
    </div>
  )
}

function ChatView({ chatRooms, selectChatRoom, activeRoom, sendMessage }) {
  const [messageText, setMessageText] = useState('');

  const sendMessageFn = () => {
    sendMessage(messageText);
    setMessageText('');
  };

  return (
    <div className="wrapper">
      <div className="chat-list">
        {chatRooms.map((room, index) => (
          <ChatRoomButton key={index} room={room} onSelect={() => selectChatRoom(room.id)} />
        ))}
      </div>

      {activeRoom && (
        <div className="active-chat">
          {activeRoom.messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}

          <div>
            <input type="text" value={messageText} onChange={e => setMessageText(e.target.value)} />
            <button onClick={sendMessageFn}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

const mapState = (state) => ({
  chatRooms: selectChatRoomsList(state),
  activeRoom: selectChatRoomsActiveRoom(state),
});

const mapDispatch = (dispatch) => ({
  selectChatRoom: (roomId) => dispatch(setActiveRoom(roomId)),
  sendMessage: (text) => dispatch(sendMessage(text)),
});

export const Chat = connect(mapState, mapDispatch)(ChatView);
