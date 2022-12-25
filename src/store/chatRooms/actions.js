import { createAction, createPayloadAction } from '../_helpers';

export const setActiveRoom = createPayloadAction('chatRooms.select');

export const resetActiveRoom = createAction('chatRooms.reset');

export const sendMessage = createPayloadAction('chatRooms.sendMessage');
