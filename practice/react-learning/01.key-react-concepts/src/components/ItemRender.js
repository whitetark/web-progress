import React from 'react'
import Item from './Item'
import './ItemRender.css'
import Concept from './ui/Concept'

export default function ItemRender({ arr }) {
  return (
    <div className='itemRender'>
      {arr.map((item) => (
        <Concept>
          <Item data={item} />
        </Concept>
      ))}
    </div>
  )
}
