import React from 'react'
import headergraphic from '../assets/headergraphic.jpg'

const Header = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-5xl flex flex-col items-center'>
        <img src={headergraphic} alt="builders" className="w-60 h-86 object-cover my-12"/>
    <h1 className=" bg-gradient-to-b from-white via-slate-200 to-slate-400 inline-block text-transparent bg-clip-text text-8xl font-bold font-Inter leading-none">
    We Build Stuff<br></br>
    We are Builders Hub.
    </h1>
    <p className='text-3xl font-light leading-normal  my-5 text-gray-300'>We are a community of builders and we believe in building projects that we do not leave in between. 
      We collaborate to make the building experience better, faster and more enjoyable.</p></div>
    </div>
    
  )
}

export default Header