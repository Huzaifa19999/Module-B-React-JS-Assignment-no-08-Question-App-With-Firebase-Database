import { BrowserRouter, Route, Routes } from "react-router-dom"
import AskQuestion from "../pages/askQuestion"
import AllQuestion from "../pages/allQuestion"
import Question from "../pages/questions"

function Approuter() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/askquestions" element={<AskQuestion/>}></Route>
    {/* <Route path="/askquestions" element={<AskQuestion/>}></Route> */}
    <Route path="/" element={<AllQuestion/>}></Route>
    <Route path="/:id" element={<Question/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Approuter