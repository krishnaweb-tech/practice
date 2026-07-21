import React, { useState, useEffect, useRef } from "react";


function Result({
  score,
  setPage,
  playerName,
  selectedExam,
  userAnswers
}) {


  const [showReview, setShowReview] = useState(false);

  const saved = useRef(false);



  // Get questions from Admin localStorage
  const questions =
    JSON.parse(localStorage.getItem("questions")) || [];



  const filtered = questions.filter(
    q => q.type === selectedExam
  );


  const total = filtered.length;


  const percentage =
    total > 0
      ? ((score / total) * 100).toFixed(1)
      : 0;



  useEffect(() => {


    if(saved.current) return;

    saved.current = true;



    const resultData = {

      id: Date.now(),

      playerName,

      exam: selectedExam,

      score,

      totalQuestions: total,

      percentage,

      date: new Date().toLocaleDateString("en-GB")

    };



    const savedResults =
      JSON.parse(localStorage.getItem("results")) || [];



    savedResults.push(resultData);



    localStorage.setItem(
      "results",
      JSON.stringify(savedResults)
    );



  }, [percentage, playerName, score, selectedExam, total]);





  return (

    <div className="App">

      <div className="main-div result-card">


        <h2>
          🎉 Exam Completed!
        </h2>



        <h3>
          Congratulations, {playerName}
        </h3>



        <p>
          <b>Exam:</b> {selectedExam}
        </p>



        <h3>
          Score: {score} / {total}
        </h3>



        <h3>
          Percentage: {percentage}%
        </h3>




        <button
          onClick={() => setPage("exam")}
        >
          Try Another Exam
        </button>




        <button
          onClick={() => setShowReview(!showReview)}
          style={{ marginTop:"10px" }}
        >

          {
            showReview
            ?
            "Hide Result"
            :
            "Show Result"
          }

        </button>





        {
          showReview && (

            <div className="review-section">


              <h3>
                📘 Answer Review
              </h3>




              {
                filtered.map((q,index)=>{


                  const userAns =
                  userAnswers?.[index];



                  return (

                    <div
                      key={q.id}
                      className="review-box"
                    >


                      <p>
                        <b>
                          {q.question}
                        </b>
                      </p>




                      {
                        q.options.map((opt,i)=>{


                          let color="";



                          if(opt === q.answer){

                            color="green";

                          }



                          if(
                            opt === userAns &&
                            userAns !== q.answer
                          ){

                            color="red";

                          }




                          return (

                            <p
                              key={i}
                              style={{color}}
                            >

                              {opt}

                            </p>

                          );


                        })
                      }



                    </div>

                  );


                })
              }



            </div>

          )
        }




      </div>

    </div>

  );


}


export default Result;