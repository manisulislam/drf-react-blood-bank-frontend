
import { Link, NavLink } from 'react-router-dom';

const NavbarStyles = ({ isActive }) => {
  return {
    fontWight: isActive ? "semibold" : "normal",
    textDecoration: isActive ? "none" : "none",
  }
}
const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const jwt_access_token = JSON.parse(localStorage.getItem("access"))


  const handleAuthorization = () => {
    if (jwt_access_token === null && !user) {
      return (
        <>
          <NavLink to="/signup" style={NavbarStyles} className="text-gray-300 hover:text-white mr-4">Sign Up</NavLink>
          <NavLink to="/login" style={NavbarStyles} className="text-gray-300 hover:text-white mr-4">Sign In</NavLink>

        </>
      )
    }
    else {
      return (<>
        <NavLink to="/dashboard" style={NavbarStyles} className="text-gray-300 hover:text-white mr-4">Dashboard</NavLink>

      </>)
    }

  }
  return (
    <>

      <nav className="bg-red-800 py-2">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div >
            <div className="flex align-items-center justify-between h-12">
              <div>
                <Link to="/" className='text-white text-2xl font-semibold'>Blood Point</Link>

              </div>
              <div>

                <input
                  type="email"
                  // value={email}
                  // onChange={handleChange}
                  placeholder='Search Your Donar Based on Location'
                  id="email"
                  name="email"

                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 mx-12 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
              </div>
              <div>

                <NavLink exact to="/" style={NavbarStyles} className="text-gray-300 hover:text-white mr-4 ">Home</NavLink>
                <NavLink to="/about" style={NavbarStyles} className="text-gray-300 hover:text-white mr-4">About</NavLink>
                <NavLink to="/contact" style={NavbarStyles} className="text-gray-300 hover:text-white mr-4">Contact</NavLink>
                <NavLink to="/blog" style={NavbarStyles} className="text-gray-300 hover:text-white mr-4">Blog</NavLink>

                {handleAuthorization()}

              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  )

}
export default Header;