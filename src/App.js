
import './App.css';
import LoginIn from './login';
import SignIn from './signin';
import React, { useState, useEffect } from "react";
import ExamSelection from './examselection';
import Quizz from './quizz';
import Result from './result';

function App() {

  const [playerName, setPlayerName] = useState("");
  const [page, setPage] = useState("home");
  const [selectedExam, setSelectedExam] = useState("");
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  
  //  Save users to localStorage whenever users change

 const [users, setUsers] = useState(() => {
  try {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem("users", JSON.stringify(users));
}, [users]);
  return (
    <>

      {page === "home" && (
        <div className='App'>
          <div className="main-div">

            <h2>Welcome to Online Examination</h2>

            <p className="sub-text">
              Please log in to your existing account or sign up to create a new one to start your examination.
            </p>

            <div className='innerdiv'>
              <button className='loginbutton' onClick={() => setPage("login")}>
                Log In
              </button>

              <button className='loginbutton' onClick={() => setPage("signup")}>
                Sign Up
              </button>
            </div>

          </div>
        </div>
      )}

      {/* all routes */}

      {/* login page */}

      {page === 'login' && (
        <LoginIn users={users} setPage={setPage} setPlayerName={setPlayerName} page={page} key={page} />
      )}

      {/* sign up page */}
      {page === 'signup' && (
        <SignIn users={users} setUsers={setUsers} setPage={setPage} page={page} key={page} />
      )}

      {/* examselection page */}
      {page === 'exam' && (
        <ExamSelection setPage={setPage} setSelectedExam={setSelectedExam} />
      )}

      {/* Quizz page */}
      {page === 'quizz' && (
        <Quizz
          selectedExam={selectedExam}
          setPage={setPage}
          setScore={setScore}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
        />
      )}
      {/* Result Page */}

      {page === 'result' && (
        <Result
          score={score}
          playerName={playerName}
          setPage={setPage}
          selectedExam={selectedExam}
          userAnswers={userAnswers}
        />
      )}

    </>

  );
}

export default App;
