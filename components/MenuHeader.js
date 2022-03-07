import React, { useState } from 'react';
import { Menu} from 'antd';
import PostModal from './PostModal';
import {  FormOutlined, HomeOutlined } from '@ant-design/icons';
import FormPost from './FormPost';
import { useRouter } from 'next/router';

export default function MenuHeader({ setUpdater, updater }) {
  const router = useRouter();
  const selectedPost = { title: '', content: '' };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClick = e => {
    if (e.key === '2') {
      setIsModalVisible(true);
    } else if (e.key === '1') {
      router.push('/');
    }
  };

  return (
    <Menu
      style={{ float: 'right' }}
      onClick={handleClick}
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
    >
      <Menu.Item key={'1'} style={{ borderRadius: '25px' }}>
        <HomeOutlined style={{ fontSize: '28px' }} />
      </Menu.Item>
      <Menu.Item key={'2'} style={{ borderRadius: '25px' }}>
        <PostModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          title={
            <h3 style={{ textAlign: 'center', fontSize: 28 }}>Create Post</h3>
          }
          body={
            <FormPost
              selectedPost={selectedPost}
              setUpdater={setUpdater}
              updater={updater}
            />
          }
        />
        <FormOutlined
          onClick={showModal}
          style={{ fontSize: '28px', borderRadius: '25px' }}
        />
      </Menu.Item>
    </Menu>
  );
}
