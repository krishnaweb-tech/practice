import React, { useState, useEffect } from "react";

export default function Question() {
  const [examType, setExamType] = useState("Board Exam");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const savedQuestions =
      JSON.parse(localStorage.getItem("questions")) || [];
    setQuestions(savedQuestions);
  }, []);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !question ||
      options.some((option) => option.trim() === "") ||
      !answer
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (!options.includes(answer)) {
      alert("Correct answer must match one of the four options.");
      return;
    }

    const newQuestion = {
      id: Date.now(),
      type: examType,
      question,
      options,
      answer,
    };

    const updatedQuestions = [...questions, newQuestion];

    setQuestions(updatedQuestions);

    localStorage.setItem(
      "questions",
      JSON.stringify(updatedQuestions)
    );

    alert("Question Added Successfully!");

    setExamType("Board Exam");
    setQuestion("");
    setOptions(["", "", "", ""]);
    setAnswer("");
  };

  return (
    <div className="users-wrapper">

      <h2>Add New Question</h2>

      <form className="question-form" onSubmit={handleSubmit}>

        {/* Exam Selection */}
        <label>Select Exam</label>

        <select
          value={examType}
          onChange={(e) => setExamType(e.target.value)}
        >
          <option value="Board Exam">Board Exam</option>
          <option value="CBSE Exam">CBSE Exam</option>
          <option value="UPSC Exam">UPSC Exam</option>
        </select>

        {/* Question */}
        <label>Question</label>

        <textarea
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        {/* Options */}
        <label>Option 1</label>
        <input
          type="text"
          value={options[0]}
          onChange={(e) =>
            handleOptionChange(0, e.target.value)
          }
        />

        <label>Option 2</label>
        <input
          type="text"
          value={options[1]}
          onChange={(e) =>
            handleOptionChange(1, e.target.value)
          }
        />

        <label>Option 3</label>
        <input
          type="text"
          value={options[2]}
          onChange={(e) =>
            handleOptionChange(2, e.target.value)
          }
        />

        <label>Option 4</label>
        <input
          type="text"
          value={options[3]}
          onChange={(e) =>
            handleOptionChange(3, e.target.value)
          }
        />

        {/* Correct Answer */}
        <label>Correct Answer</label>

        <select
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        >
          <option value="">Select Correct Answer</option>

          {options.map((option, index) => (
            <option key={index} value={option}>
              {option || `Option ${index + 1}`}
            </option>
          ))}
        </select>

        <button type="submit">
          Save Question
        </button>

      </form>

      <br />

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
          {questions.length === 0 ? (
            <tr>
              <td colSpan="3">No Questions Found</td>
            </tr>
          ) : (
            questions.map((q) => (
              <tr key={q.id}>
                <td>{q.type}</td>
                <td>{q.question}</td>
                <td>{q.answer}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

    </div>
  );
}