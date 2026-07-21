import React, { useState } from "react";


function Quizz({
  selectedExam,
  setPage,
  setScore,
  userAnswers,
  setUserAnswers
}) {


  // Get questions from localStorage
  const questions =
    JSON.parse(localStorage.getItem("questions")) || [];

  // Filter selected exam questions
  const filteredQuestions = questions.filter(
    (q) => q.type === selectedExam
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);

  // No questions found
  if (filteredQuestions.length === 0) {
    return (
      <div className="App">
        <div className="main-div">
          <h2>
            No questions found!
          </h2>
          <p>
            Please ask admin to add questions.
          </p>
          <button
            onClick={() => setPage("exam")}
          >
            Back to Exam Selection
          </button>
       </div>
      </div>
    );
  }

  // Select option
  const handleOptionSelect = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = option;
    setUserAnswers(updatedAnswers);

  };
  // Next question
  const handleNext = () => {
    if(currentQuestion < filteredQuestions.length - 1){

      setCurrentQuestion(currentQuestion + 1);
    }
  };
  // Previous question
  const handlePrevious = () => {
    if(currentQuestion > 0){
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Submit quiz
  const handleSubmit = () => {
    let finalScore = 0;

    filteredQuestions.forEach((q,index)=>{
      if(userAnswers[index] === q.answer){

        finalScore++;
      }
    });
    setScore(finalScore);
    setPage("result");
  };

  return (
    <div className="App">
      <div className="main-div">
        <h2>
          {selectedExam}
        </h2>
        <p className="quizz-question">
          Question {currentQuestion + 1} of {filteredQuestions.length}
        </p>
        <h3>
          {filteredQuestions[currentQuestion].question}
        </h3>
        <div className="options">
          {
          filteredQuestions[currentQuestion].options.map(
            (option,index)=>(
              <button
              key={index}
              onClick={()=>handleOptionSelect(option)}
              className={
                userAnswers[currentQuestion] === option
                ?
                "selected"
                :
                ""
              }
              >
                {option}

              </button>
            )
          )
          }
        </div>
        <div className="navigation">
          <button

          className="Previous"

          onClick={handlePrevious}

          disabled={currentQuestion === 0}
          >
            Previous

          </button>
          {

          currentQuestion === filteredQuestions.length - 1 ?(
          <button

          className="Submit"

          onClick={handleSubmit}

          disabled={!userAnswers[currentQuestion]}
          >
            Submit

          </button>
          )
          :
          (

          <button

          className="Next"

          onClick={handleNext}

          disabled={!userAnswers[currentQuestion]}
          >
          Next

          </button>

          )

          }

        </div>
      </div>

    </div>

  );
}


export default Quizz;