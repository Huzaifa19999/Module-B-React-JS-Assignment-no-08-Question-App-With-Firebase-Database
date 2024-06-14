import { BrowserRouter, Route, Routes } from "react-router-dom"
import AskQuestion from "../pages/askQuestion"
import AllQuestion from "../pages/allQuestion"

function Approuter() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<AskQuestion/>}></Route>
    {/* <Route path="/askquestions" element={<AskQuestion/>}></Route> */}
    <Route path="/allquestions" element={<AllQuestion/>}></Route>
    <Route path="/allquestions/:id" element={<AllQuestion/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Approuter