import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Hooks
import { useFetching } from '../app/hooks/useFetching';
// Services
import PostService from '../app/API/post-service';
import Loader from '../components/UI/loader/loader';

const PostId = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();

  const [fetchPostById, isLoading] = useFetching(async (id) => {
    const response = await PostService.getById(id);

    setPost(response.data);
  });

  const [fetchPostCommentById] = useFetching(async (id) => {
    const response = await PostService.getCommentById(id);

    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchPostCommentById(params.id);
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="post">
            {post.id}. {post.title}
          </div>
          <h1>Комментарии:</h1>
          <div>
            {comments.map((comment) => (
              <div className="post-comment" key={comment.id}>
                <span>{comment.id}</span>
                <br />
                <span>{comment.name}</span>
                <br />
                <span>{comment.email}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostId;
