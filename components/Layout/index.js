// Next
import Head from 'next/head'
import { useRouter } from 'next/router'

// Framer
import { AnimatePresence } from 'framer-motion'

// Hooks
import { useDarkMode } from '../../lib/context/ThemeProvider'
import { useCurrentScreen } from '../../lib/context/ScreenProvider'

// Components
import Navbar from './Navbar'
import Footer from './Footer'



function Layout({ children }) {
    const darkMode = useDarkMode()
    const screen = useCurrentScreen()
    const router = useRouter()
    const pathname = router.pathname.split('/')[1]
    const layoutPages = ["main", "contact", "demo"]
    return (
        <div className={`${darkMode ? 'bg-darker' : 'bg-light'}   w-full min-h-screen flex justify-center `}>
            <Head>
                <title>Jonathan Carpena - Frontend Engineer</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={`${darkMode ? 'bg-darker text-lighter' : 'bg-light text-darker'}   overflow-hidden w-full    min-h-screen flex flex-col items-center`}>

                <AnimatePresence exitBeforeEnter>
                    {(screen !== "welcome" || layoutPages.includes(pathname)) &&
                        <Navbar key="navbar" />
                    }
                </AnimatePresence>

                {children}

                <AnimatePresence exitBeforeEnter>
                    {(screen !== "welcome" || layoutPages.includes(pathname)) &&
                        <Footer key="footer" />
                    }
                </AnimatePresence>

            </div>



        </div>



    )
}

export default Layout