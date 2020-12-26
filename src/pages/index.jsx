import styled, { ThemeProvider } from 'styled-components'
import { useState, useRef, useEffect } from 'react'

import Styled from 'assets/svg/styled.png'
import Javascript from 'assets/svg/javascript.svg'
import ReactJS from 'assets/svg/react.svg'

import Profile from './profile_p'
import AboutMe from './about_me_p'
import Skill from './skill_p'
import Portfolio from './portfolio_p'
import Experience from './experience_p'
import Navbar from './navbar'
import Theme from '../theme'

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.bg};
    overflow: hidden;
`

const ContentWrapper = styled.div`
    padding: 10vh 0 1.5vh 0;
    color: ${({ theme }) => theme.fontNormal};
    font-size: 2vh;
    text-align: center;
    .built-with {
        font-weight: normal;
        display: flex;
        justify-content: center;
        p {margin-right: 1vh}
        .lst {
            display: flex;
            justify-content: center;
            img {
                width: 3vh;
                object-fit: contain;
                margin-right: 1vh;
            }
        }
    }
    p#author {margin-top: 0}
    ${({ theme }) => theme.desktop`padding:10vh 20.1% 0 20.1%;`}
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    ${({ theme }) => theme.desktop`
        flex-direction: row;
    `};
    p {
        text-align: center;
        margin: 3vh 2vh 0 0;
        ${({ theme }) => theme.desktop`margin: 3vh 2vh 0 0`}
    }
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
                {/* <h1 style={{ display: 'none' }}>Kukuh Baiquni</h1> */}
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
                    <Footer ref={bottomRef}>
                        <p id='cp'>Email: kukuh.baiquni@gmail.com</p>
                        <p id='cp'>Mobile: +62 821 1903 0614</p>
                    </Footer>
                    <div className='built-with'>
                        <p>Built with</p>
                        <div className="lst">
                            <img title='Javascript' src={Javascript} alt='javascript' />
                            <img title='ReactJS' src={ReactJS} alt='ReactJS' />
                            <img title='Styled Components' src={Styled} alt='Styled Components' />
                        </div>
                    </div>
                    <p id='author'>Kukuh Baiquni © 2020</p>
                </ContentWrapper>
            </Wrapper>
        </ThemeProvider>
    )
}

export default Home