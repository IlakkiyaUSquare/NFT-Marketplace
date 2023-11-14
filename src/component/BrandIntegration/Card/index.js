import React from 'react'
import '../Card/card.css'

const Card = (props) => {
    const { nft } = props;
    return (
        <div className='trending-card absolute-center'>
            <div className='card-wrapper'>
                <div className='content'>
                    <img alt={nft.user_name}
                        className='creator'
                        src={nft.user_photo} />

                    <div className='ui-creator '>{nft.creator}</div>
                    

                </div>
            </div>
        </div>
    )
}

export default Card