import { Fragment } from 'react'
import Image from 'assets/images/me.jpg'
import Facebook from 'assets/images/facebook.png'
import LinkedIn from 'assets/images/linkedin.png'
import Github from 'assets/images/github.png'
import Codewars from 'assets/images/codewars.png'
import FastFinger from 'assets/images/ff.png'

const codewarsBadge = 'https://www.codewars.com/users/kuniku/badges/large'
const facebookUrl = 'https://web.facebook.com/imfamousyea'
const linkedInUrl = 'https://www.linkedin.com/in/kukuh-baiquni-a14580163/'
const githubUrl = 'https://github.com/kukuhBaiquni'
const codewarsUrl = 'https://www.codewars.com/users/kuniku'
const fastFingerUrl = 'https://10fastfingers.com/user/2337934/'

const data = {
    'Name': 'Kukuh Baiquni',
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
                        <a href={fastFingerUrl} title='10fastfingers.com' target='_blank'>
                            <img src={FastFinger} alt='fast-fingers' />
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