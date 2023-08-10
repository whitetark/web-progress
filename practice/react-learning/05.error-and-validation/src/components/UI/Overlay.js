import React from 'react'
import styled from './Overlay.module.css'

const Overlay = (props) => {
  return <div className={styled.overlay} onClick={props.onClick}></div>
}

export default Overlay
