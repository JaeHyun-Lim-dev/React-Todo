import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const TodoSearchForm = (props) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("inline");
  const [value, setValue] = useState("");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const handleSubmit = ((event) => {
      alert ('submitted ' + value);
      event.preventDefault();
  });
  const handleChange = ((event) => {
    setValue(event.target.value)
  })
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
        onSubmit= {handleSubmit}
        style = {{marginBottom: '25px'}}
      >
        <Form.Item>
          <Input placeholder="검색" value = {value} onChange = {handleChange}/>
        </Form.Item>
      </Form>
  );
};

export default TodoSearchForm;
