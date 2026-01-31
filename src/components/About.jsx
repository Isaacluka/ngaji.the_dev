import React from 'react'
import ngajiImage from '../assets/ngaji.png';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RocketIcon from '@mui/icons-material/RocketLaunch';
import Carousel from './Carousel'


const About = () => {
  return (
    <div id='about' className='py-20 px-5 lg:px-40 flex flex-col gap-6 bg-slate-900/30'>
      <p className='text-primary font-mono'>01. About me</p>
      <div className="flex flex-col lg:flex-row w-full h-auto gap-6 items-center">
        <div className="rounded-lg w-full h-75  md:h-120  bg-slate-900/30 lg:bg-transparent flex items-center"> 
          {/* <Carousel className='w-full h-full object-cover' /> */}
          <img src={ngajiImage} alt="ngajiImage" className="rounded-xl w-full h-full object-cover md:object-[50%_30%]"/>
        </div>
        <div className="bg-slate-500/30 lg:p-10 rounded-lg w-full h-full flex flex-col gap-6 px-5 py-5">
          <h1 className='text-3xl md:4xl lg:text-6xl text-left font-bold'>Why Work with Me?</h1>
          <p>I focus on building high-performance digital solutions that help your business grow. No shortcuts, just clean and scalable code that works.</p>

          <div className='flex gap-2 items-start'>
            <div className="iconBox bg-primary/10 p-3 rounded-lg"><SpeedIcon color="primary"/></div>
            <div className="flex flex-col">
              <p className='text-white font-bold text-lg'>Lightning Fast</p>
              <p className='text-slate-400 text-sm'>Optimised for Core Web Vitals.</p>
            </div>
            
            
          </div>
          <div className='flex gap-2 items-start'>
            <div className="iconBox bg-primary/10 p-3 rounded-lg w-auto flex items-center justify-content-center"><VerifiedUserIcon color="primary"/></div>
            <div className="flex flex-col">
              <p className='text-white font-bold text-lg'>99.9% Uptime</p>
              <p className='text-slate-400 text-sm'>Robust error-handling Architectures</p>
            </div>
            
          </div>
          <div className='flex gap-2 items-start'>
            <div className="iconBox bg-primary/10 p-3 rounded-lg w-auto"><RocketIcon color="primary"/></div>
            <div className="flex flex-col">
              <p className='text-white font-bold text-lg'>Scalable Solutions</p>
              <p className='text-slate-400 text-sm'>High-Performance Web Applications</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About