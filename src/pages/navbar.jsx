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

import { BasicBox } from '../components'

const NavbarContainer = styled(BasicBox)`
    z-index: 100;
    border-bottom: .3vh solid ${({ theme }) => theme.font};
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

const AnchorList = styled.div`
    display: flex;
    align-items: center;
    padding: 0 2vh;
    cursor: pointer;
    svg {
        width: 3vh;
        height: 3vh;
        path {
            fill: ${({ theme }) => theme.font}
        }
        ${({ theme }) => theme.desktop`
            display: flex;
        `}
    }
    p {
        transition: color .25s, margin-top .25s;
        font-weight: bold;
        color: ${({ theme }) => theme.font};
        font-size: 1.5vh;
        display: none;
        ${({ theme }) => theme.desktop`
            display: none;
        `}
    }
    .active-indicator {
        width: 1.5vh;
        height: 1.5vh;
        background-color: ${({ theme }) => theme.font};
        margin-right: 1vh;
        transition: border-radius .25s, margin-top .25s;
        display: none;
        ${({ theme }) => theme.desktop`
            display: none;
        `}
    }
    &:hover {
        p {
            color: ${({ theme }) => theme.hover};
        }
        .active-indicator {
            background-color: ${({ theme }) => theme.hover};
            border-radius: 50%;
        }
    }
`

const SwitchIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    & img {
        height: 2.5vh;
        width: 2.5vh;
    }
`

const Navbar = ({
  scrollToTop,
  scrollToAbout,
  scrollToSkill,
  scrollToExperience,
  scrollToPortfolio,
  scrollToBottom,
  changeTheme,
  isDark,
}) => {
  const Section = [
    { name: 'PROFILE', icon: <UserIcon />, anchor: scrollToTop },
    { name: 'ABOUT ME', icon: <AboutIcon />, anchor: scrollToAbout },
    { name: 'SKILL AND COMPETENCES', icon: <SkillIcon />, anchor: scrollToSkill },
    { name: 'EXPERIENCE', icon: <ExperienceIcon />, anchor: scrollToExperience },
    { name: 'PORTFOLIO', icon: <PortfolioIcon />, anchor: scrollToPortfolio },
    { name: 'CONTACT ME', icon: <ContactIcon />, anchor: scrollToBottom },
  ]

  return (
    <NavbarContainer as='nav'>
      {
        Section.map(({ name, icon, anchor }, index) => (
          <AnchorList key={index} onClick={anchor}>
            {icon}
            <div className='active-indicator' />
            <p>{name}</p>
          </AnchorList>
        ))
      }
      <AnchorList>
        <Switch
          checked={isDark}
          checkedIcon={(
            <SwitchIcon>
              <img alt='moon' src={Moon} />
            </SwitchIcon>
          )}
          offColor='#434343'
          offHandleColor='#bababa'
          uncheckedIcon={(
            <SwitchIcon>
              <img alt='sun' src={Sun} />
            </SwitchIcon>
          )}
          onChange={changeTheme}
          onColor='#434343'
          onHandleColor='#bababa'
        />
      </AnchorList>
    </NavbarContainer>
  )
}

export default Navbar
