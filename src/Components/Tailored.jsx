import React, { useRef, useEffect, useState } from 'react'
import market from '../assets/images/market.png'
import content from '../assets/images/content.png'
import HR from '../assets/images/HR.png'
import design from '../assets/images/design.png'
import develop from '../assets/images/development.png'
import finance from '../assets/images/finance.png'
import education from '../assets/images/development.png'
import legal from '../assets/images/legal.png'

function Tailored() {
  // Animation state for each card and header
  const [visible, setVisible] = useState(Array(8).fill(false));
  const [headerVisible, setHeaderVisible] = useState(false);
  const cardRef0 = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const cardRef4 = useRef(null);
  const cardRef5 = useRef(null);
  const cardRef6 = useRef(null);
  const cardRef7 = useRef(null);
  const cardRefs = React.useMemo(() => [cardRef0, cardRef1, cardRef2, cardRef3, cardRef4, cardRef5, cardRef6, cardRef7], []);
  const headerRef = useRef(null);

  useEffect(() => {
    // Cards observer
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
            }, idx * 120); // stagger
          } else {
            setVisible(v => {
              if (!v[idx]) return v;
              const next = [...v];
              next[idx] = false;
              return next;
            });
          }
        },
        { threshold: 0.15 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });
    // Header observer
    const headerObserver = new window.IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    if (headerRef.current) headerObserver.observe(headerRef.current);
    return () => {
      observers.forEach(observer => observer.disconnect());
      headerObserver.disconnect();
    };
  }, [cardRefs]);

  // Animation directions for each card (bottom, top, left-bottom, repeat)
  const anims = [
    'opacity-0 translate-y-16', // bottom
    'opacity-0 -translate-y-16', // top
    'opacity-0 -translate-x-16 translate-y-16', // left-bottom
    'opacity-0 translate-y-16', // bottom
    'opacity-0 -translate-y-16', // top
    'opacity-0 -translate-x-16 translate-y-16', // left-bottom
    'opacity-0 translate-y-16', // bottom
    'opacity-0 -translate-y-16', // top
  ];
  const animsIn = Array(8).fill('opacity-100 translate-x-0 translate-y-0');
  // Header animation
  const headerAnim = headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  const cards = [
    { img: market, label: 'Marketing', bg: 'bg-[#DBEAFE]' },
    { img: content, label: 'Content Creation', bg: 'bg-[#F3E8FF]' },
    { img: HR, label: 'HR / Recruiting', bg: 'bg-[#FEE2E2]' },
    { img: design, label: 'Design', bg: 'bg-[#DCFCE7]' },
    { img: develop, label: 'Development', bg: 'bg-[#FEF9C3]' },
    { img: finance, label: 'Finance', bg: 'bg-[#E0E7FF]' },
    { img: education, label: 'Education', bg: 'bg-[#FCE7F3]' },
    { img: legal, label: 'Legal', bg: 'bg-[#FFEDD5]' },
  ];

  return (
    <section id='showcase' className='bg-[#F9FAFB] overflow-x-hidden'>
      <div className='py-17'>
        <div ref={headerRef} className={`flex flex-col gap-7 justify-center text-center items-center mt-10 transition-all duration-700 ease-out ${headerAnim}`} style={{ transitionProperty: 'opacity, transform' }}>
          <h1 className='text-[#13072C] font-bold text-2xl md:text-3xl lg:text-4xl'>Tailored for Your Profession</h1>
          <p className='text-[#374151] text-[18px]'>Abordi provides personalized AI workspaces for professionals across
            <br className='hidden sm:block' /> industries</p>
        </div>
        <div className='flex flex-wrap gap-7 justify-center mt-10'>
          {cards.map((card, idx) => (
            <div
              key={card.label}
              ref={cardRefs[idx]}
              className={`w-70 ${card.bg} flex flex-col justify-center items-center gap-2 py-3 rounded-xl hover:shadow-md duration-700 transition-all ease-out ${visible[idx] ? animsIn[idx] : anims[idx]}`}
              style={{ transitionProperty: 'opacity, transform' }}
            >
              <div className='bg-white p-3 rounded-full'>
                <img className='w-10' src={card.img} alt={card.label} />
              </div>
              <h1>{card.label}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tailored