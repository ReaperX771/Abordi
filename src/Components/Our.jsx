import React, { useRef, useEffect, useState } from 'react'
import team from '../assets/images/team.jpg'
import arroww from '../assets/images/arroww.png'

function Our() {
  const sectionRef = useRef(null);
  const storyRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStoryVisible(true);
          } else {
            setStoryVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (storyRef.current) observer.observe(storyRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className='bg-[#F9FAFB] overflow-x-hidden ' ref={sectionRef}>
      <div className='flex flex-col items-center w-full px-4 sm:px-0'>
        {/* Image and mission section */}
        <div
          className='flex flex-col items-center bg-white rounded-lg shadow-lg hover:scale-103 xl:hover:scale-105 duration-700 w-full max-w-6xl py-8 sm:p-8 mx-0 xl:mx-0 mt-20 lg:ml-0 lg:mr-0'
          style={{
            transform: visible ? 'translateX(0)' : 'translateX(100px)',
            opacity: visible ? 1 : 0,
            transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1)'
          }}
        >
          <img className='w-290 h-70 object-cover px-3 rounded-lg' src={team}/>
          <div
            className='flex flex-col gap-7 w-full px-3 mt-6'
            style={{
              transform: visible ? 'translateX(0)' : 'translateX(100px)',
              opacity: visible ? 1 : 0,
              transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1) 0.2s'
            }}
          >
            <h1 className='text-[#13072C] text-2xl lg:text-3xl font-bold'>Our mission</h1>
            <p className='text-[#374151] text-[16px] '>We're committed to bringing clarity to the AI landscape by providing professionals with exactly the tools they need—no more, no less. Our mission is to
              <br className='hidden sm:block'/> make AI accessible, organized, and purposeful for everyone.</p>
          </div>
        </div>
        {/* Our Story section, aligned with mission section's left edge, no background */}
        <div
          ref={storyRef}
          className='flex flex-col w-full max-w-6xl mx-0 xl:mx-0 mt-5 lg:ml-0 lg:mr-0'
          style={{
            transform: storyVisible ? 'translateX(0)' : 'translateX(100px)',
            opacity: storyVisible ? 1 : 0,
            transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1) 0.1s'
          }}
        >
          <div className='flex flex-col gap-7 w-full mt-6'>
            <h1 className='text-[#13072C] text-2xl lg:text-4xl font-bold'>Our Story</h1>
            <p className='text-[#4F46E5] text-2xl'>We built Abordi to bring order to the AI chaos.</p>
            <p className='text-[#374151] text-[17px]'>With hundreds of tools launching every month, professionals are overwhelmed.</p>
            <p className='text-[#667085] text-[20px]'>Too many choices. No clear path.</p>
            <p className='text-[#374151] text-[17px]'>
              Abordi solves that by offering a unified AI workspace—curated by profession, powered by smart recommendations, and packed with the best tools in one
              <br className='hidden sm:block'/> seamless space.
            </p>
            <p className='text-[#667085] text-[20px] font-bold'>No tabs. No noise. Just results.</p>
          </div>
          <div className='flex items-center gap-3 mt-6 cursor-pointer'>
            <div className='flex items-center gap-3 w-full max-w-6xl bg-[#4F46E5] rounded-md px-5 py-3 hover:bg-[#4338CA] duration-300'>
              <h1 className='text-white font-semibold'>Learn more about our team</h1>
              <img className='w-6' src={arroww}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Our