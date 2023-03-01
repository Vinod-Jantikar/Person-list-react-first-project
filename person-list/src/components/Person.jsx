import React from 'react'
import "./Person.css"

const Person = ({image, name, job}) => {
  return (
    <div className='person'>
        <img src={`https://randomuser.me/api/portraits/thumb/men/${image}.jpg`} alt="person-image" />
        <div>
            <h4>{name}</h4>
            <h4>{job}</h4>
        </div>
        
    </div>
  )
}

export default Person
