import React from "react";
import QuestionItem from "./QuestionItem";
import {useState, useEffect} from "react";

function QuestionList() {
  //Create a state variable to hold the questions fetched from the server
  // and a setter function to update it:
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/questions')
    .then((res) => res.json())
    .then(data => setQuestions(data))
  }, []);// The empty dependency array [] passed to useEffect ensures that the effect runs only once when the component mounts.
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {/* Map over the questions state variable to render a QuestionItem component for each question: */}
        {questions.map(questions => (
          <QuestionItem key={questions.id} question={questions} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
