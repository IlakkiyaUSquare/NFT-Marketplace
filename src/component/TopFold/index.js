import React from 'react'
import '../TopFold/topFold.css'
import Button from '../../common/Button'

const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
      <div className='tf-left'>
        <div className='tf-heading'>
          Discover Collect, & sell {""}<span className='heading-gradient'>  ExtraOrdinary</span> NFTs
        </div>
        <div className='tf-description'>
          the leading NFT Marketplace on  Ethereum Home to the next generation of digital creators.Discover the best Nft collections.
        </div>

        <div className='tf-left-btn'>
          <Button btnType="PRIMARY" btnText="Explore"></Button>
          <Button btnType="SECONDARY" btnText="Create" CustomClass='tf-left-secondary-btn'></Button>
        </div>
        <div className='tf-left-infostats'>
          <div className='tf-infoitem absolute-center'>
            <div className='info-count'>200K</div>
            <div className='info-label'>Collections</div>
          </div>
          <div className='tf-infoitem absolute-center'>
            <div className='info-count'>10K</div>
            <div className='info-label'>Artist</div>
          </div>
          <div className='tf-infoitem absolute-center'>
            <div className='info-count'>423K</div>
            <div className='info-label'>Community</div>
          </div>
        </div>
      </div>
      <div className='tf-right'>
        <div className='tf-r-bg-blob'>

        </div>
        <div className='tf-right-diamond'>
          <div className='tf-r-diamond-items absolute-center'>
            <img className='tf-r-diamond-img' 
            alt="diamond-banner" 
            src="https://i.seadn.io/gcs/files/3b814f7eb68a7db1df38408de1c77f4f.gif?auto=format&dpr=1&w=256"/>
            </div>
            <div className='tf-r-diamond-items absolute-center'>
            <img className='tf-r-diamond-img' 
            alt="diamond-banner" 
            src="https://i.seadn.io/gcs/files/8604de2d9aaec98dd389e3af1b1a14b6.gif?auto=format&dpr=1&w=256"/>
            </div>
            <div className='tf-r-diamond-items absolute-center'>
            <img className='tf-r-diamond-img' 
            alt="diamond-banner" 
            src="https://i.seadn.io/gcs/files/091da28f4f77697589b408f33b2f0ab0.gif?auto=format&dpr=1&w=256"/>
            </div>
            <div className='tf-r-diamond-items absolute-center'>
            <img className='tf-r-diamond-img' 
            alt="diamond-banner" 
            src="https://i.seadn.io/gcs/files/3b814f7eb68a7db1df38408de1c77f4f.gif?auto=format&dpr=1&w=256"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopFold
