export const mockChatRoom = () => ({
  id: Math.random(),
  title: Math.random(),
  messages: [
    mockChatMessage(),
    mockChatMessage(),
    mockChatMessage(),
  ],
});

export const mockChatMessage = (override) => ({
  id: Math.random(),
  fromUserId: Math.random(),
  message: Math.random(),
  ...override,
});
