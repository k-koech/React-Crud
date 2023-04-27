import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
function Blog() 
{
  const [blog, setBlog] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/blogs")
    .then(res=>res.json())
    .then(res=>{
      // console.log(res)
      setBlog(res)
    })
  }, [])
  return (
    <div className=' container my-5'>
      <div className='text-center'>
        <h2 className='fw-bold'>Blog</h2>
        <p>Find our recent blogs</p>
      </div>

      <div className=" row ">
        
          {
            blog.length>0?
            blog.map((data)=>(
            <div key={data.id} className="col-4 mb-3  mr-3 px-3">
            <div  className='border bg-light overflow-hidden'>
              <img src={data.image} className='img-fluid ' alt='image loading...' />
              <h5 >{data.title}</h5>
              <Link to={`blog/${data.id}`} className="btn btn-danger w-100">Read More</Link>
            </div> 
            </div>
            ))
            :
            <p>You dont have data at the moment</p>
          }

       
      
      </div>
      
    </div>
  )
}

export default Blog