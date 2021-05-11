import React, { FC, ReactElement } from 'react';
import { Form, Input, Button } from 'antd'
import { ITodoItem } from '../typing';

interface IProps {
  addTodoItem: (todoItem: ITodoItem) => void;
  todoList: ITodoItem[];
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const TdInput: FC<IProps> = ({ addTodoItem, todoList }): ReactElement => {
  const onFinish = (values: any) => {
    addTodoItem({
      id: new Date().getTime(),
      title: values.todoItemValue,
      completed: false
    })
  };

  const onFinishFailed = (errorInfo: any) => {
  };
  return (
    <div>
      <Form
        {...layout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="todoItemValue"
          rules={[{ required: true, message: 'Please input your todoItem!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Add
        </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default TdInput;