import { Link } from "react-router-dom"
import image from "../assets/images.png"
import { Facebook, Linkedin, Youtube} from 'lucide-react';


const Footer = () => {
  
  return (
    <>
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            {/* First Column */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
              <img src={image} alt="Footer Image" className="w-40" />
            </div>

            {/* Second Column */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
              
              <ul className="text-white">
                <li>
                  <Link className="hover:text-red-700 hover:font-semibold hover:text-1xl" to="/about">About</Link>
                </li>
                <li><Link  className="hover:text-red-700 hover:font-semibold hover:text-1xl" to="/Blog">Blog</Link></li>
                <li><Link  className="hover:text-red-700 hover:font-semibold hover:text-1xl" to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Third Column */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <div className="flex space-x-12 py-18 justify-center align-center">
              <a href="#">
                <Linkedin color="white"/>
                
              </a>
              <a href="#">
                <Facebook color="white"/> 
                
              </a>
              <a href="#">
                <Youtube color="white"/>
                
              </a>
            </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer