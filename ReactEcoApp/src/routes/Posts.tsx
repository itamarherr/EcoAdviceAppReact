import React from 'react'
import useAuth from '../hooks/useAuth'
import { getPost } from '../services/Post-service';

const Posts = () => {
  const {token} = useAuth();
  getPost(token)
  .then((Response) =>{
    console.log(Response.data);
  })
  .catch((error) => {
    console.log(error);
  });
  return
    <div>Posts</div>
};

export default Posts;