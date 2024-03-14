import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, SignUp, LogIN, Profile, VerifyEmail, ForgetPassword, About, Contact,Blog } from "./components/index"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {


  return (
    <>

      <Router>
        <Header></Header>
        <Routes>

          <Route path="/" element={<Home></Home>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/login" element={<LogIN></LogIN>} />
          <Route path="/dashboard" element={<Profile></Profile>} />
          <Route path="/otp/verify" element={<VerifyEmail></VerifyEmail>} />
          <Route path="/forget_password" element={<ForgetPassword></ForgetPassword>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/forget_password" element={<ForgetPassword></ForgetPassword>} />
          <Route path="/Blog" element={<Blog></Blog>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
