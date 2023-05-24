import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section className='container-fluid d-flex align-items-center justify-content-center' id='home'>
     <div className="row">
      <div className="col-md-8 mx-auto">
      <h1 className='display-5 text-center fw-bold'>CodingWithAnkit</h1>
     <p className='text-center fs-5'> Welcome to our YouTube channel portfolio website for  coding! Our channel is dedicated to helping beginner to improve there skills.</p>
    <div className="d-flex gap-2 justify-content-center">
    <Link to='/playlist'><button className='btn btn-success'>Playlist</button></Link>
   <Link to='/videos'> <button className='btn btn-warning'>Videos</button></Link>
    </div>
      </div>
     </div>

    </section>
    </>
  )
}

export default Home
