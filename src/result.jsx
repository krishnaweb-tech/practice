import React, { useState, useEffect  } from "react";
import { questions } from "./Data/question";

function Result({
  score,
  setPage,
  playerName,
  selectedExam,
  userAnswers
}) {
  const [showReview, setShowReview] = useState(false);

  const filtered = questions.filter(q => q.type === selectedExam);
  const total = filtered.length;
  const percentage = ((score / total) * 100).toFixed(1);


  useEffect(() => {
  const resultData = {
    playerName,
    exam: selectedExam,
    score,
    totalQuestions: total,
    percentage
  };

  const savedResults =
    JSON.parse(localStorage.getItem("results")) || [];

  savedResults.push(resultData);

  localStorage.setItem(
    "results",
    JSON.stringify(savedResults)
  );
}, [playerName, selectedExam, score, total, percentage]); 

  return (
    <div className="App">
      <div className="main-div result-card">

        <h2>🎉 Exam Completed!</h2>

        <h3>Congratulations, {playerName}</h3>

        <p><b>Exam:</b> {selectedExam}</p>

        <h3>Score: {score} / {total}</h3>

        <h3>Percentage: {percentage}%</h3>

        {/* BUTTONS */}
        <button onClick={() => {setPage("exam");}}> Try Another Exam </button>

        <button
          onClick={() => setShowReview(!showReview)}
          style={{ marginTop: "10px" }}
        >
          {showReview ? "Hide Result" : "Show Result"}
        </button>

        {/* REVIEW SECTION */}
        {showReview && (
          <div className="review-section">

            <h3>📘 Answer Review</h3>

            {filtered.map((q, index) => {
              const userAns = userAnswers?.[index];

              return (
                <div key={index} className="review-box">

                  <p><b>{q.question}</b></p>

                  {q.options.map((opt, i) => {

                    let color = "";

                    if (opt === q.answer) {
                      color = "green"; // correct answer
                    }

                    if (opt === userAns && userAns !== q.answer) {
                      color = "red"; // wrong selected answer
                    }

                    return (
                      <p key={i} style={{ color }}>
                        {opt}
                      </p>
                    );
                  })}

                </div>
              );
            })}

          </div>
        )}

      </div>
    </div>
  );
}

export default Result;