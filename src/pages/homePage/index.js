import React from 'react'
import TopFold from '../../component/TopFold'
import Header from '../../component/Header'
import TrendingNfts from '../../component/TrendingNfts'
import InfoSection from '../../component/InfoSection'
import Footer from '../../component/Footer'
import BrandIntegration from '../../component/BrandIntegration'
import { Routes, Route } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <Header />
            <TopFold />
            <BrandIntegration/>
            <TrendingNfts/>
            <InfoSection/>
            <Footer/>
        </div>






    )
}

export default HomePage
