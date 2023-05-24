import React from 'react'
import courses from "../api/PlaylistApi"

const Playlist = () => {
  return (
    <>
      <h1 className='text-center mt-5 pt-5 fw-bold'>My Playlist</h1>
      <div className="container py-5 mb-5 d-flex align-items-center justify-content-center flex-wrap gap-4 ">
        {

          courses.map((course) => {
            return (
              <div style={{ width: "10rem" }} className="card bg-light p-2 rounded shadow" key={course.name}>
                <img src={course.imgsrc} alt={course.name} className=' img-fluid card-img-top'/>
                <h5 className='card-title text-center my-2'>{course.name}</h5>

                <a href={course.href} className='mx-auto mt-2' target='_blank'>Check playlist</a>
              </div>
            )
          })

        }





      </div>

    </>

  )
}

export default Playlist
