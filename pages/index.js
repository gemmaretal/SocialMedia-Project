import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Layout, BackTop } from 'antd';

import ProfileImage from '../components/ProfileImage';
import MenuHeader from '../components/MenuHeader';
import { Services } from './api/services';
import WallPost from '../components/WallPost';
const { Header, Footer } = Layout;

export default function Home() {
  const [listPosts, setListPosts] = useState([]);
  const [updater, setUpdater] = useState(false);

  useEffect(() => {
    Services.getAvailablePosts(setListPosts);
  }, [updater]);

  return (
    <div>
      <Header>
        <ProfileImage style={{ display: 'inline' }} />
        <MenuHeader
          setUpdater={setUpdater}
          updater={updater}
          style={{ display: 'inline' }}
        />
      </Header>
      <div style={{ minHeight: 580, backgroundColor: '#2a2a2a' }}>
        <WallPost
          listPosts={listPosts}
          setUpdater={setUpdater}
          updater={updater}
        />
      </div>
      <BackTop />
      <Footer
        style={{
          textAlign: 'center',
          bottom: 0,

          left: 0,

          width: '100%',
        }}
      >
        MyDiary ©2022 Created by Gemma
      </Footer>
    </div>
  );
}
