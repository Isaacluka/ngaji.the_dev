import React from 'react'

const NavBar = () => {
  return (
    <header className='w-full py-5 px-30 sm:px-10 flex justify-between items-center sticky top-0 z-50 bg-white'>
        <nav className='flex w-full screen-max-width '>
            <div className="logo">
                <h1 className='sm:text-2xl lg:text-4xl'>/ngaji.the_dev</h1>
            </div>
            <div className='flex flex-1 gap-20 justify-center items-center max-sm:hidden'>
                {['Portfolio', 'Pricing', 'Contact'].map((nav) => (
                    <div key={nav}>
                        {nav}
                    </div>
                ))}
            </div>
            <button className="callToAction max-sm:hidden">
                Hire Me
            </button>
        </nav>
    </header>
  )
}

export default NavBar