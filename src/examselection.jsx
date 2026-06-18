function ExamSelection({ setPage, setSelectedExam }) {

  const handleSelect = (type) => {
    setSelectedExam(type);
    setPage("quizz");
  };

  return (
    <div className='App'>
      <div className='main-div'>
        <h2>Select Your Exam</h2>

        <div className='exam-div'>
          <button onClick={() => handleSelect("Board Exam")}>
            Board Exam
          </button>

          <button onClick={() => handleSelect("CBSE Exam")}>
            CBSE Exam
          </button>

          <button onClick={() => handleSelect("UPSC Exam")}>
            UPSC Exam
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExamSelection;