import React, { useEffect, useRef, useState } from 'react'
import user from '../assets/images/user.png'
import idea from '../assets/images/idea.png'
import tools from '../assets/images/maintenance.png'
import product from '../assets/images/productivity.png'

function How() {
  const [animate, setAnimate] = useState([false, false, false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimate([true, false, false, false]), 100);
          setTimeout(() => setAnimate([true, true, false, false]), 400);
          setTimeout(() => setAnimate([true, true, true, false]), 700);
          setTimeout(() => setAnimate([true, true, true, true]), 1000);
        } else {
          setAnimate([false, false, false, false]);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const cardAnimations = [
    animate[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20', // left
    animate[1] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-20', // right
    animate[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-20', // bottom
    animate[3] ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-20', // left bottom
  ];

  return (
    <section id='how' className='bg-[#F9FAFB] overflow-x-hidden' ref={sectionRef}>
      <div className='py-1'>
        <div className={`flex flex-col gap-7 justify-center text-center items-center mt-30 transition-all duration-700 ease-in-out ${animate[0] ? 'opacity-100 -translate-x-0 translate-y-0' : 'opacity-0 -translate-x-10 translate-y-10'}`}>
          <h1 className='text-[#13072C] font-bold text-2xl md:text-3xl lg:text-4xl'>How Abordi Works</h1>
          <h1 className='text-[#374151] text-[18px]'>A simple process to transform your AI workflow in minutes</h1>
        </div>
        <div className='flex flex-wrap gap-7 justify-center m-auto mb-20 ml-5 mr-5 md:mr-0 md:ml-0 mt-20p'>
          <div className={`xl:w-150 lg:w-100 flex flex-col gap-3 justify-center pt-10 pb-5 md:pb-5 xl:pb-10 items-center text-center transition-all duration-700 ease-in-out ${cardAnimations[0]}` }>
            <div className='bg-[white] px-7 py-12 rounded-lg shadow-md shadow-[#E2E3E4] relative flex items-center justify-center'>
              <img className='w-17' src={user}/>
              <h1 className='absolute bottom-35 right-25 flex items-center justify-center text-[white] font-bold text-2xl lg:text-2xl bg-[#4F46E5] rounded-full w-11 h-11 m-auto'>{'01'}</h1>
            </div>
            <h1 className='text-[#13072C] font-bold text-xl md:text-2xl'>Select Your Profession</h1>
            <p className='text-[#506268] text-[17px]'>Choose your professional field and let abordi customize your AI workflow.</p>
          </div>
          <div className={`xl:w-150 lg:w-100 flex flex-col gap-3 justify-center pt-10 pb-5 md:pb-5 xl:pb-10 items-center text-center transition-all duration-700 ease-in-out ${cardAnimations[1]}` }>
            <div className='bg-[white] px-7 py-12 rounded-lg shadow-md shadow-[#E2E3E4] relative flex items-center justify-center'>
              <img className='w-17' src={idea}/>
              <h1 className='absolute bottom-35 right-25 flex items-center justify-center text-[white] font-bold text-2xl bg-[#4F46E5] rounded-full w-11 h-11 m-auto'>{'02'}</h1>
            </div>
            <h1 className='text-[#13072C] font-bold text-xl md:text-2xl'>Get Recommendations</h1>
            <p className='text-[#506268] text-[17px]'>Receive personalized AI tool suggestions tailored to your specific needs</p>
          </div>
          <div className={`xl:w-150 lg:w-100 flex flex-col gap-3 justify-center pt-10 pb-5 md:pb-5 xl:pb-10 items-center text-center transition-all duration-700 ease-in-out ${cardAnimations[2]}` }>
            <div className='bg-[white] px-7 py-12 rounded-lg shadow-md shadow-[#E2E3E4] relative flex items-center justify-center'>
              <img className='w-17' src={tools}/>
              <h1 className='absolute bottom-35 right-25  flex items-center justify-center text-[white] font-bold text-2xl bg-[#4F46E5] rounded-full w-11 h-11 m-auto'>{'03'}</h1>
            </div>
            <h1 className='text-[#13072C] font-bold text-xl md:text-2xl'>Use Integrated Tools</h1>
            <p className='text-[#506268] text-[17px]'>Access and use all your AI tools within one unified interface.</p>
          </div>
          <div className={`xl:w-150 lg:w-100 flex flex-col gap-3 justify-center pt-10 pb-5 md:pb-5 xl:pb-10 items-center text-center transition-all duration-700 ease-in-out ${cardAnimations[3]}` }>
            <div className='bg-[white] px-7 py-12 rounded-lg shadow-md shadow-[#E2E3E4] relative flex items-center justify-center'>
              <img className='w-17' src={product}/>
              <h1 className='absolute bottom-35 right-25  flex items-center justify-center text-[white] font-bold text-2xl bg-[#4F46E5] rounded-full w-11 h-11 m-auto'>{'04'}</h1>
            </div>
            <h1 className='text-[#13072C] font-bold text-xl md:text-2xl'>Boost Productivity</h1>
            <p className='text-[#506268] text-[17px]'>Save time and streamline your workflow with an organized AI ecosystem.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default How