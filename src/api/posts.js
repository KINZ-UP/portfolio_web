import client from "./client";

export const getPosts = ({ offset, limit }) =>
  client.get(`/posts?offset=${offset || 0}&limit=${limit || 5}`);

export const getPostById = (id) => client.get(`/posts/${id}`);

export const createPost = (post) => client.post("/posts/", post);
