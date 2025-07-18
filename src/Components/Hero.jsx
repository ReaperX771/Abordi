import React, { useEffect, useRef, useState } from 'react'
import phone from '../assets/images/phone.webp'
import plays from '../assets/images/plays.png'
import apple from '../assets/images/apple.png'

function Hero() {
  const [showPhone, setShowPhone] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const sectionRef = useRef(null);
  const timeouts = useRef([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPhone(true);
          timeouts.current.push(setTimeout(() => setShowText(true), 500));
          timeouts.current.push(setTimeout(() => setShowButtons(true), 1000));
        } else {
          setShowPhone(false);
          setShowText(false);
          setShowButtons(false);
          timeouts.current.forEach(t => clearTimeout(t));
          timeouts.current = [];
        }
      },
      { threshold: 0.3 }
    );
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
      timeouts.current.forEach(t => clearTimeout(t));
      timeouts.current = [];
    };
  }, []);

  return (
    <section id='home' className='bg-[#F7F8F9] overflow-x-hidden' ref={sectionRef}>
      <div className='flex flex-col items-center justify-between w-[90%] pt-50 m-auto gap-10 py-20'>
        <div className={`transition-all duration-700 ease-in-out ${showPhone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <img className='w-70 lg:w-100 md:w-80 sm:w-80' src={phone} alt='Phone'/>
        </div>

        <div className={`text-center flex flex-col gap-7 transition-all duration-700 ease-in-out ${showText ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className='text-[#13072C]  text-2xl lg:text-5xl font-bold'>One Workspace. <span className='text-[#402CFF]'>Every Tool</span> You Need.</h1>
          <p className='text-[#374151] text-xl'>Abordi is your all-in-one AI command center curated by
            <br className='hidden sm:block'/> profession,powered by intelligence,and built to simplify your
            <br/> workflow. No tabs. No noise.Just results</p>
        </div>

        <div className={`flex flex-col md:flex-row gap-7 text-white cursor-pointer transition-all duration-700 ease-in-out ${showButtons ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className='flex px-7 gap-3 py-2 justify-center items-center rounded-md bg-[#13072C]  hover:scale-110 lg:hover:-translate-x-5 duration-300 lg:duration-500'>
            <img className='w-8 h-8' src={apple} alt='Apple'/>
            <div className=''>
              <h1 className='text-sm/3 tracking-tighter font-extralight'>Download on the</h1>
              <h1 className='text-xl lg:text-2xl tracking-tighter font-medium'>App Store</h1>
            </div>
          </h1>
          <h1 className='flex px-7 py-3 gap-3 justify-center items-center rounded-md bg-[#13072C] hover:scale-110 lg:hover:translate-x-5 duration-300 lg:duration-500'>
            <img className='w-8 h-8' src={plays} alt='Google Play'/>
            <div className='leading-tight'>
              <h1 className='text-sm/3 tracking-tighter font-extralight'>Get it on</h1>
              <h1 className='text-xl lg:text-2xl tracking-tighter font-medium'>Google Play</h1>
            </div>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero