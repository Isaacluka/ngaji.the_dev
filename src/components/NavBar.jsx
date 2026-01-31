import React from 'react'
import { navbar } from '../constants'
import SlashLogo from './SlashLogo';

const NavBar = ({setOpen}) => {
    const handleNavClick = (id) => {
        if (id === "portfolio") {
            console.log("portfolio clicked");
            setOpen(true)
            // open modal, open WhatsApp, etc
            return;
        }

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
  });
};

  return (
    <header className='w-full py-5 px-30 sm:px-10 flex justify-content-center lg:justify-between items-center sticky top-0 z-50 bg-[#0a0a0a] border-b border-white/5 glass-nav'>
        <nav className='flex w-full screen-max-width '>
            <div className="logo">
                <h1 className='sm:text-2xl flex gap-2 items-center justify-center font-mono'> 
                <span className='flex gap-2 justify-center items-center'> <SlashLogo size={25} /> ngaji.the_dev </span></h1>  
            </div>
            <div className='flex flex-1 gap-20 justify-center items-center max-sm:hidden text-white '>
                {navbar.map((nav) => (
                    <div className='hover:text-primary' key={nav}>
                        <a 
                            href={`#${nav.id}`}
                            onClick={() => handleNavClick(nav.id)}
                            >{nav.label}
                        </a>
                    </div>
                ))}
            </div>
            <button className="callToAction bg-blue hover:bg-blue/90 px-6 py-2 rounded-lg max-sm:hidden transition-all shadow-xl shadow-primary/30 active:scale-95">
                Hire Me
            </button>
        </nav>
    </header>
  )
}

export default NavBar