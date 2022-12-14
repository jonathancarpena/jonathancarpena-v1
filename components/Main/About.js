import { useEffect, useState } from 'react'

// Next
import Image from 'next/image'

// Framer
import { motion, useAnimation } from 'framer-motion'

// Hooks
import useScroll from '../../lib/hooks/useScroll'
import useWindowDimensions from '../../lib/hooks/useWindowDimensions'
import { useDarkMode } from '../../lib/context/ThemeProvider'


// Image
import Avatar from '../../public/avatar.png'

// Icons 
import { IoHandRightSharp } from 'react-icons/io5'


function About() {
    const scroll = useScroll()
    const darkMode = useDarkMode()
    const controls = useAnimation()
    const [handWave, setHandWave] = useState(false)
    const { width } = useWindowDimensions()



    useEffect(() => {

        if (scroll >= 320 && !handWave) {
            controls.start("initial")
            setTimeout(() => {
                controls.start("expand")
                setTimeout(() => {
                    controls.start("normal")
                    setTimeout(() => {
                        controls.start("wave")
                    }, [300])
                }, [500])
            }, [1500])
            setHandWave(true)
        }


    }, [scroll, controls, handWave])



    const card = {
        initial: { opacity: 0, y: '70%', },
        animate: {
            opacity: 1, y: 0,
            transition: {
                type: "spring",
                bounce: 0.3,
                easeIn: "easeIn",
                delayChildren: 0.25,
                staggerChildren: 0.5,
            }
        },
        exit: {
            opacity: 0, y: '35%', transition: {
                easeIn: "easeInOut"
            }
        },
    }
    const description = {
        initial: { opacity: 0, x: 200 },
        animate: {
            opacity: 1, x: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    }

    const avatarContainer = {
        initial: { opacity: 0, y: 200 },
        animate: {
            opacity: 1, y: 0,
            transition: {
                when: "beforeChildren",
                type: "spring",
                bounce: 0.3,
                duration: 0.5
            }
        }
    };

    const avatar = {
        initial: { opacity: 0, scale: 0.3 },
        animate: {
            opacity: 1, scale: 1,
            transition: {
                type: "spring",
                bounce: 0.5,
                duration: 0.8
            }
        }
    };


    const hand = {
        initial: { scale: 0, opacity: 0 },
        expand: { scale: 1.5, opacity: 1, transition: { easeIn: "easeIn", type: 'spring' } },
        normal: { scale: 1, transition: { easeIn: "easeIn", type: 'spring', bounce: 0.4, } },
        wave: {
            rotate: '12deg',
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.4
            }
        }
    }

    const svgContainer = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.5,
            }
        }
    }


    const draw = {
        initial: {
            opacity: 0,
            pathLength: 0
        },
        animate: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 1
            }
        }
    }


    const container = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 1
            }
        }
    }

    return (
        <motion.section
            variants={width > 500 ? container : null}
            initial="initial"
            exit="exit"
            whileInView="animate"
            viewport={{ once: true, amount: 0.0001 }}
            id='about' className='   z-0 flex flex-col justify-center items-center min-h-screen  lg:px-10 xl:px-80'>

            {/* Header */}
            <div className='relative flex justify-center mb-10 items-center  lg:space-x-5 '>
                <h3 className='tracking-tight text-6xl font-design  font-bold md:text-7xl lg:text-[6rem] '>
                    Welcome
                </h3>
                <span className='w-[65px] h-[65px] ml-3 mb-1 md:w-[70px] md:h-[70px] md:mb-1 lg:w-[100px] lg:h-[100px] lg:mr-0  lg:mb-4'>
                    <motion.svg
                        variants={width > 500 ? svgContainer : null}
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%" height="100%" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="text-accent-500">
                        <motion.path variants={draw} d="M18 8h1a4 4 0 0 1 0 8h-1"></motion.path>
                        <motion.path variants={draw} d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></motion.path>
                        <motion.line variants={draw} x1="6" y1="1" x2="6" y2="4"></motion.line>
                        <motion.line variants={draw} x1="10" y1="1" x2="10" y2="4"></motion.line>
                        <motion.line variants={draw} x1="14" y1="1" x2="14" y2="4"></motion.line>
                    </motion.svg>
                </span>
            </div>

            {/* Card */}
            <motion.div
                variants={width > 500 ? card : null}
                initial="initial"
                exit="exit"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
                className={`${darkMode ? 'bg-dark' : 'bg-lighter'} mx-12  lg:max-w-[1300px]  relative overflow-hidden drop-shadow-xl rounded-xl flex flex-col space-y-6 p-6 items-center lg:space-y-0 lg:space-x-12  lg:p-10 lg:flex-row`}>

                {/* Mobile Header */}
                <div className=' w-full inline-block lg:hidden '>
                    <h3 className='bg-accent-500  rounded-lg text-lighter relative  text-[2rem] text-center '>
                        Nice to meet you!
                    </h3>
                </div>


                {/* Avatar */}
                <motion.div
                    variants={avatarContainer}
                    className=' flex justify-center items-center rounded-2xl ring-8 ring-accent-600 bg-accent-500 lg:right-10 top-2 md:top-1 lg:top-0 relative min-w-[300px] min-h-[350px] md:min-w-[400px] md:min-h-[400px] max-w-[400px] max-h-[400px] '>
                    <motion.div
                        variants={avatar}
                        className='min-w-[300px] min-h-[350px] md:min-w-[400px] md:min-h-[400px] max-w-[400px] max-h-[400px] drop-shadow-[12px_12px_8px_rgba(0,0,0,0.7)] '>
                        <Image
                            placeholder='blur'
                            src={Avatar}
                            alt='avatar'
                            layout='fill'
                            objectFit='contain'
                            priority
                        />
                    </motion.div>

                    {/* Mobile Hand */}
                    <motion.span
                        variants={hand}
                        animate={controls}
                        className='lg:hidden absolute top-1 -right-2 '
                    >
                        <IoHandRightSharp className='text-[5rem] text-yellow-500 ' />
                    </motion.span>
                </motion.div>


                {/* Description */}
                <motion.div
                    variants={width > 500 ? description : null}
                    className='  flex flex-col lg:space-y-5 relative '>

                    {/* Header */}
                    <div className='relative hidden lg:flex w-max'>
                        <h3 className='bg-accent-500 px-3 rounded-lg text-lighter relative  font-design text-[2.5rem] text-center lg:text-start lg:text-[3.5rem] lg:right-3'>
                            Nice to meet you!
                        </h3>

                        <motion.span
                            variants={hand}
                            animate={controls}
                            className='hidden lg:block   '
                        >
                            <IoHandRightSharp className='text-[5rem] text-yellow-500 ' />
                        </motion.span>
                    </div>


                    {/* Details */}
                    <div className=' w-max mt-5 mb-[1rem]  lg:mb-0 grid lg:grid-cols-2 text-base lg:text-lg '>
                        <span className='flex py-2'>
                            <span className='font-semibold uppercase w-[120px] lg:w-max lg:mr-3'>Name:</span>
                            <span>Jonathan Carpena</span>
                        </span>

                        <span className='flex py-2'>
                            <span className='font-semibold uppercase  w-[120px]  lg:w-[100px]'>Job Title:</span>
                            <span>Full Stack Software Engineer</span>
                        </span>
                    </div>

                    {/* Border */}
                    <div className='border-b-2 border-b-neutral-400 w-full mb-[1.3rem] lg:mb-0'></div>

                    {/* Bio */}
                    <div className='flex flex-col space-y-4 text-base lg:text-lg'>
                        <p >
                            {`My name is Jonathan, and I'm a full-stack software engineer specializing in building and designing exceptional digital experiences.`}
                        </p>
                        <p >
                            {`I'm a self starter with a burning passion in developing strong web applications,
                            desigining aesthetic user interfaces, and expanding my ever-growing skillset.`}
                        </p>

                        <p>
                            Outside the professional environment, I enjoy creating lifestyle videos, discovering new restaurants, and going on walks with my dog.
                        </p>
                    </div>



                </motion.div>


            </motion.div>

        </motion.section>
    )
}

export default About