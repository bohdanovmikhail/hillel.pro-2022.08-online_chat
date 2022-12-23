import * as actions from "./actions";

export function todoListReducer(state = [], action) {
  switch (action.type) {
    case actions.todoListAdd.TYPE:
      return [
        ...state,
        {
          done: false,
          text: action.payload
        }
      ];

    case actions.todoListToggle.TYPE:
      return state.map((item) => {
        if (item !== action.payload) {
          return item;
        }

        return {
          ...item,
          done: !item.done
        };
      });

    case actions.todoListDelete.TYPE:
      return state.filter((item) => item !== action.payload);

    default:
      return state;
  }
}
