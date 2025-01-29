import Canvas from './Canvas';
import './index.css';
import data from './data';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to('body', {
            color: '#000',
            backgroundColor: '#fd2c2a',
            duration: 1.2,
            ease: 'power2.inOut',
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: 'power2.inOut',
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: 'all',
              });
            },
          });
        } else {
          gsap.to('body', {
            color: 'black',
            backgroundColor: '#fff',
            duration: 1.2,
            ease: 'power2.inOut',
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingRef.current;
    headingElement.addEventListener('click', handleClick);

    return () => headingElement.removeEventListener('click', handleClick);
  }, []);
  return (
    <>
      <span
        ref={growingSpan}
        className='growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5'></span>
      <div className='w-full relative min-h-screen font-[Helvetica_Now_Display]'>
        {showCanvas && data[0].map((item, index) => <Canvas details={item} key={index} />)}
        <div className='w-full relative z-[1] h-screen text-black '>
          <nav className='w-full p-8 flex justify-between z-50'>
            <div className='brand text-2xl font-regular'>thirtysixstudios</div>
            <div className='links flex gap-10'>
              {['What we do', 'Who we are', 'How we give back', 'Talk to us'].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className='text-lg hover:text-gray-300'>
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className='textcontainer w-full px-[20%]'>
            <div className='text w-[40%]'>
              <h3 className='text-4xl leading-[1.2]'>
                At Thirtysixstudio, we build immersive digital experiences for brands with a
                purpose.
              </h3>
              <p className='text-md w-[80%] mt-10 font-normal'>
                We’re a boutique production studio focused on design, motion, and creative
                technology, constantly reimagining what digital craft can do for present-time ads
                and campaigns.
              </p>
              <p className='text-md mt-10'>Scroll</p>
            </div>
          </div>
          <div className='w-full absolute bottom-0 left-10'>
            <h1 ref={headingRef} className='text-[17rem] font-normal tracking-tight leading-none'>
              Thirtysixstudio
            </h1>
          </div>
        </div>
      </div>
      <div className='w-full relative h-screen text-black mt-32 px-10'>
        {showCanvas && data[1].map((item, index) => <Canvas details={item} key={index} />)}
        <h1 className='text-6xl tracking-tighter'>about the brand</h1>
        <p className='text-3xl leading-[1.8] w-[80%] mt-10 font-light'>
          we are a team of designers, developers, and strategists who are passionate about creating
          digital experiences that are both beautiful and functional, we are a team of designers,
          developers, and strategists who are passionate about creating digital experiences that are
          both beautiful and functional.
        </p>
        <img
          className='w-[60%] mt-10'
          src='https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400'
          alt=''
        />
      </div>
    </>
  );
}

export default App;
