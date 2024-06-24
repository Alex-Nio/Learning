import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './../post/post-item';

export default function PostsList({ posts, title, remove }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Нет постов</h1>;
  }

  return (
    <div className="posts-list">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem post={post} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
