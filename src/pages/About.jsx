import React from 'react'
import links from '../api/SocialMediaApi'
const About = () => {
  return (
    <section id='about' className='container-fluid d-flex align-items-center justify-content-center py-5'>
      <div className="row">
        <div className="col-md-4 text-center mx-auto">
          <img src="/about.jpg" className="img-fluid"/>
        </div>
        <div className="col-md-12 col-lg-8 p-lg-5 mb-5">
          <h1 className='display-5 fw-bold'>ABOUT <br /> US !</h1>
          <p>Our channel features a range of educational content, including tutorials, live coding sessions, project walkthroughs. We cover a wide range of topics such as web development, help Beginners to learn coding in different programming languages such as c++, java, python etc.</p>
          <p>Our website serves as a hub for all of our content, making it easy for you to find the information you need to advance your coding skills. You can browse our videos by topic or programming language, and we also provide downloadable code samples and resources for each video.</p>
          <div className="d-flex gap-2">
            {
              links.map((link)=>{
                return(
                  <a href={link.href} key={link.id} className='fs-5' target='_blank'><i className={link.classes}></i></a>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
