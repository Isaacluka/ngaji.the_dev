import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='contact max-w-5xl mx-auto px-6 py-24  flex justify-center items-center bg-red'>
      <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-[2rem] p-12 md:p-20 border border-primary/20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <span className="material-symbols-outlined text-[10rem] text-primary font-mono">{"</>"}</span>
      </div>
        <div className="rounded-4xl flex flex-col justify-center items-center gap-6">
            <h1 className='text-3xl md:4xl lg:text-6xl text-center font-bold'>Ready to start your next Project?</h1>
            <p className='text-center'>Let's build something extraordinary together. Whether it's a SaaS, portfolio, or e-commerce platform, I've got you covered.</p>
            <a href="https://wa.me/2349044646303?text=Hello%20Ngaji,%20I%20came%20across%20your%20portfolio%20and%20I’m%20interested%20in%20working%20with%20you%20on%20a%20web%20project.%20Can%20we%20talk%20about%20requirements%20and%20pricing?"><button className='bg-blue hover:bg-blue/90 px-8 py-4 rounded-lg transition-all shadow-xl shadow-primary/30 active:scale-95'>Contact Me</button></a>
        </div>
      </div>
        
    </div>
  )
}

export default Contact