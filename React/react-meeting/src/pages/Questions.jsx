import React, { useState } from 'react';
import QuestionList from '../components/question-list/question-list';
import { data as recruitmentData } from '../app/data/data';

const Questions = () => {
  const [data, setData] = useState(recruitmentData);

  return (
    <div className="content">
      {data.map((item) => (
        <QuestionList data={item} />
      ))}
    </div>
  );
};

export default Questions;
