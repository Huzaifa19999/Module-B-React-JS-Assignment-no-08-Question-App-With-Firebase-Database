import  Input  from "../components/Input"
import Button from "../components/Button"
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react"
import { Box } from "@mui/material";
import  { sendData } from "../config/firebaseMethods";
import Header from "../layout/header";

function AskQuestion() {

    const [ question, setQuestion] = useState("");

    const addData = () => {

        const now = new Date();
        const date = now.toLocaleDateString(); 
        const time = now.toLocaleTimeString();


        let obj = {

            question: question,
            date: JSON.stringify(date),
            time: JSON.stringify(time),
        }

        sendData("questions", obj)
        console.log(obj)

        }

  return (
    <>
            <Header/>
        <Box className="container mt-5   w-50 aligns-items-center">

    <Input  value={question}  onChange={(e:any) => {setQuestion(e.target.value);}} label="Ask Question" />

    <Button click={addData} className="fw-bold   w-25 mt-4 btn btn-primary" label="Ask Questions"></Button>
   
        </Box>
    </>
  )
}

export default AskQuestion