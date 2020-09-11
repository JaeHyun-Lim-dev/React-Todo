import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import useStore from "../UseStore";

const TodoCreateForm = (props) => {
  const { TodoStore } = useStore();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("inline");
  const [value, setValue] = useState("");
  const [addTodo, setAddTodo] = useState(false);

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const onFinish = () => {
    TodoStore.createTodo(value);
    setValue("");
    setAddTodo(!addTodo);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const onToggle = () => {
    setAddTodo(!addTodo);
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
      initialValues={{
        layout: formLayout,
      }}
      onFinish={onFinish}
      style={{ marginBottom: "25px", width: "400px" }}
    >
      <Form.Item style={{ display: "inline" }}>
        {addTodo ? (
          <Input
            placeholder="할 일을 입력"
            value={value}
            onChange={handleChange}
            style={{ width: "400px" }}
            prefix = {<CloseOutlined onClick = {onToggle}/>}
          />
        ) : (
            <Button onClick = {onToggle}>
            <PlusOutlined />
            </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default TodoCreateForm;
