import React, { FC, ReactElement, useCallback, useEffect, useReducer } from 'react'
import { todoReducer } from './reducer'
import TdInput from './TdInput/index'
import TdList from './TdList/index'
import { ACTION_TYPE, IState, ITodoItem } from './typing'


function init(initialTodoList: ITodoItem[]): IState {
  return {
    todoList: initialTodoList
  }
}

const TodoList: FC = (): ReactElement => {
  // useReducer 惰性初始化
  const [state, dispatch] = useReducer(todoReducer, [], init)

  // 
  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todolist') || '[]')
    dispatch({
      type: ACTION_TYPE.INIT_TODOLIST,
      payload: todoList
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(state.todoList))
  }, [state.todoList])

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