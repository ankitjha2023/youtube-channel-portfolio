import React from 'react'

const VideoCompo = ({imgSrc,alt, title,desc,videoSrc}) => {
  return (
    <div className="col-md-4 my-5">
    <div className='card'>

      <img src={imgSrc} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
       <a href={videoSrc} target='_blank'> <button className='btn btn-sm btn-primary'>Watch</button></a>
      </div>
    </div>
    </div>
  )
}

export default VideoCompo
