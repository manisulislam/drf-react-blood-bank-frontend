import { useState } from "react"
import Swal from 'sweetalert2'
import axiosInstance from "../utils/axiosInstance"
const Contact = () => {
  const [contactData, setContactData] = useState({
    full_name: "",
    email: "",
    message: ""
  })
  const { full_name, email, message } = contactData
  const [isLoading, setIsloading] = useState(false)

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    })

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!full_name || !email || !message) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "All Fields are required",
        showConfirmButton: false,
        timer: 3000
      });

    } else {
      console.log(contactData);
      setIsloading(true)
      const res = await axiosInstance.post("/contact/", contactData)
      setIsloading(false)
      if (res.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully sent to your message",
          showConfirmButton: false,
          timer: 3000
        });
        setContactData({
          full_name: "",
          email: "",
          message: ""
        })

      }
    }
  }

  return (
    <>
      <section>
        <div className="bg-red-500 py-32">
          <h1 className="text-white text-2xl justify-start font-semibold px-8">CONTACT US</h1>
        </div>


      </section>
      <section>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <address className="my-4 px-12 text-red-500">Baborer Bari, Sultanpur, Chattogram, <br />7no Ward,Raozan, Pouroshava</address>

            <iframe className="px-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14740.59879768452!2d91.9078659!3d22.53606435000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2bf5226ac073%3A0xcceebd337dfa5563!2sSultanpur%2C%20Raozan!5e0!3m2!1sen!2sbd!4v1710412624658!5m2!1sen!2sbd" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div>
            <div className="px-14 py-12">
              <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-lg">


                <form onSubmit={handleSubmit} >
                  
                  {isLoading && (
                    <div className="flex items-center justify-center h-screen">
                      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gray-900"></div>
                    </div>
                  )}
                  <h2 className="text-2xl font-semibold text-center mb-6">Get in Touch</h2>

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
                    <label htmlFor="first_name" className="block text-gray-700">Full Name:</label>
                    <input
                      type="text"
                      value={full_name}
                      onChange={handleChange}

                      id="full_name"
                      name="full_name"

                      className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                  </div>


                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700">Message:</label>
                    <input
                      type="text"
                      value={message}
                      id="message"
                      name="message"
                      onChange={handleChange}

                      className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-10 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                  </div>


                  <button type="submit" className="bg-green-500  text-white py-2 px-4 rounded-md w-full">Submit</button>
                </form>







              </div>
            </div>-

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact