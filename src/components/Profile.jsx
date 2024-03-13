import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axiosInstance from "../utils/axiosInstance"
import Swal from 'sweetalert2'

const Profile = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))
  const jwt_access_token = JSON.parse(localStorage.getItem("access"))

  useEffect(() => {
    if (jwt_access_token === null && !user) {
      navigate("/login")

    }
  }, [jwt_access_token, navigate, user])
  const refresh_token = localStorage.getItem("refresh") ? JSON.parse(localStorage.getItem("refresh")) : ""
  const handleLogout = async () => {
    const res = await axiosInstance.post('/auth/logout/', { "refresh_token": refresh_token })
    if ( res.status === 200) {
      localStorage.removeItem("access")
      localStorage.removeItem("refresh")
      localStorage.removeItem("user")
      navigate('/login')
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logout successfully",
        showConfirmButton: false,
        timer: 3000
      });
    }
  }

  return (
    <div>
      <p>{user && user.names}</p>
      <h2>Welcome</h2>
      <button onClick={handleLogout} className="py-4 bg-red-900 tex-white">Logout</button>

    </div>
  )
}

export default Profile