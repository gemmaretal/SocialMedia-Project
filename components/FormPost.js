import React, { useEffect } from 'react';
import { Services } from '../pages/api/services';

import { Form, Input, Button } from 'antd';

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
    <Form
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 18 }}
      onFinish={onFinish}
    >
      <Form.Item name={'title'} label="Title">
        <Input />
      </Form.Item>
      <Form.Item name={'content'} label="Content">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ maxWidth: 550, width: '100%' }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
