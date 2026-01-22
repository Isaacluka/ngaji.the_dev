import React from 'react'

const HeroSection = () => {
  return (
    <hero className="heroSection px-10 py-20 lg:py-40 md:px-20 w-full flex flex-col lg:flex-row gap-6 border border-blue-500 justify-content-center" >
        <div className="textSection w-full lg:w-1/2 flex flex-col gap-5 border border-red-500">
            <p className='text-sm md:text-base lg:text-lg'>_____AVAILABLE FOR PROJECTS</p>
            <h1 className='text-4xl md:5xl lg:text-8xl'>Building Digital Excellence</h1>
            <p className='w-3/4'>Full-stack developer specializing in scalable web solutions and community-driven digital products. Turning complex problems into elegant code.</p>
            <div className="buttons flex gap-10">
                <button className="callToAction">Hire Me</button>
                <button className="projects">./view-projects</button>
            </div>
        </div>
        <div className="imgSection w-full lg:w-1/2 h-full border border-red-500">
            <div></div>

        </div>
    </hero>
    

  )
}

export default HeroSection