import React from 'react'

const Contact = () => {
  return (
    <div className='contact w-full py-20 px-10 lg:px-80 flex justify-center items-center bg-red'>
        <div className="border border-red-500 rounded-4xl flex flex-col justify-center items-center p-10 md:py-20 md:px-40 gap-6">
            <h1 className='text-3xl md:4xl lg:text-6xl text-center'>Ready to start your next Project?</h1>
            <p className='text-center'>Let's build something extraordinary together. Whether it's a SaaS, portfolio, or e-commerce platform, I've got you covered.</p>
            <button>Contact Me</button>
        </div>
        
    </div>
  )
}

export default Contact