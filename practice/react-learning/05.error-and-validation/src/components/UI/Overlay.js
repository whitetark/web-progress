import React from 'react'
import styled from './Overlay.module.css'

const Overlay = ({ onClick }) => {
  return <div className={styled.overlay} onClick={onClick}></div>
}

export default Overlay
