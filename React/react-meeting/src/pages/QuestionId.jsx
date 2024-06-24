import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../app/data/data';

const QuestionId = () => {
  const params = useParams();

  const category = data[Number(params.category) - 1];
  let questions;

  if (Number(params.id) - 1 !== 0) {
    questions = category.questions[Number(params.id) - 1];
  } else {
    questions = category.questions[0];
  }

  return (
    <div className="answers-list">
      <span className="current">{questions.question}</span>
      {questions.answers.map((q) => (
        <div>
          <span className="answer-text">{q}</span>
        </div>
      ))}
    </div>
  );
};

export default QuestionId;
