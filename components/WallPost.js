import { Card, Avatar, Spin } from 'antd';
import React, { useState } from 'react';
import FormPost from './FormPost';
import { EditOutlined, DeleteOutlined, MoreOutlined } from '@ant-design/icons';
import PostModal from './PostModal';
import styled from 'styled-components';
import { Services } from '../pages/api/services';
import PostDetail from './PostDetail';
import ProfileImage from './ProfileImage';
const { Meta } = Card;
const StyledCard = styled(Card)`
  display: block;
  margin: auto;

  margin-bottom: 20px;
  .ant-card-meta-title {
    white-space: initial;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
export default function WallPost({ listPosts, setUpdater, updater }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState();
  const [typeModal, setTypeModal] = useState(1);
  //Delete Post
  function deleteHandler(value) {
    const selectedValue = { title: value.title, content: value.content };
    Services.deletePost(value.id, selectedValue, setUpdater, updater);
  }

  function updateHandler(value) {
    setSelectedPost(value);
    setIsModalVisible(true);
  }

  //Get a Post
  function detailHandler(value) {
    setIsModalVisible(true);
    setSelectedPost("")
    Services.getPost(value.id, setSelectedPost);
  }

  return (
    <div
      style={{
        margin: 'auto',
        padding: 20,
        backgroundColor: 'whitesmoke',
        maxWidth: 800,
        bottom: 0,
        minHeight: 580,
      }}
    >
      {listPosts.map((value, index) => {
        return (
          <StyledCard
            hoverable
            key={index}
            style={{ maxWidth: 500 }}
            actions={[
              <EditOutlined
                onClick={() => {
                  updateHandler(value);
                  setTypeModal(1);
                }}
              />,
              <DeleteOutlined
                onClick={() => {
                  deleteHandler(value);
                }}
              />,
              <MoreOutlined
                onClick={() => {
                  setTypeModal(2);
                  detailHandler(value);
                }}
              />,
            ]}
          >
            <Meta
              avatar={<Avatar src="/IconImage.png" />}
              title={value.title}
              description={value.content}
            />
          </StyledCard>
        );
      })}
      <PostModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        title={
          <h3 style={{ fontSize: 22, display: 'inline-block' }}>
            {typeModal === 1 ? (
              `Update Post`
            ) : (
            selectedPost&&selectedPost!==""? <div style={{ paddingBottom: 10 }}>
            <ProfileImage style={{ display: 'inline' }} />
            <div style={{ fontSize: 38, color: '#2a2a2a', display: 'inline' }}>
              {selectedPost.title}
            </div>
          </div>:<Spin/>
            )}
          </h3>
        }
        body={
          typeModal === 1 ? (
            <FormPost
              selectedPost={selectedPost}
              setUpdater={setUpdater}
              updater={updater}
            />
          ) : (
            <PostDetail selectedPost={selectedPost} />
          )
        }
      />
    </div>
  );
}
