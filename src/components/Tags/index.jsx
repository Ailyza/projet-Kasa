import React from 'react'
import './tag.css'

const Tags = ({ tags }) => {
  return (
   <div className='InfoLocationTags'>
          {tags.map((tag, index) => {
            /*map permet d'adapter le tableau en code HTML (chaque éléments aura son code HTML) */
            return <p key={`${tag}-${index}`}>
              {tag}
            </p>
          })}
    </div>
  )
}

export default Tags;
