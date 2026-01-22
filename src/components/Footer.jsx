import React from 'react'
import { FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer flex flex-col md:flex-row justify-between items-center gap-6 py-10 px-5 lg:px-20 text-center'>
        <p>/ngaji.the_dev</p>

        <p>&copy; 2026 Built with precision by ngaji.the_dev</p>
        
        <div className="socials flex justify-center items-center gap-6">
            {/* Instagram Icon */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} color="#E4405F" /> {/* Customize size and color with props or CSS */}
            </a>

            {/* GitHub Icon */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} color="#333" />
            </a>

        </div>
    </div>
  )
}

export default Footer