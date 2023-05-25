import React from 'react'

const Contact = () => {
  return (
    <section className='container my-5' id='contact'>
      <div className="row">
       <div className="col-md-12 col-lg-6">
       <img src="/contact.png" className="img-fluid" />
       </div>
       <div className="col-md-12 col-lg-6 my-md-5">
        <h1 className='text-center fw-bold'>CONTACT ME</h1>
        <p className='text-center'>If you have any questions, feedback, or suggestions for our channel or website, please don't hesitate to contact us.</p>

        <form method="post" action="https://formspree.io/f/mayzyzov">
    <div className="mb-3">
    <label htmlFor="name" className="form-label fw-bold">Name</label>
    <input type="text" className="form-control shadow-none" autoComplete="off" required  name="name" placeholder='Enter your name'/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label fw-bold">Email address</label>
    <input type="email" className="form-control shadow-none" autoComplete="off" required name="email" placeholder='Enter your email'/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Leave your comments</label>
    <textarea className="form-control shadow-none" rows={5}  name="message" placeholder='Send me message'></textarea>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
       
      
      </div>
      </div>
    </section>
  )
}

export default Contact
