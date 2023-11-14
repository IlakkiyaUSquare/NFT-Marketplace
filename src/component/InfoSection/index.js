import React from 'react'
import '../InfoSection/InfoItem'
import '../InfoSection/infoSection.css'
import { INFO_ITEMS } from '../../Data/InfoItems'
import InfoItem from '../InfoSection/InfoItem'
const InfoSection = () => {
  return (
    <div className='info-section'>
      <div className='heading absolute-center'>
        <span className='heading-gradient'>
          Create and sell your NFTs
        </span>
      </div>
      <div className='container'>
        {INFO_ITEMS.map((_infoItem)=>
        <InfoItem item={_infoItem}/>)}
      </div>
    </div>
  )
}

export default InfoSection
