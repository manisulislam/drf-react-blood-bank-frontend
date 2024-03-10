import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import {Home,SignUp,LogIN,Profile,VerifyEmail,ForgetPassword} from "./components/index"

function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/signup" element={<SignUp></SignUp>}/>
        <Route path="/login" element={<LogIN></LogIN>}/>
        <Route path="/dashboard" element={<Profile></Profile>}/>
        <Route path="/otp/verify" element={<VerifyEmail></VerifyEmail>}/>
        <Route path="/forget_password" element={<ForgetPassword></ForgetPassword>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
