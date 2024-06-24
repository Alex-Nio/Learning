import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionItem from '../question-item/question-item';

const QuestionList = ({ data }) => {
  const navigate = useNavigate();

  function transitToQuestion(category, question) {
    navigate(`/questions/${category}/${question}`, { replace: true });
  }

  return (
    <div className="questions">
      <h1>{data.category}</h1>
      <ul className="questions-list">
        {data.questions.map((question, index) => (
          <QuestionItem
            key={data.questions[index].id}
            question={question}
            handler={() => transitToQuestion(data.id, data.questions[index].id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
