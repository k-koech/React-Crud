import React from 'react'

function Landing() {
  return (
    <div className=" container">
    <div className="landing row">
      <div className="col d-flex justify-content-center align-items-center">
         <div>
            <h2>Free Modern React<br/>Templates for every need.</h2>
            <p>Easily customizable modern React UI Templates and Components<br/>built using TailwindCSS which are also lightweight and simple to setup.</p>
            <button type="button" className="btn btn-danger rounded-5 px-4">Get started</button>

         </div>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <img src='/homeimage.png' className='' alt='image loading...' />
      </div>
    </div>
  </div>
  )
}

export default Landing