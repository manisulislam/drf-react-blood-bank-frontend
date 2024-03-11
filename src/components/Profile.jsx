import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Profile = () => {
  const navigate=useNavigate()
  const user=JSON.parse(localStorage.getItem("user"))
  const jwt_access_token=JSON.parse(localStorage.getItem("access"))

  useEffect(()=>{
    if (jwt_access_token===null && !user){
      navigate("/login")

    }
  },[jwt_access_token,navigate,user])

  return (
    <div>
      <p>{user && user.names}</p>
      <h2>Welcome</h2>
      <button>Logout</button>

    </div>
  )
}

export default Profile