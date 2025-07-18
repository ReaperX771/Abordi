import React, { useRef, useEffect, useState } from 'react'
import quote from '../assets/images/quotes.png'
import SJ from '../assets/images/SJ.jpg'
import MC from '../assets/images/MC.png'
import PP from '../assets/images/PP.jpg'

function What() {
  // Animation state for each card and header
  const [visible, setVisible] = useState([false, false, false]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const cardRef0 = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Cards observer
    const cardRefs = [cardRef0, cardRef1, cardRef2];
    const observers = cardRefs.map((ref, idx) => {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible(v => {
                if (v[idx]) return v;
                const next = [...v];
                next[idx] = true;
                return next;
              });
            }, idx * 180); // stagger
          } else {
            setVisible(v => {
              if (!v[idx]) return v;
              const next = [...v];
              next[idx] = false;
              return next;
            });
          }
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });
    // Header observer
    const headerObserver = new window.IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (headerRef.current) headerObserver.observe(headerRef.current);
    return () => {
      observers.forEach(observer => observer.disconnect());
      headerObserver.disconnect();
    };
  }, []);

  // Animation directions for each card
  const anims = [
    // Card 1: from bottom
    'opacity-0 translate-y-16',
    // Card 2: from top
    'opacity-0 -translate-y-16',
    // Card 3: from left bottom (diagonal up)
    'opacity-0 -translate-x-16 translate-y-16',
  ];
  const animsIn = [
    'opacity-100 translate-x-0 translate-y-0',
    'opacity-100 translate-x-0 translate-y-0',
    'opacity-100 translate-x-0 translate-y-0',
  ];
  // Header animation
  const headerAnim = headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-70';

  return (
    <section id='testimonial' className='overflow-x-hidden'>
        <div className='py-1'>
            <div ref={headerRef} className={`flex flex-col gap-7 justify-center text-center items-center mt-30 transition-all duration-700 ease-out ${headerAnim}`} style={{ transitionProperty: 'opacity, transform' }}>
                <h1 className='text-[#13072C] font-bold text-2xl md:text-3xl lg:text-4xl'>What Professionals Say</h1>
                <p className='text-[#374151] text-lg lg:text-xl' >Industry experts who've transformed their AI workflow with Abordi</p>
            </div>


            <div className='flex flex-wrap gap-7 mt-20 justify-center mb-20 ml-5 mr-5 md:mr-0 md:ml-0 '>
              {/* Card 1 */}
              <div
                ref={cardRef0}
                className={`w-100 p-3 bg-[#F9FAFB] shadow-md rounded-xl hover:scale-102 lg:hover:scale-107 duration-700 flex flex-col gap-7 transition-all ease-out ${visible[0] ? animsIn[0] : anims[0]}`}
                style={{ transitionProperty: 'opacity, transform' }}
              >
                <img className='w-5' src={quote}/>
                <p className='text-[#1F2937] text-lg italic'>Abordi completely transformed how I use AI
                  <br className='hidden sm:block'/> in my marketing campaigns. Everything I
                  <br className='hidden sm:block'/> need is now in one place.</p>

                  <div className='flex'>
                      <img className='w-15 rounded-full' src={SJ}/>

                      <div>
                          <h1 className='text-[#13072C] font-bold text-lg'>Sarah Johnson</h1>
                          <p className='text-[#4B5563] text-sm'>Marketing Director, TechGrowth</p>
                      </div>
                  </div>
              </div>

              {/* Card 2 */}
              <div
                ref={cardRef1}
                className={`w-100 p-3 bg-[#F9FAFB] shadow-md rounded-xl hover:scale-102 lg:hover:scale-107 duration-700 flex flex-col gap-7 transition-all ease-out ${visible[1] ? animsIn[1] : anims[1]}`}
                style={{ transitionProperty: 'opacity, transform' }}
              >
                <img className='w-5' src={quote}/>
                     <p className='text-[#1F2937] text-lg italic'>As a content creator, I was overwhelmed by
                  <br className='hidden sm:block'/>the number of AI tools. Abordi curates
                 <br className='hidden sm:block'/> exactly what I need when I need it.</p>

                  <div className='flex'>
                      <img className='w-15 rounded-full' src={MC}/>
                      <div>
                          <h1 className='text-[#13072C] font-bold text-lg'>Michael Chen</h1>
                          <p className='text-[#4B5563] text-sm'>Content Strategist, CreativeHive</p>
                      </div>
                  </div>
              </div>

              {/* Card 3 */}
              <div
                ref={cardRef2}
                className={`w-100 p-3 bg-[#F9FAFB] shadow-md rounded-xl hover:scale-102 lg:hover:scale-107 duration-700 flex flex-col gap-7 transition-all ease-out ${visible[2] ? animsIn[2] : anims[2]}`}
                style={{ transitionProperty: 'opacity, transform' }}
              >
                <img className='w-5' src={quote}/>
                <p className='text-[#1F2937] text-lg italic'>The smart recommendations have
                  <br/> introduced me to AI tools I didn't know
                  <br/> existed but now can't live without.</p>

                  <div className='flex'>
                      <img className='w-15 rounded-full' src={PP}/>

                      <div>
                          <h1 className='text-[#13072C] font-bold text-lg'>Priya Patel</h1>
                          <p className='text-[#4B5563] text-sm'>HR Manager, InnovateHR</p>
                      </div>
                  </div>
              </div>


            </div>
        </div>
    </section>
  )
}

export default What