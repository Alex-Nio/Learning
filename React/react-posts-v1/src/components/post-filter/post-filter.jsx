import React from 'react';
import Select from '../UI/select/select';
import PostInput from './../UI/post-input/post-input';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className="post-filter">
      <PostInput
        placeholder="Поиск"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue={'Сортировка'}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
