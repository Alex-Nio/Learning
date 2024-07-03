import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
  const navigate = useNavigate();

  function transitToPost(id) {
    navigate(`/posts/${id}`, { replace: true });
  }

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <p>{props.post.body}</p>
      </div>
      <div className="post__actions">
        <button onClick={() => props.remove(props.post)}>Удалить</button>
        <button onClick={() => transitToPost(props.post.id)}>Открыть</button>
      </div>
    </div>
  );
};

export default PostItem;
