import React from 'react'

const ServiceCompo = ({icon,title,desc}) => {
  return (
    <div className='col-md-6 my-3 col-lg-4'>
      <div className='card shadow'>
        <i className={icon}></i>
        <div className='card-body'>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCompo
