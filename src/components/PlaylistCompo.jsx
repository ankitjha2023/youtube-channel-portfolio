import React from 'react'

const PlaylistCompo = ({src,name,href}) => {
  return (
    <div className='col-lg-2 col-md-4 col-sm-6 text-center my-3'>
      <div className="card">
      <img src={src} alt={name} className=' img-fluid card-img-top'/>
        <div className="card-body">
        <h5 className='card-title text-center my-2'>{name}</h5>
        <a href={href} className='mx-auto mt-2' target='_blank'>Check playlist</a>
        </div>
       
  
      </div>
    </div>
  )
}

export default PlaylistCompo
