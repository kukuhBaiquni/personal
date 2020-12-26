import { Fragment } from 'react'
import styled from 'styled-components'
import { BasicBox, SectionHeader } from '../components'

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

const ProfileSection = styled.div`
    margin: 2vh 0;
    width: 100%;
`

const ProfilePart = styled.div`
    margin: 2vh 0;
    justify-content: center;
    flex-direction: column;
    ${({ theme }) => theme.desktop`
        display: flex;
        justify-content: space-between;
    `}
`

const PhotoPart = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    ${({ theme }) => theme.desktop`
        width: 37vh;
        background-color: pink;
    `}
    & img#me {
        width: 95%;
        border-right: 0;
        height: 50vh;
        margin: auto;
        object-fit: contain;
        margin-bottom: 1vh;
        ${({ theme }) => theme.desktop`
            width: 35vh;
            height: 45vh;
            border-right: 2vh solid transparent;
            object-fit: cover;
            margin-bottom: 0;
        `}
    }
`

const BioPart = styled.div`
    background-color: ${({ theme }) => theme.block};
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 2vh 0;
    ${({ theme }) => theme.desktop`
        width: 84%;
        padding: 2vh;
        text-align: left;
    `}
    & label {
        color: ${({ theme }) => theme.fontNormal};
        font-size: 2vh;
    }
    & span {
        color: ${({ theme }) => theme.font};
        font-size: 2.5vh;
        margin-bottom: 2vh;
    }
    & p {
        color: ${({ theme }) => theme.fontNormal}
    }
`

const Profile = () => {
    return (
        <ProfileSection>
            <SectionHeader>
                <h4>MY PROFILE</h4>
            </SectionHeader>
            <ProfilePart>
                <PhotoPart>
                    <img id='me' src={Image} alt='me' />
                </PhotoPart>
                <BioPart>
                    {
                        Object.entries(data).map(([prop, value], index) => (
                            <Fragment key={index}>
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
                </BioPart>
            </ProfilePart>
            <div className="section-header">
                <img id='codewars' src={codewarsBadge} alt='codewars' />
                <a href="https://codewars.com" target="_blank" rel="noopener noreferrer">Join Codewars</a>
            </div>
        </ProfileSection>
    )
}

export default Profile