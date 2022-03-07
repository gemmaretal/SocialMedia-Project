import React from 'react';
import { Modal } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
export default function PostModal({
  isModalVisible,
  setIsModalVisible,
  title,
  body,
}) {
  const handleCancel = e => {
    e.stopPropagation();
    setIsModalVisible(false);
  };

  return (
    <Modal
    keyboard
      closeIcon={<CloseCircleOutlined style={{ fontSize: 30 }} />}
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={false}
    >
      {body}
    </Modal>
  );
}
