import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import useStore from "../UseStore";

const TodoSearchForm = (props) => {
  const { TodoStore } = useStore();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("inline");
  const [value, setValue] = useState("");

  const onFinish = () => {
    console.log('submit');
    TodoStore.searchTodo(value);
    
  };
  const handleChange = (event) => {
    setValue(event.target.value);
    if (value.length === 0) TodoStore.searchTodo('');
  };
  const formItemLayout =
    formLayout === "inline"
      ? {
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "inline"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      onFinish = {onFinish}
      initialValues={{
        layout: formLayout,
      }}
      style={{ marginBottom: "25px", width: "400px" }}
    >
      <Form.Item style={{ display: "inline" }}>
        <Input
          placeholder="검색"
          value={value}
          prefix={<SearchOutlined onClick={onFinish} style = {{paddingRight: '5px'}} />}  
          onChange={handleChange}
          style={{ width: "400px" }}
        />
      </Form.Item>
    </Form>
  );
};

export default TodoSearchForm;
