import { useEffect, useState } from 'react';
import { questions } from './questions';

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  const [toggle,setToggle]=useState<boolean|null>(null)

  useEffect(() => { 
    setTimeout(()=>{
      setToggle(true)
    },2000)
  }, [])
  
  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className={`${toggle? 'blurred':''}`}>{answer}</span>
      </p>
      <footer>
        <button onClick={()=>setToggle(!toggle)}>Toggle Answer</button>
      </footer>
    </article>
  );
};

const App = () => {
  return (
    <main>
      {questions.map((q) => (
        <Question question={q.question} answer={q.answer} key={q.id} />
      ))}
    </main>
  );
};

export default App;