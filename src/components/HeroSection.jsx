import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from './Carousel'



const HeroSection = ({isOpen, setOpen }) => {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden"; // lock scroll
//     } else {
//       document.body.style.overflow = "auto"; // unlock scroll
//     }

//     // Cleanup in case component unmounts
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

  return (
    <div className="heroSection hero-glow px-5 py-20 lg:px-40 w-full flex flex-col lg:flex-row gap-6 justify-content-center items-center" >

        <div className="textSection w-full lg:w-1/2 flex flex-col gap-6">
        
            <p className='text-sm md:text-base lg:text-md font-mono text-[#135bec]'><span className="inline-block border-b-2 border-current w-8 pb-1"></span>AVAILABLE FOR PROJECTS</p>
        
            <h1 className='text-4xl md:5xl lg:text-7xl font-extrabold'>Building <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400'>Digital</span> Excellence</h1>
        
            <p className='w-3/4 text-slate-400'>Full-stack developer specializing in scalable web solutions and community-driven digital products. Turning complex problems into elegant code.</p>
        
            <div className="buttons flex flex-wrap gap-6">
        
                <button className="callToAction bg-blue hover:bg-blue/90 px-8 py-4 rounded-lg flex-none w-auto transition-all shadow-xl shadow-primary/30 active:scale-95">Hire Me <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1"><ArrowForwardIcon /></span></button>
        
                <button className="projects bg-transparent hover:bg-white/5 border border-white/5 px-8 py-4 rounded-lg font-mono flex-none w-auto active:scale-95" onClick={() => setOpen(true)}>./view-projects</button>
        
            </div>
    
        </div>

        {isOpen && (
        <div id='portfolio' className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40"
            onClick={() => setOpen(false)} // clicking outside closes modal
        >
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 w-[90%] h-[80%] max-w-4xl shadow-2xl relative"
            onClick={(e) => e.stopPropagation()} // stop closing when clicking inside
            >
            {/* Modal content here */}
            <div className='absolute top-4 right-6 rounded-lg' onClick={() => setOpen(false)}><CloseIcon /></div>
            <h2 className="text-white text-sm text-primary font-bold mb-4">My Portfolio</h2>
            {/* <p className="text-white/90">Showcase your projects here.</p> */}
            <Carousel className=' absolute w-full h-auto' />
            </div>
        </div>
        )}

        <div className="imgSection relative group  w-full lg:w-1/2 h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-100 group-hover:duration-200">
            </div>
            <div className="relative bg-slate-900 border border-white/5 rounded-xl aspect-square overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#1e293b_2px,_transparent_2px)] bg-[length:24px_24px]">    
                </div>
                <div className="relative z-10 w-full p-8 font-mono text-sm">
                    <div className="code-snippet-bg rounded-lg p-6 border border-white/10 shadow-2xl">
                        <div className="flex gap-2 mb-4">
                            <div className="size-3 rounded-full bg-red-500/50"></div>
                            <div className="size-3 rounded-full bg-amber-500/50"></div>
                            <div className="size-3 rounded-full bg-emerald-500/50"></div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-blue-400"><span className="text-purple-400">const</span> dev = &#123; </p>
                            <p className="pl-4 text-slate-300">name: <span className="text-emerald-400">'ngaji.the_dev'</span>,</p>
                            <p className="pl-4 text-slate-300">role: <span className="text-emerald-400">'Fullstack Architect'</span>,</p>
                            <p className="pl-4 text-slate-300">vision: <span className="text-emerald-400">'Socially Integrated Tech'</span>,</p>
                            <p className="pl-4 text-slate-300">stack: [</p>
                            <p className="pl-8 text-emerald-400">'React', 'Next.js', 'PostgreSQL'</p>
                            <p className="pl-4 text-slate-300">],</p>
                            <p className="pl-4 text-slate-300">status: <span className="text-amber-400">'Available for hire'</span></p>
                            <p className="text-blue-400">&#125;;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

  )
}

export default HeroSection