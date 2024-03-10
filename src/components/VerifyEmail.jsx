import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from 'sweetalert2'
const VerifyEmail = () => {
  const [otp, setOtp]=useState("")
  const navigate=useNavigate()
  const handleSubmit =async (e)=>{
    e.preventDefault()
    const res=await axios.post('http://127.0.0.1:8000/api/v1/auth/verify_email/',{'otp_code':otp})
    if (res.status===200){
      navigate("/login")
      Swal.fire({
        position: "center",
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        timer: 3000
      });
      setOtp("")

    }
  }
  return (
    <>
       <div>
        <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Verify Your Email</h2>

          <form onSubmit={handleSubmit} >

            <div className="mb-4">

              <label htmlFor="email" className="block text-gray-700">Enter Your Otp Code:</label>
              <input
                type="text"

                id="otp"
                name="otp"
                required
                value={otp}
                onChange={(e)=>setOtp(e.target.value)}
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            </div>

            <button type="submit" className="bg-blue-500  text-white py-2 px-4 rounded-md w-full">Verify</button>
          </form>


          {/* <h3 className="my-3 text-cyan-700 font-semibold">Already have an account, please <Link to='login' className="text-purple-700">Log In</Link></h3> */}




        </div>
      </div>-
    </>
  )
}

export default VerifyEmail