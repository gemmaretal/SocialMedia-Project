import React from 'react';
import { Card, Avatar } from 'antd';
const { Meta } = Card;
export default function PostDetail({ selectedPost }) {
  return (
    <Meta
      description={
        <div>
          <div style={{ fontSize: 30, paddingBottom: 30, color: '#2a2a2a' }}>
            {selectedPost.content}
          </div>
          <div style={{ fontSize: 12 }}>
            Published At :{' '}
            {new Date(selectedPost.published_at).toDateString('en') +
              ' ' +
              new Date(selectedPost.published_at).toLocaleTimeString('en')}
          </div>
          <div style={{ fontSize: 12 }}>
            Created At :{' '}
            {new Date(selectedPost.created_at).toDateString('en') +
              ' ' +
              new Date(selectedPost.created_at).toLocaleTimeString('en')}
          </div>
          <div style={{ fontSize: 12 }}>
            Updated At :{' '}
            {new Date(selectedPost.updated_at).toDateString('en') +
              ' ' +
              new Date(selectedPost.updated_at).toLocaleTimeString('en')}
          </div>
        </div>
      }
    />
  );
}
