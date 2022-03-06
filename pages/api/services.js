import axios from 'axios';
import { message } from 'antd';

const createNewPost = async (body, reset, setUpdater, updater) => {
  try {
    const response = await axios.post(
      `https://limitless-forest-49003.herokuapp.com/posts`,
      body
    );
    reset;
    setUpdater(!updater);
    response.status === 200
      ? message.success('Successfully Add a Post!')
      : message.error('Failed Add a Post!');
  } catch (error) {
    return error;
  }
};

const deletePost = async (id, body, setUpdater, updater) => {
  try {
    const response = await axios.delete(
      `https://limitless-forest-49003.herokuapp.com/posts/${id}`,
      body
    );
    setUpdater(!updater);
    response.status === 200
      ? message.success('Successfully Delete a Post!')
      : message.error('Failed Delete a Post!');
  } catch (error) {
    return error;
  }
};
const updatePost = async (id, body, setUpdater, updater) => {
  try {
    const response = await axios.put(
      `https://limitless-forest-49003.herokuapp.com/posts/${id}`,
      body
    );
    setUpdater(!updater);
    response.status === 200
      ? message.success('Successfully Update a Post!')
      : message.error('Failed Update a Post!');
  } catch (error) {
    return error;
  }
};

const getAvailablePosts = async setListPosts => {
  try {
    const response = await axios.get(
      `https://limitless-forest-49003.herokuapp.com/posts`
    );
    setListPosts(response.data);
    return console.log(response);
  } catch (error) {
    return error;
  }
};
const getPost = async id => {
  try {
    const response = await axios.get(
      `https://limitless-forest-49003.herokuapp.com/posts/${id}`
    );
    // setListPosts(response.data);
    return console.log(response);
  } catch (error) {
    return error;
  }
};

export const Services = {
  createNewPost,
  getAvailablePosts,
  deletePost,
  updatePost,
  getPost,
};
