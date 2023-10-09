import React from 'react'

const index = ({host}) => {
  return (
   
      <div className='host-wrapper'>
          <p className='host-name'>{host.name}</p>
          <img className='host-img' src={host.picture} alt='host picture' />
        
        </div>
    
  )
}

export default index
