
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

const Pw = styled.nav`
    color: ${r => console.log('rrrr', r)};
`

const Navbar = ({
    scrollToTop, 
    scrollToAbout, 
    scrollToSkill, 
    scrollToExperience, 
    scrollToPortfolio, 
    scrollToBottom, 
    changeTheme, 
    dark
}) => {
    return (
        <nav>
            <Pw />
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
    )
}

export default Navbar