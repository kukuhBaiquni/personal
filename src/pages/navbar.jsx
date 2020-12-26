
import styled from 'styled-components'
import Switch from 'react-switch'

import { ReactComponent as UserIcon } from 'assets/icon/profile.svg'
import { ReactComponent as AboutIcon } from 'assets/icon/about.svg'
import { ReactComponent as ExperienceIcon } from 'assets/icon/experience.svg'
import { ReactComponent as PortfolioIcon } from 'assets/icon/portfolio.svg'
import { ReactComponent as ContactIcon } from 'assets/icon/contact.svg'
import { ReactComponent as SkillIcon } from 'assets/icon/skill.svg'

import Sun from 'assets/images/sun.png'
import Moon from 'assets/images/moon.png'


const NavbarContainer = styled.nav`
    z-index: 100;
    background-color: ${({ theme }) => theme.block};
    border-bottom: .3vh solid ${({ theme }) => theme.font};
    width: 100%;
    height: 10vh;
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => theme.desktop`
            width: 60%;
        `
    }
`


const SectionList = styled.div`
    display: flex;
    align-items: center;
    padding: 0 2vh;
    cursor: pointer;
    ${({ theme }) => console.log(theme.desktop`display:none`)}
    & svg {
        & path {
            fill: ${({ theme }) => theme.font}
        }
        ${({ theme }) => theme.desktop`
            display: none;
        `}
    }
    & p {
        transition: color .25s, margin-top .25s;
        font-weight: bold;
        color: ${({ theme }) => theme.font};
        font-size: 1.5vh;
        display: none;
        ${({theme}) => theme.desktop`
            display: flex;
        `}
    }
    & .active-indicator {
        width: 1.5vh;
        height: 1.5vh;
        background-color: ${({theme}) => theme.font};
        margin-right: 1vh;
        transition: border-radius .25s, margin-top .25s;
        display: none;
        ${({theme}) => theme.desktop`
            display: flex;
        `}
    }
    &:hover {
        p {
            color: ${({theme}) => theme.hover};
        }
        .active-indicator {
            background-color: ${({theme}) => theme.hover};
            border-radius: 50%;
        }
    }
`

// const PhoneSvg = styled.svg`
//     width: 3vh;
//     height: 3vh;
//     & path {
//         fill: 
//     }
// `

const Navbar = ({
    scrollToTop,
    scrollToAbout,
    scrollToSkill,
    scrollToExperience,
    scrollToPortfolio,
    scrollToBottom,
    changeTheme,
    isDark
}) => {

    const Section = [
        { name: 'PROFILE', icon: <UserIcon />, anchor: scrollToTop },
        { name: 'ABOUT ME', icon: <AboutIcon />, anchor: scrollToAbout },
        { name: 'SKILL AND COMPETENCES', icon: <SkillIcon />, anchor: scrollToSkill },
        { name: 'EXPERIENCE', icon: <ExperienceIcon />, anchor: scrollToExperience },
        { name: 'PORTFOLIO', icon: <PortfolioIcon />, anchor: scrollToPortfolio },
        { name: 'CONTACT ME', icon: <ContactIcon />, anchor: scrollToBottom }
    ]

    return (
        <NavbarContainer>
            {
                Section.map(({name, icon, anchor}, index) => (
                    <SectionList key={index} onClick={anchor}>
                        {icon}
                        <div className="active-indicator" />
                        <p>{name}</p>
                    </SectionList>
                ))
            }
            <div className="list-section">
                <Switch
                    onChange={changeTheme}
                    checked={isDark}
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
        </NavbarContainer>
    )
}

export default Navbar