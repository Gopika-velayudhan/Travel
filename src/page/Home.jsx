import React from 'react'
import Navbar from '../components/navbar/Navbar'
import LandingPage from '../components/LandingPage/LandingPage'
import Destination from '../components/destination/Destination'
import Service from '../components/service/Service'
import Discound from '../components/discound/Discound'
import Feature from '../components/feature/feature'
import Footer from '../components/footer/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <LandingPage/>
        <Service/>
        <Destination/>
        <Discound/>
        <Feature/>
        <Footer/>
        
    

    </div>
  )
}

export default Home