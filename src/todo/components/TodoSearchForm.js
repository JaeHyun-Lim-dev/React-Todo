import React, { useState } from "react";
import { useObserver } from "mobx-react";
import { Form, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import useStore from "../UseStore";

const TodoSearchForm = (props) => {
  const { TodoStore } = useStore();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("inline");
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    // event.preventDefault();
    setValue(event.target.value);
    TodoStore.searchTodo(event.target.value);
    // console.log("searchWord: " + TodoStore.searchWord);
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

  return useObserver(() => (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      style={{ marginBottom: "25px", width: "400px" }}
    >
      <Form.Item style={{ display: "inline" }}>
        <Input
          placeholder="검색"
          // value={value}
          prefix={
            <SearchOutlined
              onClick={handleChange}
              style={{ paddingRight: "5px" }}
            />
          }
          onChange={handleChange} // onChange -> onKeyDown(onKeyPress) -> onKeyUp
          style={{ width: "400px" }}
        />
      </Form.Item>
    </Form>
  ));
};

export default TodoSearchForm;
