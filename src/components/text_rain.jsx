import { motion } from 'framer-motion'

function Text_rain({ text, x, y, }) {

    return (
        <>
            <p className='absolute [writing-mode:vertical-rl] [text-orientation:upright] tracking-widest text-center'
                style={{ left: `${x}%`, top: `${y}%` }}>
                {text.split('').map((char, index) => (
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
        </>
    )
}

export default Text_rain