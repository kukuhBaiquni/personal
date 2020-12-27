import styled from 'styled-components'
import { BasicBox, SectionHeader } from '../components'

import Python from 'assets/svg/python.svg'
import Javascript from 'assets/svg/javascript.svg'
import Github from 'assets/svg/github.svg'
import Gitlab from 'assets/svg/gitlab.svg'
import Bitbucket from 'assets/svg/bitbucket.svg'
import Trello from 'assets/svg/trello.svg'
import Jira from 'assets/svg/jira.svg'
import VScode from 'assets/svg/vscode.svg'
import Atom from 'assets/svg/atom.svg'
import Windows from 'assets/svg/windows.svg'
import Ubuntu from 'assets/svg/ubuntu.svg'
import Mongo from 'assets/svg/mongodb.svg'
import Postgres from 'assets/svg/psg.svg'
import React from 'assets/svg/react.svg'
import Redux from 'assets/svg/redux.svg'
import ReduxSaga from 'assets/svg/saga.svg'
import NodeJS from 'assets/svg/node.svg'
import JQuery from 'assets/svg/jquery.svg'
import HTML from 'assets/svg/html.svg'
import CSS from 'assets/svg/css.svg'
import SASS from 'assets/svg/sass.svg'
import Bootstrap from 'assets/svg/bootstrap.svg'

import Chai from 'assets/svg/chai.svg'
import Express from 'assets/svg/express.svg'
import Firebase from 'assets/svg/firebase.svg'
import Heroku from 'assets/svg/heroku.svg'
import Mocha from 'assets/svg/mocha.svg'
import Postman from 'assets/svg/postman.svg'
import Socket from 'assets/svg/socket.svg'
import Puppeteer from 'assets/svg/ppt.svg'

import Slider from 'react-slick'

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const skills = [
    { name: 'Programming Language', list: [{ url: Javascript, title: 'Javascript' }, { url: Python, title: 'Python' }] },
    { name: 'Project Management Tools', list: [{ url: Jira, title: 'Jira' }, { url: Trello, title: 'Trello' }] },
    { name: 'Version Control', list: [{ url: Github, title: 'Gitlab' }, { url: Gitlab, title: 'Gitlab' }, { url: Bitbucket, title: 'Bitbucket' }] },
    { name: 'Development Tools', list: [{ url: VScode, title: 'Visual Studio' }, { url: Atom, title: 'Atom' }] },
    { name: 'System Operations', list: [{ url: Ubuntu, title: 'Ubuntu' }, { url: Windows, title: 'Windows 10' }] },
    { name: 'Database Management', list: [{ url: Mongo, title: 'MongoDB' }, { url: Postgres, title: 'PostgreSQL' }] }
]

const frameworks = [
    { title: 'NodeJS', url: NodeJS },
    { title: 'ReactJS & React Native', url: React },
    { title: 'Redux', url: Redux },
    { title: 'Redux Saga', url: ReduxSaga },
    { title: 'ExpressJS', url: Express },
    { title: 'JQuery', url: JQuery },
    { title: 'HTML 5', url: HTML },
    { title: 'CSS 3', url: CSS },
    { title: 'SASS', url: SASS },
    { title: 'Bootstrap', url: Bootstrap },
    { title: 'ChaiJS', url: Chai },
    { title: 'MochaJS', url: Mocha },
    { title: 'Socket.io', url: Socket },
    { title: 'Postman', url: Postman },
    { title: 'Heroku', url: Heroku },
    { title: 'Firebase', url: Firebase },
    { title: 'Puppeteer', url: Puppeteer },
]

const SkillSection = styled.section`
    margin-bottom: 2vh;
    .slick-slider.slick-initialized {
        ${({ theme }) => theme.desktop`display:none`}
        & button.slick-arrow.slick-prev,
        & button.slick-arrow.slick-next {
            display: none;
        }
    }
`

const SkillBoxPhone = styled(BasicBox)`
    width: 100%;
    height: 20vh;
    margin-bottom: 1.6vh;
    text-align: center;
    position: relative;
    h5 {
        font-size: 2vh;
        color: ${({ theme }) => theme.fontNormal};
    }
    .list-logo {
        display: flex;
        justify-content: center;
        & img {
            width: 6vh;
            height: 6vh;
            margin-right: 2vh;
            object-fit: cover;
        }
    }
`

const SkillDesktopView = styled.div`
    justify-content: space-between;
    flex-wrap: wrap;
    display: none;
    ${({ theme }) => theme.desktop`display:flex`}
`
const SkillBoxDesktop = styled(BasicBox)`
    width: 40vh;
    height: 20vh;
    border-radius: .5vh;
    margin-bottom: 1.6vh;
    .cp {
        padding: 0 2vh;
        text-align: center;
    }
    h5 {
        font-size: 2vh;
        color: ${({ theme }) => theme.fontNormal}
    }
    img {
        width: 6vh;
        height: 6vh;
        margin-right: 2vh;
        object-fit: cover;
    }
`

const Frameworks = styled(BasicBox)`
    padding: 2vh;
    h5 {
        font-size: 2vh;
        color: ${({ theme }) => theme.font};
        margin-top: 0;
        text-align: center;
    }
    .framework-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        img {
            height: 8vh;
            margin-bottom: 3vh;
            padding: 1vh;
        }
    }
`

const Skill = ({ skillRef }) => {

    return (
        <SkillSection ref={skillRef} >
            <SectionHeader>
                <h4>SKILL AND COMPETENCES</h4>
            </SectionHeader>
            <Slider {...settings}>
                {
                    skills.map(({ name, list }, index) => (
                        <SkillBoxPhone key={index}>
                            <h5>{name}</h5>
                            <div className="list-logo">
                                {
                                    list.map(({ url, title }, i) => (
                                        <img key={i} title={title} src={url} alt={title} />
                                    ))
                                }
                            </div>
                        </SkillBoxPhone>
                    ))
                }
            </Slider>
            <div className="section-body no-bg">
                <SkillDesktopView>
                    {
                        skills.map(({ name, list }, index) => (
                            <SkillBoxDesktop key={index}>
                                <div className="cp">
                                    <h5>{name}</h5>
                                    <div className="list-logo">
                                        {
                                            list.map(({ url, title }, i) => (
                                                <img key={i} title={title} src={url} alt={title} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </SkillBoxDesktop>
                        ))
                    }
                </SkillDesktopView>
            </div>
            <Frameworks>
                <h5>Others Technology</h5>
                <div className="framework-list">
                    {
                        frameworks.map(({ title, url }, index) => (
                            <img key={index} title={title} src={url} alt={title} />
                        ))
                    }
                </div>
            </Frameworks>
        </SkillSection>
    )
}

export default Skill