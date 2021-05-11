import React, { FC, ReactElement, useCallback, useReducer } from 'react'
import { todoReducer } from './reducer'
import TdInput from './TdInput/index'
import TdList from './TdList/index'
import { ACTION_TYPE, IState, ITodoItem } from './typing'

const initialState: IState = {
  todoList: []
}

const TodoList: FC = (): ReactElement => {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const addTodoItem = useCallback((todoItem: ITodoItem) => {
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todoItem
    })
  }, [])

  const toggleTodoItem = useCallback((id: number) => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id
    })
  }, [])
  const removeTodoItem = useCallback((id: number) => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id
    })
  }, [])
  return (
    <div>
      <TdInput
        addTodoItem={addTodoItem}
        todoList={state.todoList}
      />
      <TdList
        removeTodoItem={removeTodoItem}
        toggleTodoItem={toggleTodoItem}
        todoList={state.todoList} />
    </div>
  )
}

export default TodoList