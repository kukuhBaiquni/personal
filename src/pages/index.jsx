import './scss/home.scss'
import Profile from './profile_p'
import AboutMe from './about_me_p'
import Switch from 'react-switch'
import { useState } from 'react'
import Sun from 'assets/images/sun.png'
import Moon from 'assets/images/moon.png'

const Home = () => {

    const [dark, setDark] = useState(true)
    console.log(dark);
    return (
        <div className={dark ? 'home-container' : 'w-home-container'}>
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
                        <p>PROFESSIONAL EXPERIENCE</p>
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
            </div>
        </div>
    )
}

export default Home