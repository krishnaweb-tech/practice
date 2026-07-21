import React, { useState, useEffect } from "react";

export default function AddQuestion() {
  const [examType, setExamType] = useState("Board Exam");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const savedQuestions =
      JSON.parse(localStorage.getItem("questions")) || [];
    setQuestions(savedQuestions);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !question ||
      !option1 ||
      !option2 ||
      !option3 ||
      !option4 ||
      !answer
    ) {
      alert("Please fill all fields");
      return;
    }

    const newQuestion = {
      id: Date.now(), // Unique Key
      type: examType,
      question,
      options: [option1, option2, option3, option4],
      answer,
    };

    const updatedQuestions = [...questions, newQuestion];

    setQuestions(updatedQuestions);

    localStorage.setItem(
      "questions",
      JSON.stringify(updatedQuestions)
    );

    alert("Question Added Successfully");

    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setAnswer("");
    setExamType("Board Exam");
  };

  return (
    <div className="users-wrapper">

      <h2>Add Question</h2>

      <form className="question-form" onSubmit={handleSubmit}>

        <select
          value={examType}
          onChange={(e) => setExamType(e.target.value)}
        >
          <option>Board Exam</option>
          <option>CBSE Exam</option>
          <option>UPSC Exam</option>
        </select>

        <textarea
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <input
          type="text"
          placeholder="Option 1"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
        />

        <input
          type="text"
          placeholder="Option 2"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
        />

        <input
          type="text"
          placeholder="Option 3"
          value={option3}
          onChange={(e) => setOption3(e.target.value)}
        />

        <input
          type="text"
          placeholder="Option 4"
          value={option4}
          onChange={(e) => setOption4(e.target.value)}
        />

        <input
          type="text"
          placeholder="Correct Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button type="submit">
          Save Question
        </button>

      </form>

      <hr />

      <h3>Saved Questions</h3>

      <table className="users-table">
        <thead>
          <tr>
            <th>Exam</th>
            <th>Question</th>
            <th>Correct Answer</th>
          </tr>
        </thead>

        <tbody>
          {questions.map((q) => (
            <tr key={q.id}>
              <td>{q.type}</td>
              <td>{q.question}</td>
              <td>{q.answer}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}