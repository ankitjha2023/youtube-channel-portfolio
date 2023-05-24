import React from 'react'
import videos from '../api/VideoApi'
import VideoCompo from '../components/VideoCompo'
const Videos = () => {
  return (
    <section className='container py-5' id='videos'>
      <h1 className='text-center'>Latest Videos</h1>
      <div className="row">
        
          {
            videos.map((video)=>{
              return(
                <VideoCompo key={video.alt} imgSrc={video.imgsrc} alt={video.alt} title={video.title} desc={video.desc} videoSrc={video.videosrc}/>
              )
            })
          }
        
      </div>
    </section>
  )
}

export default Videos
