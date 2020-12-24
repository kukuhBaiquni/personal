import Python from 'assets/images/python.png'
import Javascript from 'assets/images/js.png'
import Github from 'assets/images/github.png'
import Gitlab from 'assets/images/gitlab.png'
import Bitbucket from 'assets/images/bitbucket.png'
import Trello from 'assets/images/trello.png'
import Jira from 'assets/images/jira.png'
import VScode from 'assets/images/vscode.png'
import Atom from 'assets/images/atom.png'
import Windows from 'assets/images/windows.png'
import Ubuntu from 'assets/images/ubuntu.png'
import Mongo from 'assets/images/mongo.png'
import Postgres from 'assets/images/postgres.png'
import React from 'assets/images/react.png'
import Redux from 'assets/images/redux.png'
import ReduxSaga from 'assets/images/redux-saga.png'
import NodeJS from 'assets/images/node.png'
import JQuery from 'assets/images/jquery.png'
import HTML from 'assets/images/html.png'
import CSS from 'assets/images/css.png'
import SASS from 'assets/images/sass.png'
import Bootstrap from 'assets/images/bootstrap.png'

import Slider from 'react-slick'

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const skills = [
    { name: 'Programming Language', list: [Javascript, Python] },
    { name: 'Project Management Tools', list: [Jira, Trello] },
    { name: 'Version Control', list: [Github, Gitlab, Bitbucket] },
    { name: 'Development Tools', list: [VScode, Atom] },
    { name: 'System Operations', list: [Ubuntu, Windows] },
    { name: 'Database Management', list: [Mongo, Postgres] }
]

const Skill = ({ skillRef }) => {
    return (
        <div ref={skillRef} className="skill-container">
            <div className="section-header">
                <h4>SKILL AND COMPETENCES</h4>
            </div>
            <div className="section-body no-bg">
                <Slider {...settings}>
                    {
                        skills.map(({ name, list }, index) => (
                            <div key={index} className="skill-box">
                                <div className="cp">
                                    <h5>{name}</h5>
                                    <div className="list-logo">
                                        {
                                            list.map((url, i) => (
                                                <img key={i} title='Javascript' src={url} alt='javascript' />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                <div className="flex-wrapper">
                    {
                        skills.map(({ name, list }, index) => (
                            <div key={index} className="skill-box">
                                <div className="cp">
                                    <h5>{name}</h5>
                                    {
                                        list.map((url, i) => (
                                            <img key={i} title='Javascript' src={url} alt='javascript' />
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="section-body">
                <div className="padder">
                    <h5>Others Technology</h5>
                    <div className="list">
                        <img title='NodeJS & ExpressJS' src={NodeJS} alt='node' />
                        <img title='Redux' style={{ width: '6.5vh', height: '6vh' }} src={Redux} alt='redux' />
                        <img title='ReactJS & React Native' src={React} alt='react' />
                        <img title='Redux Saga' style={{ width: '13vh' }} src={ReduxSaga} alt='redux-saga' />
                        <img title='JQuery' style={{ width: '7vh' }} src={JQuery} alt='jquery' />
                        <img title='HTML 5' src={HTML} alt='html' />
                        <img title='CSS 3' src={CSS} alt='css' />
                        <img title='SASS' style={{ width: '11vh' }} src={SASS} alt='sass' />
                        <img title='Bootstrap' src={Bootstrap} alt='node' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill