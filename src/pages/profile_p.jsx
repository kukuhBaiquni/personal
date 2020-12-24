import { Fragment } from 'react'
import Image from 'assets/images/me.jpg'

import Facebook from 'assets/svg/facebook.svg'
import Codewars from 'assets/svg/codewars.svg'
import LinkedIn from 'assets/svg/linkedin.svg'
import Github from 'assets/svg/github.svg'

const codewarsBadge = 'https://www.codewars.com/users/kuniku/badges/large'
const facebookUrl = 'https://web.facebook.com/kukuhbaiquni'
const linkedInUrl = 'https://www.linkedin.com/in/kukuh-baiquni-a14580163/'
const githubUrl = 'https://github.com/kukuhBaiquni'
const codewarsUrl = 'https://www.codewars.com/users/kuniku'

const data = {
    'Full Name': 'Kukuh Baiquni',
    'Nationality': 'Indonesia',
    'Gender': 'Male',
    'Address': 'Bandung, Indonesia'
}

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className="section-header">
                <h4>MY PROFILE</h4>
            </div>
            <section className='profile-section'>
                <div className="left">
                    <img id='me' src={Image} alt='me' />
                </div>
                <div className="right">
                    {
                        Object.entries(data).map(([prop, value]) => (
                            <Fragment key={value}>
                                <label>{prop}</label>
                                <span>{value}</span>
                            </Fragment>
                        ))
                    }
                    <label>Other Profile</label>
                    <div className="sm-list">
                        <a href={facebookUrl} title='facebook.com' target='_blank'>
                            <img src={Facebook} alt='facebook' />
                        </a>
                        <a href={linkedInUrl} title='linkedin.com' target='_blank'>
                            <img src={LinkedIn} alt='linked-in' />
                        </a>
                        <a href={githubUrl} title='github.com' target='_blank'>
                            <img src={Github} alt='github' />
                        </a>
                        <a href={codewarsUrl} title='codewars.com' target='_blank'>
                            <img src={Codewars} alt='codewars' />
                        </a>
                    </div>
                </div>
            </section>
            <div className="section-header">
                <img id='codewars' src={codewarsBadge} alt='codewars' />
                <a href="https://codewars.com" target="_blank" rel="noopener noreferrer">Join Codewars</a>
            </div>
        </div>
    )
}

export default Profile