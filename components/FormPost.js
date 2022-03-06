import React, { useState, useEffect } from 'react';
import { Services } from '../pages/api/services';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
export default function FormPost({ selectedPost, setUpdater, updater }) {
  const [form] = Form.useForm();

  //Create and Update Post
  function onFinish(e) {
    if (selectedPost.id) {
      Services.updatePost(selectedPost.id, e, setUpdater, updater);
      console.log('update');
    } else {
      Services.createNewPost(e, form.resetFields(), setUpdater, updater);
      console.log('post');
    }
  }

  useEffect(() => {
    let autoFillData = {
      title: selectedPost.title,
      content: selectedPost.content,
    };
    form.setFieldsValue(autoFillData);
  }, [form, selectedPost]);

  return (
    <Form form={form} {...layout} onFinish={onFinish}>
      <Form.Item name={'title'} label="Title">
        <Input style={{ width: 310 }} />
      </Form.Item>
      <Form.Item name={'content'} label="Content">
        <Input.TextArea style={{ width: 310, height: 250 }} />
      </Form.Item>
      <Form.Item  style={{paddimg: 'auto' }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ maxWidth: 480, margin: 'auto' }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
