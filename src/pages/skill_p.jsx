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

const Skill = ({skillRef}) => {
    return (
        <div ref={skillRef} className="skill-container">
            <div className="section-header">
                <h4>SKILL AND COMPETENCES</h4>
            </div>
            <div className="section-body no-bg">
                <div className="flex-wrapper">
                    <div className="skill-box">
                        <div className="cp">
                            <h5>Programming Language</h5>
                            <img title='Javascript' src={Javascript} alt='javascript' />
                            <img title='Python' src={Python} alt='python' />
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="cp">
                            <h5>Project Management Tools</h5>
                            <img title='Jira' style={{ height: '7vh', width: '7vh' }} src={Jira} alt='jira' />
                            <img title='Trello' style={{ height: '8vh', width: '8vh' }} src={Trello} alt='trello' />
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="cp">
                            <h5>Version Control</h5>
                            <img title='Github' src={Github} alt='github' />
                            <img title='Gitlab' src={Gitlab} alt='gitlab' />
                            <img title='Bitbucket' src={Bitbucket} alt='bitbucket' />
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="cp">
                            <h5>Development Tools</h5>
                            <img title='Visual Studio Code' src={VScode} alt='vscode' />
                            <img title='Atom' src={Atom} alt='atom' />
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="cp">
                            <h5>System Operations</h5>
                            <img title='Ubuntu' style={{ height: '8vh', width: '8vh' }} src={Ubuntu} alt='ubuntu' />
                            <img title='Windows 10' style={{ height: '7vh', width: '7vh' }} src={Windows} alt='windows' />
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="cp">
                            <h5>Database Management</h5>
                            <img title='Mongo DB' style={{ height: '8vh', width: '8vh' }} src={Mongo} alt='mongo' />
                            <img title='Postgres' style={{ height: '8vh', width: '15vh' }} src={Postgres} alt='postgres' />
                        </div>
                    </div>
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