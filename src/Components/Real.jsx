import React, { useRef, useEffect, useState } from 'react'
import content from '../assets/images/content.webp'
import arrow from '../assets/images/arrow.png'
import hr from '../assets/images/hr.webp'
import design from '../assets/images/design.webp'

const cards = [
  {
    img: content,
    title: 'Content Creator',
    heading: 'Content Creation Workflow',
    desc: `See how a content marketer uses Abordi to brainstorm, draft, edit, and\noptimize content all in one workspace.`,
    imgFirst: true,
  },
  {
    img: hr,
    title: 'HR / Recruiting',
    heading: 'Recruiting Automation',
    desc: `Discover how HR professionals streamline candidate communications and\nscreening using Abordi's AI tools.`,
    imgFirst: false,
  },
  {
    img: design,
    title: 'Designer',
    heading: 'Design Collaboration',
    desc: `Learn how design teams use Abordi to generate mockups, get feedback, and\niterate designs efficiently.`,
    imgFirst: true,
  },
];

function Real() {
  const cardRefs = useRef([]);
  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute('data-idx'));
          if (entry.isIntersecting) {
            setVisible((prev) => {
              if (!prev[idx]) {
                const updated = [...prev];
                updated[idx] = true;
                return updated;
              }
              return prev;
            });
          } else {
            setVisible((prev) => {
              if (prev[idx]) {
                const updated = [...prev];
                updated[idx] = false;
                return updated;
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id='usecase' className='overflow-x-hidden'>
      <div className='py-17'>
        <div className='flex flex-col gap-7 justify-center text-center items-center mt-20'>
          <h1 className='text-[#13072C] font-bold text-2xl md:text-3xl lg:text-4xl'>Real-World Success Stories</h1>
          <p className='text-[#374151] text-[18px]'>How professionals are using Abordi to transform their workflows</p>
        </div>
        <div>
          {cards.map((card, i) => {
            const imgTranslate = visible[i] ? '0px' : card.imgFirst ? '-100px' : '100px';
            const textTranslate = visible[i] ? '0px' : card.imgFirst ? '100px' : '-100px';
            return (
              <div
                key={i}
                ref={el => cardRefs.current[i] = el}
                data-idx={i}
                className={`flex flex-col lg:flex-row justify-center items-center gap-7${i === 0 ? ' xl:gap-17 mt-17' : ' mt-17'} ml-4 mr-4 lg:ml-0 lg:mr-0`}
              >
                {card.imgFirst && (
                  <div
                    style={{
                      transform: `translateX(${imgTranslate})`,
                      opacity: visible[i] ? 1 : 0,
                      transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1)'
                    }}
                  >
                    <img className='w-160 h-70 rounded-2xl object-cover' src={card.img} alt={card.title} />
                  </div>
                )}
                <div
                  className='flex flex-col gap-3 justify-center'
                  style={{
                    transform: `translateX(${textTranslate})`,
                    opacity: visible[i] ? 1 : 0,
                    transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1)'
                  }}
                >
                  <div className='bg-[#E0E7FF] w-35 text-center rounded-2xl'>
                    <h1 className='text-[#3730A9] text-[16px] font-bold py-1'>{card.title}</h1>
                  </div>
                  <h1 className='text-[#13072C] text-2xl font-bold'>{card.heading}</h1>
                  <p className='text-[#515661] text-[17px]'>
                    {card.desc.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br className='hidden sm:block' />
                      </React.Fragment>
                    ))}
                  </p>
                  <div className='flex gap-3'>
                    <h1 className='text-[#7A74EB] font-bold'>Read full case study </h1>
                    <img className='w-6' src={arrow} />
                  </div>
                </div>
                {!card.imgFirst && (
                  <div
                    style={{
                      transform: `translateX(${imgTranslate})`,
                      opacity: visible[i] ? 1 : 0,
                      transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1)'
                    }}
                  >
                    <img className='w-160 h-70 rounded-2xl object-cover' src={card.img} alt={card.title} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Real