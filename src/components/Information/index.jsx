import React from 'react'

const Information = ({logement}) => {
  return (
    <div>
        {logement.title}
        {logement.location}
      
    </div>
  )
}

export default Information
