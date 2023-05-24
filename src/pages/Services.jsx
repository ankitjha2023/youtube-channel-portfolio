import React from 'react'
import services from '../api/ServiceApi'
import ServiceCompo from '../components/ServiceCompo'
const Services = () => {
  return (
    <section id='services' className='container'>
      <h1 className='text-center my-5'>Our Services</h1>
      <div className="row">
        {
            services.map((service)=>{
              return(
                <ServiceCompo key={service.title} icon={service.icon} title={service.title} desc={service.desc}/>
              )
            })
        }
      </div>
    </section>
  )
}

export default Services
