import './scss/home.scss'
import Profile from './profile_p'
import AboutMe from './about_me_p'
import Skill from './skill_p'
import Portfolio from './portfolio_p'
import Experience from './experience_p'

import Switch from 'react-switch'
import { useState, useRef, useEffect } from 'react'
import Sun from 'assets/images/sun.png'
import Moon from 'assets/images/moon.png'

import { ReactComponent as UserIcon } from 'assets/icon/profile.svg'
import { ReactComponent as AboutIcon } from 'assets/icon/about.svg'
import { ReactComponent as ExperienceIcon } from 'assets/icon/experience.svg'
import { ReactComponent as PortfolioIcon } from 'assets/icon/portfolio.svg'
import { ReactComponent as ContactIcon } from 'assets/icon/contact.svg'
import { ReactComponent as SkillIcon } from 'assets/icon/skill.svg'

const Home = () => {
    
    const [dark, setDark] = useState(false)
    const aboutRef = useRef(null)
    const skillRef = useRef(null)
    const experienceRef = useRef(null)
    const portfolioRef = useRef(null)
    const bottomRef = useRef(null)

    useEffect(() => {
        const theme = JSON.parse(localStorage.getItem('theme'))
        if (theme) {
            setDark(theme)
        }
    }, [])

    const changeTheme = args => {
        localStorage.setItem('theme', args)
        setDark(args)
    }

    const scrollToTop = () => window.scrollTo(0, 0)
    const scrollToAbout = () => aboutRef.current.scrollIntoView()
    const scrollToSkill = () => skillRef.current.scrollIntoView()
    const scrollToExperience = () => experienceRef.current.scrollIntoView()
    const scrollToPortfolio = () => portfolioRef.current.scrollIntoView()
    const scrollToBottom = () => bottomRef.current.scrollIntoView()

    return (
        <div className={dark ? 'home-container' : 'w-home-container'}>
            <h1 style={{display: 'none'}}>Kukuh Baiquni</h1>
            <div className="content-wrapper">
                <nav>
                    <div onClick={scrollToTop} className="list-section">
                        <UserIcon />
                        <div className='active-indicator' />
                        <p>PROFILE</p>
                    </div>
                    <div onClick={scrollToAbout} className="list-section">
                        <AboutIcon />
                        <div className='active-indicator' />
                        <p>ABOUT ME</p>
                    </div>
                    <div onClick={scrollToSkill} className="list-section">
                        <SkillIcon />
                        <div className='active-indicator' />
                        <p>SKILL AND COMPETENCES</p>
                    </div>
                    <div onClick={scrollToExperience} className="list-section">
                        <ExperienceIcon />
                        <div className='active-indicator' />
                        <p>EXPERIENCE</p>
                    </div>
                    <div onClick={scrollToPortfolio} className="list-section">
                        <PortfolioIcon />
                        <div className='active-indicator' />
                        <p>PORTFOLIO</p>
                    </div>
                    <div onClick={scrollToBottom} className="list-section">
                        <ContactIcon />
                        <div className='active-indicator' />
                        <p>CONTACT ME</p>
                    </div>
                    <div className="list-section">
                        <Switch
                            onChange={changeTheme}
                            checked={dark}
                            onHandleColor='#bababa'
                            offHandleColor='#bababa'
                            offColor='#434343'
                            onColor='#434343'
                            uncheckedIcon={
                                <div className='switch-icon'>
                                    <img src={Sun} alt='sun' />
                                </div>
                            }
                            checkedIcon={
                                <div className='switch-icon'>
                                    <img src={Moon} alt='moon' />
                                </div>
                            }
                        />
                    </div>
                </nav>
                <Profile />
                <AboutMe aboutRef={aboutRef} />
                <Skill skillRef={skillRef} />
                <Experience experienceRef={experienceRef} />
                <Portfolio portfolioRef={portfolioRef} />
                <div ref={bottomRef} id="cp">
                    <p id='cp'>Email: kukuh.baiquni@gmail.com</p>
                    <p id='cp'>Kukuh Baiquni © 2020</p>
                    <p id='cp'>Mobile: +62 821 1903 0614</p>
                </div>
            </div>
        </div>
    )
}

export default Home