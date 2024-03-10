import { useState } from "react"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: ""
  })
  const [error, setError] = useState("")

  const { email, first_name, last_name, password, password2 } = formData

  const handleChange = (e) => {
    e.preventDefault()
    setFormData(
      {
        ...formData,
        [e.target.name]: e.target.value
      }
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !first_name || !last_name || !password || !password2) {
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
      const res = await axios.post('http://127.0.0.1:8000/api/v1/auth/register/', formData)

      if (res.status === 201) {
        navigate("/otp/verify")
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 3000
        });
        setError("")
        setFormData({
          email: "",
          first_name: "",
          last_name: "",
          password: "",
          password2: ""
        })
      }

    }
  }

  return (
    <>
      <div>
        <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit} >

            <div className="mb-4">

              <label htmlFor="email" className="block text-gray-700">Email Address:</label>
              <input
                type="email"
                value={email}
                onChange={handleChange}

                id="email"
                name="email"
                required
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            </div>

            <div className="mb-4">
              <label htmlFor="first_name" className="block text-gray-700">First Name:</label>
              <input
                type="text"
                value={first_name}
                onChange={handleChange}

                id="first_name"
                name="first_name"

                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="last_name" className="block text-gray-700">Last Name:</label>
              <input
                type="text"
                value={last_name}
                id="last_name"
                name="last_name"
                onChange={handleChange}

                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password:</label>
              <input
                type="password"
                value={password}
                id="password"
                name="password"
                onChange={handleChange}

                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="confirm_password" className="block text-gray-700">Confirm Password:</label>
              <input
                type="password"
                value={password2}
                id="password2"
                name="password2"
                onChange={handleChange}

                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            </div>

            <button type="submit" className="bg-green-500  text-white py-2 px-4 rounded-md w-full">Sign Up</button>
          </form>


          {/* <h3 className="my-3 text-cyan-700 font-semibold">Already have an account, please <Link to='login' className="text-purple-700">Log In</Link></h3> */}




        </div>
      </div>-

    </>
  )
}

export default SignUp