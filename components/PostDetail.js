import React from 'react';
import { Card, Spin } from 'antd';

const { Meta } = Card;
export default function PostDetail({ selectedPost }) {
  return selectedPost && selectedPost !== '' ? (
    <Meta
      description={
        <div>
          <div
            style={{
              fontSize: 24,
              paddingBottom: 30,
              color: '#2a2a2a',
            }}
          >
            {selectedPost.content}
          </div>
          <div style={{ fontSize: 10 }}>
            <div>
              Published At :{' '}
              {new Date(selectedPost.published_at).toDateString('en') +
                ' ' +
                new Date(selectedPost.published_at).toLocaleTimeString('en')}
            </div>
            <div>
              Created At :{' '}
              {new Date(selectedPost.created_at).toDateString('en') +
                ' ' +
                new Date(selectedPost.created_at).toLocaleTimeString('en')}
            </div>
            <div>
              Updated At :{' '}
              {new Date(selectedPost.updated_at).toDateString('en') +
                ' ' +
                new Date(selectedPost.updated_at).toLocaleTimeString('en')}
            </div>
          </div>
        </div>
      }
    />
  ) : (
    <Spin />
  );
}
