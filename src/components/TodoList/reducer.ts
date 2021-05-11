import { ACTION_TYPE, IAction, IState, ITodoItem } from "./typing";

function todoReducer(state: IState, action: IAction): IState {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload as ITodoItem]
      }
    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(item => item.id != payload as number)
      }
    case ACTION_TYPE.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(item => {
          return item.id == payload as number ? {
            ...item, completed: !item.completed
          } : {
            ...item
          }
        })
      }
    default:
      return state
  }
}

export {
  todoReducer
}