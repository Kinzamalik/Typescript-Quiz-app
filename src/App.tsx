import React,{useEffect, useState} from 'react';
import './App.css';
import {getQuizDetails} from './services/quiz_services'
import { QuizType } from './Types/quiz_types';
import QuestionCard from './components/QuestionCard'

function App() {
  let [quiz,setQuiz] = useState<QuizType[]>([]);
  let [currentStep,setCurrentStep] = useState(0);
  let [score,setScore] = useState(0)
  let [showResult ,setShowResult] = useState(false)

  useEffect(() => {
    async function fetchData(){
      const questions: QuizType[] = await getQuizDetails(5,'easy');
      // console.log(questions)
      setQuiz(questions);

    }
    fetchData();
    
  }, []);

  const handleSubmit = (e:React.FormEvent<EventTarget>,userAns:string)=>{
    e.preventDefault();

    const currentQuestion:QuizType = quiz[currentStep];
    console.log('correct Ans:' + currentQuestion.correct_answer +'--user selection: ' +userAns )
    if(userAns === currentQuestion.correct_answer ){
      setScore(++score)

    }
    console.log(userAns)
    if(currentStep !== quiz.length-1)
    setCurrentStep(++currentStep);
    else{
     setShowResult(true)
    }
  }


  if(!quiz.length)
  return <h3>Loading...</h3>


  if(showResult){
    return(<div className="question_container result_container">
      <h3>Result</h3>
      <p className="result_test">Your final score is {score} out of : {quiz.length}</p>
    </div>)
  }

  return (
     <div className="App">
       <h2>Quiz App</h2>
       <QuestionCard 
       options={quiz[currentStep].option}
       question={quiz[currentStep].question}
       callback={handleSubmit}
       />
     </div>
  );

}

export default App;
