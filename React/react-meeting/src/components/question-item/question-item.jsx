import React from 'react';
import { Link } from 'react-router-dom';

const QuestionItem = ({ question, handler }) => {
  return (
    <li onClick={handler}>
      <Link>{question.question}</Link>
    </li>
  );
};

export default QuestionItem;
