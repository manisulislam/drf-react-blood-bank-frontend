import { useState } from "react"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const LogIn = () => {
  const navigate=useNavigate()
  const [loginData, setLoginData]=useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    e.preventDefault()
    setLoginData({
      ...loginData,
    [e.target.name]:e.target.value
    })
  }
  const {email, password}=loginData
  const [error, setError] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError("All fields are required")
      Swal.fire({
        position: "center",
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 3000
      });

    }
    else {
      const res = await axios.post('http://127.0.0.1:8000/api/v1/auth/login/', loginData)

      if (res.status === 200) {
        navigate("/dashboard")
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 3000
        });
        const response=res.data
        const user={
          "email":response.email,
          "names":response.full_name

        }
        localStorage.setItem(JSON.stringify(user))
        localStorage.setItem(JSON.stringify(response.access_token))
        localStorage.setItem(JSON.stringify(response.refresh_token))
        
        setError("")
        setLoginData({
          email: "",
          password: "",
         
        })
      }

    }
  }

  return (
    <>
     <div>
        <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit} >

            <div className="mb-4">

              <label htmlFor="email" className="block text-gray-700">Email Address:</label>
              <input
                type="email"
                value={email}
                onChange={handleChange}
                id="email"
                name="email"
                
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password:</label>
              <input
                type="password"
                value={password}
                onChange={handleChange}

                id="password"
                name="password"
                
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            </div>
           

            <button type="submit" className="bg-green-500  text-white py-2 px-4 rounded-md w-full">Login</button>
          </form>


          {/* <h3 className="my-3 text-cyan-700 font-semibold">Already have an account, please <Link to='login' className="text-purple-700">Log In</Link></h3> */}




        </div>
      </div>-
    </>
  )
}

export default LogIn