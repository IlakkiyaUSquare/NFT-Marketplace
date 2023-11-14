import React from 'react'
import '../BrandIntegration/brandIntegration.css'
import Slider from 'react-slick'
import Card from './Card';
import Button from '../../common/Button';
import { TRENDING_NFTS } from '../../Data/trendingNfTs';
const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  speed: 500,
  arrows: false,
};
const Creator = () => {
  return (
    <div className='brand-Integration'>
      
      <div className='tn-title absolute-center'>
        <span className='heading-gradient'> CREATOR </span>
      </div>
      <div className='tn-bg-blob'></div>
      <Slider {...settings}>
        {TRENDING_NFTS.map((_nft) =>
          <Card nft={_nft}/>
        )}
      </Slider>
      <div className='tn-btn absolute-center'>
        <Button btnText='SEE MORE' type='Secondary'  CustomClass='seemore-btn' />
      </div>
    </div>
    
  )
}

export default Creator
