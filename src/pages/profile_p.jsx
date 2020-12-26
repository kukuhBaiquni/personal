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

const socMed = [
    { icon: Facebook, name: facebookUrl, title: 'Facebook' },
    { icon: LinkedIn, name: linkedInUrl, title: 'LinkedIn' },
    { icon: Github, name: githubUrl, title: 'Github' },
    { icon: Codewars, name: codewarsUrl, title: 'Codewars' }
]

const data = {
    'Full Name': 'Kukuh Baiquni',
    'Nationality': 'Indonesia',
    'Gender': 'Male',
    'Address': 'Bandung, Indonesia'
}

const ProfileSection = styled.section`
    margin: 2vh 0;
    width: 100%;
`

const ProfilePart = styled.div`
    margin: 2vh 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    ${({ theme }) => theme.desktop`
        justify-content: space-between;
        flex-direction: row;
    `}
`

const PhotoPart = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    ${({ theme }) => theme.desktop`width: 37vh;`}
    img#me {
        width: 95%;
        border-right: 0;
        height: 50vh;
        margin: auto;
        object-fit: contain;
        margin-bottom: 1vh;
        ${({ theme }) => theme.desktop`
            width: 37vh;
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
    label {
        color: ${({ theme }) => theme.fontNormal};
        font-size: 2vh;
    }
    span {
        color: ${({ theme }) => theme.font};
        font-size: 2.5vh;
        margin-bottom: 2vh;
    }
    p {
        color: ${({ theme }) => theme.fontNormal}
    }
    .force-bottom {
        ${({ theme }) => theme.desktop`margin-top:4vh`}
    }
`

const SocialMedia = styled.div`
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
    ${({ theme }) => theme.desktop`justify-content:flex-start;`}
    img {
        margin-right: 1vh;
        height: 3.5vh;
        width: 3.5vh;
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
                    <div className="force-bottom">
                        <label>Other Profile</label>
                        <SocialMedia >
                            {
                                socMed.map(({ icon, name, title }, index) => (
                                    <a key={index} href={name} title={title} target='_blank'>
                                        <img src={icon} alt='title' />
                                    </a>
                                ))
                            }
                        </SocialMedia>
                    </div>
                </BioPart>
            </ProfilePart>
            <SectionHeader>
                <img id='codewars' src={codewarsBadge} alt='codewars' />
                <a href="https://codewars.com" target="_blank" rel="noopener noreferrer">Join Codewars</a>
            </SectionHeader>
        </ProfileSection>
    )
}

export default Profile