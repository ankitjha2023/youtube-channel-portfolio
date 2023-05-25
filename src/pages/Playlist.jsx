import React from 'react'
import courses from "../api/PlaylistApi"
import PlaylistCompo from '../components/PlaylistCompo'

const Playlist = () => {
  return (
    <>
      <h1 className='text-center mt-5 pt-5 fw-bold'>My Playlist</h1>
      <div className="container">
       
      <div className="row">
        
           {

            courses.map((course) => {
              return (
              <PlaylistCompo key={course.name} src={course.imgsrc} name={course.name} href={course.href}/>
              )
            })
  
          }
        
      </div>




      </div>

    </>

  )
}

export default Playlist
