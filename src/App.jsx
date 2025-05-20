import { useState, useEffect } from 'react'
import './App.css'
import { motion } from 'framer-motion'
import Text_rain from './components/text_rain'

function App() {
  const [click, setClick] = useState(false)

  const [rainCount, setRainCount] = useState(5);

  // Cek ukuran layar saat ini
  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // sm
        setRainCount(5);
      } else if (width < 768) {
        // md
        setRainCount(10);
      } else if (width < 1024) {
        // lg
        setRainCount(20);
      } else {
        // xl ke atas
        setRainCount(30);
      }
    };

    updateCount(); // cek saat pertama kali load
    window.addEventListener("resize", updateCount); // update saat resize

    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const generate_text_rain = (number) => {
    const elements = []
    for (let i = 0; i < number; i++) {
      let random_x = Math.floor(Math.random() * 100);
      let random_y = Math.floor(Math.random() * 100);

      elements.push(<Text_rain key={i} text='TESSERACT' x={random_x} y={random_y} />)
    }

    return elements
  }

  return (
    <>
      <div className='bg-black h-auto w-full flex-col-center pt-6 pb-1 px-1 md:px-5 md:pb-5'>

        {/* MAIN HERO */}
        <div className='relative rounded-2xl py-6 px-12 bg-white text-black flex-col-center mt-10'>

          {/* NAV TOP */}
          <div className='absolute -top-12 flex justify-between items-center px-4 mb-20 h-10 w-full'>
            <div className='bg-black text-white w-2/12 h-full flex-center'>
              <h1 className='font-bold pl-2 text-xl'>DIYRA</h1>
            </div>

            <ul className={`absolute group top-14 left-3.5 h-12 w-12 hover:w-11/12 transition-default 
                            flex-center gap-14 bg-black text-white rounded-full
                            ${click ? 'w-11/12' : 'w-12'}`}
              onClick={() => setClick(prev => !prev)} >
              <div className='absolute group-hover:-z-10 w-10 h-10 rounded-full bg-black flex-center text-2xl pb-1 pl-1'>►</div>
              {/* <li className='absolute group-hover:block cursor-pointer flex-center text-2xl'>►</li> */}
              <li className='hidden group-hover:block cursor-pointer'>HOME</li>
              <li className='hidden group-hover:block cursor-pointer'>ABOUT</li>
              <li className='hidden group-hover:block cursor-pointer'>MORE</li>
            </ul>


            <div className='h-full w-3/12 flex'>
              <div className='h-8 w-8 rounded-full ring ring-white'></div>
              <div className='h-6 w-6 rounded-full ring ring-white'></div>
              <div className='h-8 w-8 rounded-full ring ring-white'></div>
              <div className='h-6 w-6 rounded-full ring ring-white'></div>
              <div className='h-8 w-8 rounded-full ring ring-white'></div>
              <div className='h-6 w-6 rounded-full ring ring-white'></div>
              <div className='h-8 w-8 rounded-full ring ring-white'></div>
              <div className='h-6 w-6 rounded-full ring ring-white'></div>
            </div>
          </div>

          {/* IMAGE */}
          <div className='relative my-12 w-full flex-center'>
            <img
              className='relative z-10'
              src="tesseract_hd.gif"
              alt="Tesseract"
              style={{ filter: 'drop-shadow(5px 5px 10px blue)' }}
            />

            {generate_text_rain(rainCount)}

            <p className='absolute top-0 -left-6 tracking-widest text-center z-[1] text-4xl sm:text-6xl md:text-7xl font-black'>TESSERACT</p>
          </div>

          {/* TEXT */}
          <div className='text-justify flex-col-center'>
            {/* <h1 className='bg-[length:200%_auto] text-start text-3xl font-bold mt-12 mb-2 text-shadow-lg'
              style={{
                background: 'linear-gradient(65deg, black, white, black)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
              {text.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    delay: index * 0.05
                  }} >
                  {char}
                </motion.span>
              ))}
            </h1> */}

            <motion.h1
              className="text-start text-xl sm:text-3xl md:text-5xl font-bold mt-12 mb-2 text-shadow-lg"
            >
              {'Unlock the Power of Infinite Possibilities'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  className="bg-gradient-to-r from-black via-white to-black bg-[length:200%_auto] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["400% center", "0% center"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    repeatDelay: 1.5,
                    delay: index * 0.05,
                    ease: "easeInOut",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>


            <p className='mb-12'>
              Step into a new dimension of innovation with our cutting-edge solutions, powered
              by the brilliance of the Tesseract. Discover how we bend space, time, and
              technology to bring your ideas to life.
            </p>

            <button className='btn btn-outline btn-primary btn-responsive mb-12'>
              Get Started
            </button>
          </div>

          {/* NAV BOTTOM */}
          <div className='skeleton w-full h-6 bg-black'>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
