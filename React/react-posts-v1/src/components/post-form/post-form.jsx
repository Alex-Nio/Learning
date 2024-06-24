import { useState } from 'react';
import { useClass } from '../../app/hooks/useClass';
import PostInput from '../UI/post-input/post-input';
import classes from './post-form.module.scss';

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: '', description: '' });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title: post.title,
      description: post.description,
    };

    create(newPost);
    setPost({ title: '', description: '' });
  };

  return (
    <form className={useClass(classes, 'post-form')}>
      <PostInput
        className={useClass(classes, 'post-input')}
        placeholder="Заголовок"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />

      <PostInput
        className={useClass(classes, 'post-input')}
        placeholder="Описание"
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />

      <button onClick={addNewPost}>Добавить</button>
    </form>
  );
}
