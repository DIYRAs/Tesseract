import './App.css'
import { motion } from 'framer-motion'

function App() {
  const text = 'Unlock the Power of Infinite Possibilities'
  const text_tesseract = 'TESSERACT'

  return (
    <>
      <div className='bg-black h-auto w-full flex-col-center py-12 px-8'>

        {/* MAIN HERO */}
        <div className='relative rounded-2xl py-6 px-12 bg-white text-black flex-col-center mt-10'>

          {/* NAV TOP */}
          <div className='absolute -top-12 flex justify-between items-center px-4 mb-20 h-10 w-full'>
            <div className='bg-black text-white w-2/12 h-full flex-center'>
              <h1 className='font-bold pl-2 text-xl'>DIYRA</h1>
            </div>

            <ul className='absolute group top-14 left-3.5 h-12 w-12 hover:w-11/12 transition-default flex-center gap-14 bg-black text-white rounded-full'>
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
          <div className='relative my-12'>
            <img
              className='relative z-10'
              src="tesseract_hd.gif"
              alt="Tesseract"
              style={{ filter: 'drop-shadow(5px 5px 10px blue)' }}
            />

            <p className='absolute -top-2 -left-21 [writing-mode:vertical-rl] [text-orientation:upright] tracking-widest text-center'>
              {text_tesseract.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    delay: index * 0.1
                  }} >
                  {char}
                </motion.span>
              ))}
            </p>
            <p className='absolute top-0 -left-10 tracking-widest text-center z-[1] text-6xl font-black'>TESSERACT</p>
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
              className="text-start text-3xl font-bold mt-12 mb-2 text-shadow-lg"
            >
              {text.split('').map((char, index) => (
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
