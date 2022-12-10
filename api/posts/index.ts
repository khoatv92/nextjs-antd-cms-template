import api from 'api';
import { InewPosts } from 'interfaces/posts';

export const posts = () => api({ endpoint: `posts` });

export const newPosts = (data: InewPosts) =>
  api({ endpoint: `posts`, method: 'POST', data });
