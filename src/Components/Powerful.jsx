import React, { useEffect, useRef, useState } from 'react'
import search from '../assets/images/search.png'
import idea from '../assets/images/idea.png'
import workspace from '../assets/images/workspace.png'
import smartphone from '../assets/images/smartphone.png'

function Powerful() {
  const [animate, setAnimate] = useState([false, false, false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
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
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const cardAnimations = [
    animate[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20', // left
    animate[1] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-20', // right
    animate[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-20', // bottom
    animate[3] ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-20', // left bottom
  ];

  return (
    <section id='features' className='overflow-x-hidden' ref={sectionRef}>
      <div className=''>
        <div className={`flex flex-col gap-7 justify-center text-center items-center mt-30 transition-all duration-700 ease-in-out ${animate[0] ? 'opacity-100 -translate-x-0 translate-y-0' : 'opacity-0 -translate-x-10 translate-y-10'}`}>
          <h1 className='text-[#13072C] font-bold text-2xl md:text-4xl'>Powerful Features for Professionals</h1>
          <h1 className='text-[#374151] text-[18px]' >Everything you need to harness AI tools efficiently,all in one seamless
            <br className='hidden sm:block'/> workspace</h1>
        </div>
        <div className='flex flex-wrap gap-7 justify-center m-auto mb-20 ml-2 mr-2 md:mr-0 md:ml-0 mt-20'>
          <div className={`w-full sm:w-[90%] md:w-[45%] xl:w-150 lg:w-100 rounded-2xl hover:shadow-md hover:shadow-[#cbdbeb] flex bg-[#F9FAFB] flex-col gap-3 justify-center pt-10 pb-5 md:pb-5 xl:pb-10 items-center text-center transition-all duration-700 ease-in-out ${cardAnimations[0]}` }>
            <div className='bg-[#E0E7FF] px-4 py-4 rounded-full '>
              <img className='w-10 ' src={search}/>
            </div>
            <p className='text-[#13072C] font-bold text-xl md:text-2xl'>AI Tool Curation</p>
            <p className='text-[#506268] text-[17px]'>Tools organized specifically for your profession, eliminating the search
              <br className='hidden sm:block'/> for what works best.</p>
          </div>
          <div className={`w-full sm:w-[90%] md:w-[45%] xl:w-150 lg:w-100 rounded-2xl hover:shadow-md hover:shadow-[#cbdbeb] bg-[#F9FAFB] flex flex-col gap-3 pt-10 pb-5 md:pb-5 xl:pb-10 justify-center items-center text-center transition-all duration-700 ease-in-out ${cardAnimations[1]}` }>
            <div className='bg-[#E0E7FF] px-4 py-4 rounded-full '>
              <img className='w-10' src={idea}/>
            </div>
            <p className='text-[#13072C] font-bold text-xl md:text-2xl'>Smart Recommendations</p>
            <p className='text-[#506268] text-[17px]'>Our AI analyzes your needs and suggests the perfect tools for your
              <br className='hidden sm:block'/> specific tasks.</p>
          </div>
          <div className={`w-full sm:w-[90%] md:w-[45%] xl:w-150 lg:w-100 rounded-2xl hover:shadow-md hover:shadow-[#cbdbeb] flex flex-col bg-[#F9FAFB] gap-3 justify-center pt-10 pb-5 md:pb-5 xl:pb-10 items-center text-center transition-all duration-700 ease-in-out ${cardAnimations[2]}` }>
            <div className='bg-[#E0E7FF] px-4 py-4 rounded-full'>
              <img className='w-10' src={workspace}/>
            </div>
            <p className='text-[#13072C] font-bold text-xl md:text-2xl'>Unified Workspace</p>
            <p className='text-[#506268] text-[17px]'>Access all your AI tools in one place without switching between tabs or
              <br className='hidden sm:block'/> applications.</p>
          </div>
          <div className={`w-full sm:w-[90%] md:w-[45%] xl:w-150 lg:w-100 rounded-2xl hover:shadow-md hover:shadow-[#cbdbeb] flex flex-col bg-[#F9FAFB] gap-3 justify-center pt-10 pb-5 md:pb-5 xl:pb-10 items-center text-center transition-all duration-700 ease-in-out ${cardAnimations[3]}` }>
            <div className='bg-[#E0E7FF] px-4 py-4 rounded-full'>
              <img className='w-10' src={smartphone}/>
            </div>
            <p className='text-[#13072C] font-bold text-xl md:text-2xl'>Cross-Platform</p>
            <p className='text-[#506268] text-[17px]'>Seamlessly work across mobile, tablet, and desktop with synchronizedM
              <br className='hidden sm:block'/> workflows.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Powerful