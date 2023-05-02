import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function SingleBlog() 
{
  const [singleBlog, setSingleBlog] =useState()

  const nav = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
      fetch(`https://testing-rb3o.onrender.com/blogs/${id}`)
      .then(res=>res.json())
      .then(res=>{
        setSingleBlog(res)
        console.log(res)
      })
    }, [])


    const handleDelete = ()=>{
      fetch(`https://testing-rb3o.onrender.com/blogs/${id}`,{
        method:"DELETE"
      })
      .then(()=>{
        console.log("deleted successfully")
        nav("/")
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Blog ${id} deleted successfully`,
          showConfirmButton: false,
          timer: 1500
        })
      })
    }

  return (
    <div className='singleBlog container'>
      <h1>{singleBlog && singleBlog.title}</h1>
      <div className='row'>
        <div className='col-6 card bg-light me-2'>
              <img src={singleBlog && singleBlog.image} className='img-fluid ' alt='image loading...' />
              <h5 >{singleBlog &&  singleBlog.title}</h5>
              <p>{singleBlog && singleBlog.description}</p>
        </div>
        <div className='col-4 p-3 card bg-light'>
           <button onClick={handleDelete} type="button" class="btn btn-danger">Delete</button>

        </div>
      </div>
    </div>
  )
}
