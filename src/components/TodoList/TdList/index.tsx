import React, { FC, ReactElement } from 'react'
import { List, Checkbox } from 'antd';
import { ITodoItem } from '../typing';
import { CloseOutlined } from '@ant-design/icons';

interface IProps {
  toggleTodoItem: (id: number) => void;
  removeTodoItem: (id: number) => void;
  todoList: ITodoItem[];
}
const TdList: FC<IProps> = ({ todoList, toggleTodoItem, removeTodoItem }): ReactElement => {

  return (
    <div>
      <List
        bordered
        dataSource={todoList}
        renderItem={item => (
          <List.Item>
            <Checkbox checked={item.completed} onChange={() => toggleTodoItem(item.id)}></Checkbox>
            <span style={{ textDecoration: item.completed ? 'line-through' : '' }}>{item.title}</span>
            <CloseOutlined onClick={() => removeTodoItem(item.id)} />
          </List.Item>
        )}
      />
    </div>
  )
}

export default TdList