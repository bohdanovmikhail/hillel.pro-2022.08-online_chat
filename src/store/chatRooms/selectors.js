export const selectChatRooms = (state) => state.chatRooms;

export const selectChatRoomsList = (state) => selectChatRooms(state).list;

export const selectChatRoomsActiveRoom = (state) => {
  const rooms = selectChatRooms(state);

  const activeRoomId = rooms.activeRoom;
  return rooms.list.find(room => room.id === activeRoomId);
};
