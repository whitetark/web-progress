import React from 'react'
import './Item.css'
import Image from './ui/Image'

export default function Item({ data }) {
  return (
    <div className='item'>
      <Image src={data.img} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  )
}
