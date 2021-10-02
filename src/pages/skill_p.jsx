import styled from 'styled-components'
import { Fragment } from 'react'

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
import ReactJS from 'assets/svg/react.svg'
import Redux from 'assets/svg/redux.svg'
import ReduxSaga from 'assets/svg/saga.svg'
import NodeJS from 'assets/svg/node.svg'
import JQuery from 'assets/svg/jquery.svg'
import HTML from 'assets/svg/html.svg'
import CSS from 'assets/svg/css.svg'
import SASS from 'assets/svg/sass.svg'
import ReactQuery from 'assets/svg/react-query.svg'
import Tailwind from 'assets/svg/tailwind-css.svg'
import Next from 'assets/svg/next-js.svg'
import Bootstrap from 'assets/svg/bootstrap.svg'
import Styled from 'assets/svg/styled.png'

import Chai from 'assets/svg/chai.svg'
import Express from 'assets/svg/express.svg'
import Firebase from 'assets/svg/firebase.svg'
import Heroku from 'assets/svg/heroku.svg'
import Mocha from 'assets/svg/mocha.svg'
import Postman from 'assets/svg/postman.svg'
import Socket from 'assets/svg/socket.svg'
import Puppeteer from 'assets/svg/ppt.svg'

import Slider from 'react-slick'
import { BasicBox, SectionHeader } from '../components'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  swipeToSlide: false,
}

const skills = [
  { name: 'Programming Language', list: [{ url: Javascript, title: 'Javascript' }, { url: Python, title: 'Python' }] },
  { name: 'Project Management Tools', list: [{ url: Jira, title: 'Jira' }, { url: Trello, title: 'Trello' }] },
  { name: 'Version Control', list: [{ url: Github, title: 'Gitlab' }, { url: Gitlab, title: 'Gitlab' }, { url: Bitbucket, title: 'Bitbucket' }] },
  { name: 'Development Tools', list: [{ url: VScode, title: 'Visual Studio' }, { url: Atom, title: 'Atom' }] },
  { name: 'System Operations', list: [{ url: Ubuntu, title: 'Ubuntu' }, { url: Windows, title: 'Windows 10' }] },
  { name: 'Database Management', list: [{ url: Mongo, title: 'MongoDB' }, { url: Postgres, title: 'PostgreSQL' }] },
]

const frameworks = [
  { url: Javascript, title: 'Javascript' },
  { url: Jira, title: 'Jira' }, { url: Trello, title: 'Trello' },
  { url: Github, title: 'Gitlab' }, { url: Gitlab, title: 'Gitlab' }, { url: Bitbucket, title: 'Bitbucket' },
  { url: VScode, title: 'Visual Studio' }, { url: Atom, title: 'Atom' },
  { url: Ubuntu, title: 'Ubuntu' }, { url: Windows, title: 'Windows 10' },
  { url: Mongo, title: 'MongoDB' }, { url: Postgres, title: 'PostgreSQL' },
  { title: 'NodeJS', url: NodeJS },
  { title: 'ReactJS & React Native', url: ReactJS },
  { title: 'Redux', url: Redux },
  { title: 'Redux Saga', url: ReduxSaga },
  { title: 'ExpressJS', url: Express },
  { title: 'JQuery', url: JQuery },
  { title: 'HTML 5', url: HTML },
  { title: 'CSS 3', url: CSS },
  { title: 'SASS', url: SASS },
  { title: 'Styled Components', url: Styled },
  { title: 'Bootstrap', url: Bootstrap },
  { title: 'ChaiJS', url: Chai },
  { title: 'MochaJS', url: Mocha },
  { title: 'Socket.io', url: Socket },
  { title: 'Postman', url: Postman },
  { title: 'Heroku', url: Heroku },
  { title: 'Firebase', url: Firebase },
  { title: 'Puppeteer', url: Puppeteer },
  { title: 'NextJS', url: Next },
  { title: 'TailwindCSS', url: Tailwind },
  { title: 'React Query', url: ReactQuery },
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
    /* justify-content: space-between; */
    flex-wrap: wrap;
    display: none;
    column-gap: 12px;
    ${({ theme }) => theme.desktop`display:flex`}
`
const SkillBoxDesktop = styled(BasicBox)`
    max-width: 38vh;
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
    padding: 18px;
    padding-top: 28px;
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
        margin: 0 3vh;
        .snc {
          background-color: ${({ theme }) => theme.shade};
          padding: 0px 10px;
          margin-left: 5px;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 5px;
          h6 {
            font-size: 16px;
          }
          .snc-list {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            img {
                height: 25px;
                margin-right: 10px;
            }
            p {
              font-size: 14px;
            }
          }
        }
        .fl-w {
          background-color: ${({ theme }) => theme.shade};
          min-width: 30px;
          padding: 0px 10px;
          margin-left: 5px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          img {
              height: 25px;
              margin-right: 10px;
          }
          p {
            font-size: 14px;
          }
        }
    }
`

const Skill = ({ skillRef }) => (
  <SkillSection ref={skillRef}>
    <SectionHeader>
      <h4>SKILL AND COMPETENCES</h4>
    </SectionHeader>
    <Frameworks>
      <div className='framework-list'>
        {
          frameworks.map(({ title, url }, index) => (
            <div className='fl-w' key={index}>
              <img alt={title} src={url} title={title} />
              <p>{title}</p>
            </div>
          ))
        }
      </div>
    </Frameworks>
  </SkillSection>
)

export default Skill
