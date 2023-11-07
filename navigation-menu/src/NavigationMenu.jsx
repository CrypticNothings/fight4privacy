import { useState } from 'react';
import menuBtn from './assets/icon-menu.svg'
import closeBtn from './assets/icon-menu-close.svg'
export default function Navigation(){
    const[isMenuOpen, setIsMenuOpen]=useState(false)
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    return (
         <>
         <header className="bg-gray-100 p-6 relative font-mono border-b  border-gray-400">
         <nav className="max-w-5xl mx-auto flex items-center justify-between">
         <div className="">
         <a href="." className="text-4xl font-bold capitalize text-gray-950 transition hover:ease-in-out hover:delay-200 hover:duration-300 hover:text-teal-500">fight4Privacy</a>
         </div>
         <button className="md:hidden block" onClick={toggleMenu}>
            {isMenuOpen?(<img src={closeBtn} alt="" />):(<img src={menuBtn} alt="" />)}
            
         </button>
         <div className="space-x-6 md:block hidden">
            <a href="#" className="text-xl font-semibold transition hover:ease-in-out hover:delay-150 hover:duration-200 hover:border-b-2 hover:border-teal-500 ">Home</a>
            <a href="#" className="text-xl font-semibold transition hover:ease-in-out hover:delay-150 hover:duration-200 hover:border-b-2 hover:border-teal-500 ">Blog</a>
            <a href="#" className="text-xl font-semibold transition hover:ease-in-out hover:delay-150 hover:duration-200 hover:border-b-2 hover:border-teal-500 ">Scam</a>
            <a href="#" className="text-xl font-semibold transition hover:ease-in-out hover:delay-150 hover:duration-200 hover:border-b-2 hover:border-teal-500 ">Laws</a>
            <a href="#" className="text-xl font-semibold transition hover:ease-in-out hover:delay-150 hover:duration-200 hover:border-b-2 hover:border-teal-500 ">About</a>
            <a href="#" className="text-xl font-semibold transition hover:ease-in-out hover:delay-150 hover:duration-200 hover:border-b-2 hover:border-teal-500 ">Contact</a>
         </div>
         </nav>
         </header>
         <section className={`absolute top-70 z-10 bg-black right-0 left-0 origin-top animate-open-menu min-h-screen bg-opacity ${isMenuOpen?'block':'hidden'}`}>
         <div className="max-w-sm mx-auto rounded-xl bg-white h-96 flex flex-col items-center my-10">
       <div className="space-y-6  my-8 flex flex-col">
       <a href="#" className="text-xl font-semibold text-teal-700 ">Home</a>
            <a href="#" className="text-xl font-semibold  text-teal-700  ">Blog</a>
            <a href="#" className="text-xl font-semibold  text-teal-700  ">About</a>
            <a href="#" className="text-xl font-semibold  text-teal-700  ">Scam</a>
            <a href="#" className="text-xl font-semibold  text-teal-700  ">Laws</a>
            <a href="#" className="text-xl font-semibold  text-teal-700  ">Contact</a>
       </div>
         </div>
         </section>
         </>
    );


}