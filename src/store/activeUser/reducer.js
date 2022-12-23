const initialState = {
  userName: "John Smith",
  avatar: ""
};

export function activeUserReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ACTIVE_USER":
      return state;

    default:
      return state;
  }
}
