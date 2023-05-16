import React, {useContext, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { BlogContext } from '../context/BlogContext'

export default function SingleBlog() 
{
 

  const nav = useNavigate()
    const {id} = useParams()

    const {GetSingleBlog,singleBlog, DeleteBlog} = useContext(BlogContext)

    useEffect(()=>{
      GetSingleBlog(id)
    }, [])

    console.log("In SingleBlog ",singleBlog)

    const handleDelete = ()=>{
       DeleteBlog(id)
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
