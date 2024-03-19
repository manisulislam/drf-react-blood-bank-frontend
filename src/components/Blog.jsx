import {useState,useEffect} from 'react'
import axios from 'axios'
const Blog = () => {
  const [blogData, setBlogData]=useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/blog/')
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          setBlogData(response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching blog data:', error);
      });
  }, []);
  
  return (
    <>
    <section>
        <div className="bg-red-500 py-32">
          <h1 className="text-white text-2xl justify-start font-semibold px-8">Welcome to The Blood Point Blog</h1>
        </div>
      </section>
    
    {blogData.map(s => (
        <div className='my-4' key={s.id}>
          <h2 className='text-2xl text-red-500 px-8'>{s.title}</h2>
          <p className='px-8 my-4 '>{s.description}</p>
        </div>
      ))}
    
    </>
  )
}

export default Blog