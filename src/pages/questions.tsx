import { useNavigate, useParams } from 'react-router-dom';
import { ref, onValue, push } from "firebase/database";
import { db } from '../config/firebaseMethods';
import { useEffect, useState } from "react";
import Header from '../layout/header';
import 'bootstrap/dist/css/bootstrap.css';
import { Box } from '@mui/material';
import Input from '../components/Input';

type QuestionType = {
  question: string;
  date: string;
  time: string;
  answers?: string[];
}

function Question() {
  const [allQuestion, setAllQuestion] = useState<QuestionType[]>([]);
  const [answer, setAnswer] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = (nodeName: string, id?: string) => {
      const reference = ref(db, `${nodeName}/${id ? id : ""}`);

      onValue(reference, (dt) => {
        if (dt.exists()) {
          const getQuestion = dt.val();
          if (Array.isArray(getQuestion)) {
            setAllQuestion(getQuestion);
          } else {
            setAllQuestion([getQuestion]);
          }
        } else {
          setAllQuestion([]);
        }
      }, (error) => {
        console.error("Error fetching data: ", error);
        setAllQuestion([]);
      });
    };

    if (id) {
      getData(`questions/${id}`);
    } else {
      getData('questions');
    }
  }, [id]);

  const postAnswer = (id: any) => {
    if (answer.trim() === "") return;

    const givenAns = ref(db, `questions/${id}/answers`);
    push(givenAns, answer)
      .then(() => {
        setAnswer("");
      })
      .catch((error) => {
        console.error("Error posting answer: ", error);
      });
  };

  return (
    <>
      <Header />
      <center>
        <button className='btn btn-success fw-bold mt-4' onClick={() => navigate('/')}>Back to All Questions</button>
      </center>
      {allQuestion.map((e, i) => (
        <Box className='border-class container mt-5 p-5' key={i}>
          <h1 className="mb-3">Q: {e.question}</h1>
          <Input 
            label='Answer' 
            value={answer} 
            onChange={(e:any) => setAnswer(e.target.value)} 
          />
          <button 
            className='btn btn-primary mt-3 fw-bold' 
            onClick={() => postAnswer(id)}
          >
            Post your Answer
          </button>
          <br />
          <br />
          
        </Box>
      ))}
    </>
  );
}

export default Question;
