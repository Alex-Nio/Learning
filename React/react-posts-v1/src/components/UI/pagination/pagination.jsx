import React from 'react';
import { getPagesArray } from '../../../app/utils/pages';
import cl from './pagination.module.scss';

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className={cl.pagination}>
      {pagesArray.map((p, i) => (
        <button key={i} onClick={() => changePage(p)}>
          <span className={page === p ? 'current' : ''}>{p}</span>
        </button>
      ))}
    </div>
  );
};

export default Pagination;
