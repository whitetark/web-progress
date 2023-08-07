import React from 'react'
import './Image.css'

export default function Image({ src }) {
  const imgPath = '/images/' + src
  return (
    <div className='img'>
      <img src={imgPath} />
    </div>
  )
}
