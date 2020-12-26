import styled, { ThemeProvider } from 'styled-components'
import { useState, useRef, useEffect } from 'react'

import './scss/home.scss'
import Profile from './profile_p'
import AboutMe from './about_me_p'
import Skill from './skill_p'
import Portfolio from './portfolio_p'
import Experience from './experience_p'
import Navbar from './navbar'
import Theme from '../theme'


const Test = styled.div`
    background-color: ${c => console.log('log basic', c)};
`

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.bg};
    overflow: hidden;
`

const ContentWrapper = styled.div`
    padding: 10vh 0;
    ${({ theme}) => theme.desktop`
        padding: 15vh 20.1% 0;
    `}
`

const Home = () => {
    
    const [theme, setTheme] = useState(Theme.light)
    const [isDark, setIsDark] = useState(false)
    const aboutRef = useRef(null)
    const skillRef = useRef(null)
    const experienceRef = useRef(null)
    const portfolioRef = useRef(null)
    const bottomRef = useRef(null)

    useEffect(() => {
        const selectedTheme = JSON.parse(localStorage.getItem('theme'))
        if (selectedTheme) {
            setIsDark(selectedTheme)
            setTheme(selectedTheme ? Theme.dark : Theme.light)
        }
    }, [])

    const changeTheme = args => {
        localStorage.setItem('theme', args)
        setIsDark(args)
        setTheme(args ? Theme.dark : Theme.light)
    }

    const scrollToTop = () => window.scrollTo(0, 0)
    const scrollToAbout = () => aboutRef.current.scrollIntoView()
    const scrollToSkill = () => skillRef.current.scrollIntoView()
    const scrollToExperience = () => experienceRef.current.scrollIntoView()
    const scrollToPortfolio = () => portfolioRef.current.scrollIntoView()
    const scrollToBottom = () => bottomRef.current.scrollIntoView()

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Test />
                <h1 style={{ display: 'none' }}>Kukuh Baiquni</h1>
                <ContentWrapper>
                    <Navbar
                        scrollToTop={scrollToTop}
                        scrollToAbout={scrollToAbout}
                        scrollToSkill={scrollToSkill}
                        scrollToExperience={scrollToExperience}
                        scrollToPortfolio={scrollToPortfolio}
                        scrollToBottom={scrollToBottom}
                        changeTheme={changeTheme}
                        isDark={isDark}
                    />
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
                </ContentWrapper>
            </Wrapper>
        </ThemeProvider>
    )
}

export default Home