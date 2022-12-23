import { connect } from "react-redux";

import { selectChatList } from "../../store/chatRooms";

function ChatRoomButton({ room }) {
  return (
    <div className="chat-room-button">
      <div className="chat-room-name">{room.title}</div>
      <div className="chat-room-last-text"></div>
    </div>
  );
}

function ChatView({ chatRooms }) {
  return (
    <div className="wrapper">
      <div className="chat-list">
        {chatRooms.map((room, index) => (
          <ChatRoomButton key={index} room={room} />
        ))}
      </div>

      <div className="active-chat"></div>
    </div>
  );
}

const mapState = (state) => ({
  chatRooms: selectChatList(state)
});

const mapDispatch = (dispatch) => ({});

export const Chat = connect(mapState, mapDispatch)(ChatView);
