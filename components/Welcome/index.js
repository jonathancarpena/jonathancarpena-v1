// Hooks
import { useChangeScreen } from '../../lib/context/ScreenProvider'

// Framer
import { motion } from 'framer-motion'



function Welcome() {
    const change = useChangeScreen()


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, when: "beforeChildren" } }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            className='overflow-hidden h-screen w-screen flex flex-col items-center justify-center'>

            <button onClick={() => change('main')} >Change Screen</button>
        </motion.div>
    )
}

export default Welcome