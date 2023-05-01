import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function AddBlog() 
{
    const nav = useNavigate()

    const [title, setTitle]=useState()
    const [description, setDescription]=useState()
    const [image, setImage]=useState()
    const [category, setCategory]=useState()
    const [date, setDate]=useState()



    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };
      
    // req.open("POST", "https://api.jsonbin.io/v3/b", true);
    // req.setRequestHeader("Content-Type", "application/json");
    // req.setRequestHeader("X-Master-Key", "<YOUR_API_KEY>");
    // req.send('{"sample": "Hello World"}');    


    const handleSubmit = (e)=>{
        e.preventDefault()

        const data = {title:title, description:description, image:image,category:category,date:date}
        fetch(`https://api.jsonbin.io/v3/b/644a76838e4aa6225e920035`,{
          method:"POST",
          headers: {"Content-Type":"application/json", "X-ACCESS-KEY":"$2b$10$GVdPvmMsow2V5ABijw6WNOGSztKX25b84f.XaLTCrx2kH3DSGTVti", "X-BIN-META": false},
          body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then((res)=>{
          console.log("Errors ", res)
          console.log("Saved successfully")
          nav("/")
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Saved Successfully`,
            showConfirmButton: false,
            timer: 3000
          })
        })
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
