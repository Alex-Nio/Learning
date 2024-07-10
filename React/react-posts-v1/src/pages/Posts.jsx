import React, { useEffect, useState } from 'react';
import PostsList from './../components/posts-list/posts-list';
import PostForm from './../components/post-form/post-form';
import PostFilter from './../components/post-filter/post-filter';
import PostsModal from './../components/posts-modal/posts-modal';
import Loader from './../components/UI/loader/loader';
import Pagination from './../components/UI/pagination/pagination';
// Custom Hooks
import { usePosts } from './../app/hooks/usePosts';
import { useFetching } from './../app/hooks/useFetching';
// Services
import PostService from './../app/API/post-service';
// Utils
import { getPagesCount } from './../app/utils/pages';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);

    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="app">
      <div className="app-content">
        <div className="posts">
          <div className="posts-content">
            <PostFilter filter={filter} setFilter={setFilter} />
            <button onClick={() => setModal(true)}>Создать пост</button>
          </div>

          {postError && <h1>Ошибка загрузки ${postError}</h1>}

          {isPostsLoading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 50,
              }}
            >
              <Loader />
            </div>
          ) : (
            <PostsList
              remove={removePost}
              posts={sortedAndSearchedPosts}
              title="Список постов"
            />
          )}

          <Pagination
            totalPages={totalPages}
            page={page}
            changePage={changePage}
          />

          <PostsModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
          </PostsModal>
        </div>
      </div>
    </div>
  );
}
