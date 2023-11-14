import React from 'react'
import '../InfoItem/info.css'
const InfoItem = (props) => {
    const {item}= props;
  return (
    <div className='info-item absolute-center'>
      <img alt={item.section_title} className='li-icon' src={item.icon}/>
      <div className='li-title'>{item.section_title}</div>
      <div className='li-desc'>{item.Description}</div>
    </div>
  )
}

export default InfoItem
