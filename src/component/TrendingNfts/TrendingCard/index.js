import React from 'react'
import '../TrendingCard/TrendingCard.css'

const TrendingCard = (props) => {
    const { nft } = props;
    return (
        <div className='trending-card absolute-center'>
            <div className='wrapper'>
                <div className='content'>
                    <img alt={nft.user_name} src={nft.banner} className='tc-banner' />
                    <div className='ui-userhandle '>{nft.userhandle}</div>
                    <div className='user-info'>
                        <div className='ui-left'>
                            <img alt={nft.user_name}
                                className='logo'
                                src={nft.user_photo} />
                            
                       
                        <div>
                            <div className='ui-username'>{nft.user_name}</div>
                            <div className='ui-username'>{nft.author}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TrendingCard
