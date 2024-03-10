

const LogIn = () => {
  return (
    <>
     <div>
        <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

          <form  >

            <div className="mb-4">

              <label htmlFor="email" className="block text-gray-700">Email Address:</label>
              <input
                type="email"

                id="email"
                name="email"
                required
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password:</label>
              <input
                type="password"

                id="password"
                name="password"
                required
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