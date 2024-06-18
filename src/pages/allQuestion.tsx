import { useEffect, useState } from "react"
// import { getData } from '../config/firebaseMethods'
import { ref, onValue } from "firebase/database";
import  { db } from '../config/firebaseMethods'
import Header from "../layout/header";
import { Box } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";
import '../App.css'


function AllQuestion() {

  const [ allQuestion, setAllQuestion ] = useState<any>([])

  const navigate = useNavigate()
  const getData = (nodeName:any, id?:any) => {

    const refernce = ref(db, `${nodeName}/${id ? id : "" }`);

    onValue(refernce,(dt) => {

        console.log(Object.values(dt.val()));
      const getQuestion = Object.values(dt.val())
        setAllQuestion([...getQuestion])

      })
    }

    useEffect(() => {
      getData('questions')
    },[])


  
  
  // useEffect(() => {
  //   const questions = getData('questions');
  //   setAllQuestion(questions)
  // },[])

  // console.log(allQuestion)

  return (
    <>
      <Header/>
        <center>
        <button onClick={()=>{navigate('/askquestions')}} className="btn btn-success d-flex fw-bold p-3 align-items-center">Navigate to Ask Question </button>
        </center>

        {allQuestion.map((e:any,i:any) => (
          <Box className='border-class container mt-5 p-5' key={i}>
          <h1 className="mb-3">{e.question}</h1>
          <h6>Posted Time: {e.time}</h6>
          <h6>Posted Date: {e.date}</h6>
          <button onClick={()=>navigate(`/${e.id}`)} className="btn btn-primary mt-3 fw-bold">Checked Answer</button>
          <br />
          <br />
          </Box>
        ))}
      </>   
  )
}

export default AllQuestion