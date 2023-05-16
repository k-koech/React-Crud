import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const BlogContext = createContext()

export function BlogProvider({children})
{
    const nav = useNavigate()
    const [blog, setBlog] = useState([]);
    const [singleBlog, setSingleBlog] =useState()


    // Add Blog
    const AddBlog = (data)=>{
        fetch(`http://localhost:3400/blogs`,{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            // "X-ACCESS-KEY":"$2b$10$GVdPvmMsow2V5ABijw6WNOGSztKX25b84f.XaLTCrx2kH3DSGTVti", "X-BIN-META": false},
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

    // Fetch Single Blog
    const GetSingleBlog = (id) =>{
        fetch(`http://localhost:3400/blogs/${id}`)
      .then(res=>res.json())
      .then(res=>{
        setSingleBlog(res)
        console.log("Fetching from Context ",res)
      })
    }

    // Delete Blog
    const DeleteBlog = (id) =>{
        fetch(`http://localhost:3400/blogs/${id}`,{
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

    //   Fetch Blogs
    useEffect(()=>{

        fetch("http://localhost:3400/blogs",{
        method:"GET"
        })
        .then(res=>res.json())
        .then(res=>{
          console.log(res)
           setBlog(res)
        })


    }, [])


    const contextData = {
        AddBlog,
        blog,
        GetSingleBlog,
        singleBlog,
        DeleteBlog

    }

    return (
        <BlogContext.Provider value={contextData}>
            {children}
        </BlogContext.Provider>
    )

}