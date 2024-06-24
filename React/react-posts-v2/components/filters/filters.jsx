import React, { useState } from 'react';
import { SortDropdown } from './sort-dropdown';

export function Filters({ selectedQuantity, quantityArr, selectHandler }) {
  return (
    <div className="bg-gray-300">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center justify-between w-full">
            <a href="#" className="font-bold text-sky-400/100">
              Последний добавленный
            </a>
            <SortDropdown
              selectedQuantity={selectedQuantity}
              quantityArr={quantityArr}
              onClickHandler={selectHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
