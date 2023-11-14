import React from 'react'
import '../src/App.css'
import { Route,Routes,Navigate } from 'react-router-dom'
import SignIn from './component/SignIn'
import HomePage from './pages/homePage'
import TopFold from './component/TopFold'
import TrendingNfts from './component/TrendingNfts'
import InfoSection from './component/InfoSection'
import BrandIntegration from './component/BrandIntegration'
const App = () => {
  return (
    <div className='max-width'>
      <Routes>
   <Route exact path="/" element={<SignIn/>} />
   <Route exact path="/home" element={<HomePage />} />
   <Route exact path="/topfold" element={<TopFold />} />
   <Route exact path="/brandIntegration" element={<BrandIntegration />} />
   <Route exact path="/trendingNfts" element={<TrendingNfts />} />

   <Route exact path="/infoSection" element={<InfoSection />} />


    </Routes>
    </div>
  )
}

export default App
