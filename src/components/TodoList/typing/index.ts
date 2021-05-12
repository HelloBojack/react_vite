export interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}
export interface IState {
  todoList: ITodoItem[]
}

export interface IAction {
  type: ACTION_TYPE;
  payload: ITodoItem | ITodoItem[] | number;
}

export enum ACTION_TYPE {
  ADD_TODO = 'addTodo',
  REMOVE_TODO = 'removeTodo',
  TOGGLE_TODO = 'toggleTodo',
  INIT_TODOLIST = 'initTodoList'

}