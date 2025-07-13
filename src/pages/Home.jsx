import React from 'react'
import BackgroundImg from "../assets/pizza.jpeg"
import Fashion from '../assets/fasionbakgrnd.jpg'
import Navbar from '../components/Navbar';
import Medbackgrnd from '../assets/medbackgrnd.jpg'

function Home() {
  return (
    <div>
    
    <div className='position-relative vh-100 overflow-hidden'>
      <img src={BackgroundImg} alt="image_1" className='d-block w-100 h-100 object-fit-cover' />

      <div className='position-absolute top-50 start-50 translate-middle text-center text-white'>
        <h1 className='display-4 mb-3 fw-bolder'>SpeedyShaq Delivery</h1>
        <button className='btn btn-danger px-4 py-2 fs-5'>Foods</button>
      </div>
    </div>

    <div className='position-relative vh-100 overflow-hidden'>
      <img src={Fashion} alt="" className='d-block w-100 h-100 object-fit-cover'/>
      <div className='position-absolute top-50 start-50 translate-middle text-center text-white'>
        <h1 className='display-4 mb-3 fw-bolder'>Explore Fashion</h1>
        <button className='btn btn-danger px-4 py-2 fs-5'>Fashion</button>
      </div>
    </div>

      <div className='position-relative vh-100 overflow-hidden'>
        <img src={Medbackgrnd} alt="" className='d-block w-100 h-100 object-fit-cover' />
        <div className='position-absolute top-50 start-50 translate-middle text-center text-white'>
          <h1 className='display-4 mb-3 fw-bolder'>Explore Meds</h1>
          <button className='btn btn-danger px-4 py-2 fs-5'>Meds</button>
        </div>
      </div>

    </div>
  )
}

export default Home
