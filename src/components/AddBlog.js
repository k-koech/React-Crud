import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { BlogContext } from '../context/BlogContext'

export default function AddBlog() 
{

    const [title, setTitle]=useState()
    const [description, setDescription]=useState()
    const [image, setImage]=useState()
    const [category, setCategory]=useState()
    const [date, setDate]=useState()

  const {AddBlog, blog} = useContext(BlogContext)


    const handleSubmit = (e)=>{
        e.preventDefault()

        const data = {title:title, description:description, image:image,category:category,date:date}
        AddBlog(data)
      }

  return (
    <div className='container'>
        
        <div className='row my-5'>
            <div className='col'>
                 <h3>Add Blog</h3>

                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input type="text" onChange={(e)=> setCategory(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" onChange={(e)=> setTitle(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input type="text" onChange={(e)=> setImage(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input type="text" onChange={(e)=> setDate(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Desription</label>
                    <input type="text" onChange={(e)=> setDescription(e.target.value)} className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                </form>


            </div>
            <div className='col'>
                
            </div>
        </div>
    </div>
  )
}
