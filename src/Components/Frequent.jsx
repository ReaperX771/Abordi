import React, { useState, useRef, useEffect } from 'react';
import arrowd from '../assets/images/arrowd.png'
import arroww from '../assets/images/arroww.png'

function Frequent() {
  const [show, setShow] = useState(false);
  const [appear, setAppear] = useState(false);
  const [view, setView] = useState(false);
  const [come, setCome] = useState(false);
  const [lap, setLap] = useState(false);
  const [emerge, setEmerge] = useState(false);
  const sectionRef = useRef(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  // Animate section and first answer on scroll into view
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
          } else {
            setSectionVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Helper for question and answer animation
  const questionStyle = (visible, delay = 0) => ({
    transform: visible ? 'translateX(0)' : 'translateX(-40px)',
    opacity: visible ? 1 : 0,
    transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}s`
  });
  const answerStyle = (open) => ({
    maxHeight: open ? '500px' : '0px',
    opacity: open ? 1 : 0,
    overflow: 'hidden',
    transform: open ? 'translateX(0)' : 'translateX(40px)',
    transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)'
  });

  return (
    <section id='faq' className="bg-[#F9FAFB] overflow-x-hidden" ref={sectionRef}>
      <div
        className='py-17'
        style={{
          transform: sectionVisible ? 'translateY(0)' : 'translateY(40px)',
          opacity: sectionVisible ? 1 : 0,
          transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1)'
        }}
      >
        <div className="flex flex-col gap-7 justify-center text-center items-center mt-30 px-4">
          <h1 className="text-[#13072C] font-bold text-2xl md:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="text-[#4B5577] text-[18px] max-w-[600px]">
            Everything you need to know about Abordi and how it can transform your AI workflow.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 mt-10 px-4">
          {/* FAQ 1 */}
          <div className="w-full max-w-[700px]">
            <button
              onClick={() => setShow(!show)}
              className="w-full shadow-md rounded-xl bg-white hover:bg-[#F9FAFB] duration-700 flex items-start justify-between p-4 text-left"
              style={questionStyle(sectionVisible, 0)}
            >
              <span className="flex-1 text-[#13072C] text-lg font-medium">
                What makes Abordi different from using AI tools separately?
              </span>
              <img
                className={`w-6 shrink-0 ml-4 transition-transform duration-700 ${show ? 'rotate-180' : ''}`}
                src={arrowd}
                alt="arrow"
              />
            </button>
            <div className="w-full shadow-md mt-[1px] rounded-xl bg-white" style={answerStyle(show)}>
              <p className="text-[#667085] px-4 py-4 text-left max-w-[650px] leading-relaxed">
                {show && 'Abordi centralizes all your AI tools in one workspace, eliminating the need to switch between multiple applications. Our smart recommendation system learns your preferences and suggests the best tools for your specific tasks, saving you research time and decision fatigue.'}
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="w-full max-w-[700px]">
            <button
              onClick={() => setAppear(!appear)}
              className="w-full shadow-md rounded-xl bg-white hover:bg-[#F9FAFB] duration-700 flex items-start justify-between p-4 text-left"
              style={questionStyle(sectionVisible, 0.05)}
            >
              <span className="flex-1 text-[#13072C] text-lg font-medium">
                How does Abordi know which tools to recommend for my profession?
              </span>
              <img
                className={`w-6 shrink-0 ml-4 transition-transform duration-700 ${appear ? 'rotate-180' : ''}`}
                src={arrowd}
                alt="arrow"
              />
            </button>
            <div className="w-full shadow-md rounded-xl mt-[1px] bg-white" style={answerStyle(appear)}>
              <p className="text-[#667085] px-4 py-4 text-left max-w-[650px] leading-relaxed">
                {appear && 'We analyze the most effective tools used by professionals in your field and supplement this with machine learning that adapts to your specific usage patterns. The more you use Abordi, the more personalized your recommendations become.'}
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="w-full max-w-[700px]">
            <button
              onClick={() => setView(!view)}
              className="w-full shadow-md rounded-xl bg-white hover:bg-[#F9FAFB] duration-700 flex items-start justify-between p-4 text-left"
              style={questionStyle(sectionVisible, 0.1)}
            >
              <span className="flex-1 text-[#13072C] text-lg font-medium">
                Can I add my own custom AI tools to Abordi?
              </span>
              <img
                className={`w-6 shrink-0 ml-4 transition-transform duration-700 ${view ? 'rotate-180' : ''}`}
                src={arrowd}
                alt="arrow"
              />
            </button>
            <div className="w-full shadow-md rounded-xl mt-[1px] bg-white" style={answerStyle(view)}>
              <p className="text-[#667085] px-4 py-4 text-left max-w-[650px] leading-relaxed">
                {view && 'Yes! Pro and Team plans allow you to integrate custom API keys for supported AI services, letting you connect your existing subscriptions directly to your Abordi workspace.'}
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="w-full max-w-[700px]">
            <button
              onClick={() => setCome(!come)}
              className="w-full shadow-md rounded-xl bg-white hover:bg-[#F9FAFB] duration-700 flex items-start justify-between p-4 text-left"
              style={questionStyle(sectionVisible, 0.15)}
            >
              <span className="flex-1 text-[#13072C] text-lg font-medium">
                Does Abordi work offline?
              </span>
              <img
                className={`w-6 shrink-0 ml-4 transition-transform duration-700 ${come ? 'rotate-180' : ''}`}
                src={arrowd}
                alt="arrow"
              />
            </button>
            <div className="w-full mt-[1px] shadow-md rounded-xl bg-white" style={answerStyle(come)}>
              <p className="text-[#667085] px-4 py-4 text-left max-w-[650px] leading-relaxed">
                {come && "While most AI tools require internet connectivity to function, Abordi's interface can operate in a limited offline mode, allowing you to access previously generated content and prepare queries for when you're back online."}
              </p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="w-full max-w-[700px]">
            <button
              onClick={() => setLap(!lap)}
              className="w-full shadow-md rounded-xl bg-white hover:bg-[#F9FAFB] duration-700 flex items-start justify-between p-4 text-left"
              style={questionStyle(sectionVisible, 0.2)}
            >
              <span className="flex-1 text-[#13072C] text-lg font-medium">
                How does Abordi handle my data and privacy?
              </span>
              <img
                className={`w-6 shrink-0 ml-4 transition-transform duration-700 ${lap ? 'rotate-180' : ''}`}
                src={arrowd}
                alt="arrow"
              />
            </button>
            <div className="w-full shadow-md mt-[1px] rounded-xl bg-white" style={answerStyle(lap)}>
              <p className="text-[#667085] px-4 py-4 text-left max-w-[650px] leading-relaxed">
                {lap && "We take privacy seriously. Abordi doesn't store the content you create with AI tools — it remains yours alone. We only collect anonymous usage statistics to improve our recommendations. For full details, please see our Privacy Policy."}
              </p>
            </div>
          </div>

          {/* FAQ 6 */}
          <div className="w-full max-w-[700px]">
            <button
              onClick={() => setEmerge(!emerge)}
              className="w-full shadow-md rounded-xl bg-white hover:bg-[#F9FAFB] duration-700 flex items-start justify-between p-4 text-left"
              style={questionStyle(sectionVisible, 0.25)}
            >
              <span className="flex-1 text-[#13072C] text-lg font-medium">
                Can I switch between professions in my account?
              </span>
              <img
                className={`w-6 shrink-0 ml-4 transition-transform duration-700 ${emerge ? 'rotate-180' : ''}`}
                src={arrowd}
                alt="arrow"
              />
            </button>
            <div className="w-full shadow-md rounded-xl mt-[1px] bg-white" style={answerStyle(emerge)}>
              <p className="text-[#667085] px-4 py-4 text-left max-w-[650px] leading-relaxed">
                {emerge && "Absolutely. While you'll select a primary profession when setting up your account, you can easily switch between different professional profiles or create custom workspaces that blend tools from multiple professions."}
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center gap-7 pt-20 items-center'>
          <h1 className='text-[#4B5563] text-lg'>Still have questions? We're here to help.</h1>
          <div className='bg-[#1154fc] cursor-pointer hover:bg-[#1D4ED8] duration-700 flex gap-3 px-5 py-3 rounded-md'>
            <h1 className='text-white font-bold'>Contact Support</h1>
            <img className='w-5' src={arroww}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Frequent;
