import './scss/home.scss'
import Profile from './profile_p'
import AboutMe from './about_me_p'
import Skill from './skill_p'
import Portfolio from './portfolio_p'
import Experience from './experience_p'

import Switch from 'react-switch'
import { useState } from 'react'
import Sun from 'assets/images/sun.png'
import Moon from 'assets/images/moon.png'

const Home = () => {

    const [dark, setDark] = useState(true)
    console.log(dark);
    return (
        <div className={dark ? 'home-container' : 'w-home-container'}>
            <div className="forbidden">
                <p>Sorry for inconvenience, mobile view still under development.</p>
                <p>You can try desktop mode if you open this website using mobile browser.</p>
                <p>Regards, Kukuh</p>
            </div>
            <div className="content-wrapper">
                <nav>
                    <div className="list-section">
                        <div className='active-indicator' />
                        <p>PROFILE</p>
                    </div>
                    <div className="list-section">
                        <div className='active-indicator' />
                        <p>ABOUT ME</p>
                    </div>
                    <div className="list-section">
                        <div className='active-indicator' />
                        <p>SKILL AND COMPETENCES</p>
                    </div>
                    <div className="list-section">
                        <div className='active-indicator' />
                        <p>EXPERIENCE</p>
                    </div>
                    <div className="list-section">
                        <div className='active-indicator' />
                        <p>PORTFOLIO</p>
                    </div>
                    <div className="list-section">
                        <div className='active-indicator' />
                        <p>CONTACT ME</p>
                    </div>
                    <div className="list-section">
                        <Switch
                            onChange={check => setDark(check)}
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
                <AboutMe />
                <Skill />
                <Experience />
                <Portfolio />
                <div id="cp">
                    <p id='cp'>Email: kukuh.baiquni@gmail.com</p>
                    <p id='cp'>Kukuh Baiquni © 2020</p>
                    <p id='cp'>Mobile: +62 821 1903 0614</p>
                </div>
            </div>
        </div>
    )
}

export default Home