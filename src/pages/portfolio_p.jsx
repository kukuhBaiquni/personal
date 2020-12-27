import SS1 from 'assets/images/screenshot/ss1.jpeg'
import SS2 from 'assets/images/screenshot/ss2.jpeg'
import SS3 from 'assets/images/screenshot/ss3.jpeg'
import SS4 from 'assets/images/screenshot/ss4.jpeg'

import Extranet1 from 'assets/images/screenshot/extranet1.png'
import Extranet2 from 'assets/images/screenshot/extranet2.png'
import Extranet3 from 'assets/images/screenshot/extranet3.png'
import Extranet4 from 'assets/images/screenshot/extranet4.png'
import Extranet5 from 'assets/images/screenshot/extranet5.png'

import TSQ1 from 'assets/images/screenshot/tsq1.png'
import TSQ2 from 'assets/images/screenshot/tsq2.png'
import TSQ3 from 'assets/images/screenshot/tsq3.png'
import TSQ4 from 'assets/images/screenshot/tsq4.png'
import TSQ5 from 'assets/images/screenshot/tsq5.png'

import Javascript from 'assets/svg/javascript.svg'
import JQuery from 'assets/svg/jquery.svg'
import NodeJS from 'assets/svg/node.svg'
import Express from 'assets/svg/express.svg'
import Mongo from 'assets/svg/mongodb.svg'
import React from 'assets/svg/react.svg'
import Redux from 'assets/svg/redux.svg'
import ReduxSaga from 'assets/svg/saga.svg'
import Ruby from 'assets/svg/ruby.svg'
import Rails from 'assets/svg/rails.svg'
import Spring from 'assets/svg/spring.svg'
import SASS from 'assets/svg/sass.svg'
import Bootstrap from 'assets/svg/bootstrap.svg'
import Puppeteer from 'assets/svg/ppt.svg'
import Firebase from 'assets/svg/firebase.svg'

import Lightbox from 'react-image-lightbox'
import { useState, Fragment } from 'react'
import styled from 'styled-components'
import { BasicBox, SectionHeader } from '../components'

const imagesMob = [SS1, SS2, SS3, SS4]
const imagesTsq = [TSQ1, TSQ2, TSQ3, TSQ4, TSQ5]
const imagesExtranet = [Extranet1, Extranet2, Extranet3, Extranet4, Extranet5]

const dataList = [
    {
        name: 'Halal Beef Indonesia (Website)',
        description: `This website was created to provide information about how to join as a Halal Beef Indonesia member and information about catalogs and product details owned by Halal Beef Indonesia.`,
        stack: [{ url: Javascript, title: 'Javascript' }, { url: NodeJS, title: 'NodeJS' }, { url: Express, title: 'ExpressJS' }, { url: JQuery, title: 'JQuery' }, { url: Mongo, title: 'MongoDB' }, { url: Bootstrap, title: 'Bootstrap' }],
        shot: []
    },
    {
        name: 'Halal Beef Indonesia (Mobile Apps)',
        description: `This application is used for consumers to order meat and other Halal Beef Indonesia products. The orders will automatically go to the nearest member location. After making a payment (transfer method), the item is prepared by the member and ready to be sent to the customer.`,
        stack: [{ url: Javascript, title: 'Javascript' }, { url: React, title: 'React Native' }, { url: Redux, title: 'Redux' }, { url: ReduxSaga, title: 'Redux Saga' }, { url: Firebase, title: 'Firebase' }, { url: Express, title: 'ExpressJS' }, { url: Mongo, title: 'MongoDB' }],
        shot: imagesMob
    },
    {
        name: 'TravelSquare Website (User)',
        description: 'This Website was created for lodging reservations.',
        stack: [{ url: Javascript, title: 'Javascript' }, { url: React, title: 'ReactJS' }, { url: Redux, title: 'Redux' }, { url: Ruby, title: 'Ruby' }, { url: Rails, title: 'Ruby on Rails' }, { url: Spring, title: 'Java Springs' }, { url: Mongo, title: 'MongoDB' }, { url: SASS, title: 'SASS' }],
        shot: imagesTsq
    },
    {
        name: 'TravelSquare Website (Extranet)',
        description: 'This Website was created for provide & edit hotel information.',
        stack: [{ url: Javascript, title: 'Javascript' }, { url: React, title: 'ReactJS' }, { url: Redux, title: 'Redux' }, { url: Ruby, title: 'Ruby' }, { url: Rails, title: 'Ruby on Rails' }, { url: Spring, title: 'Java Springs' }, { url: Mongo, title: 'MongoDB' }, { url: SASS, title: 'SASS' }],
        shot: imagesExtranet
    },
    {
        name: 'TravelSquare Pricing Comparison Engine (Backend Service)',
        description: 'This is a crawler, created for collecting realtime price from others OTA.',
        stack: [{ url: Javascript, title: 'Javascript' }, { url: NodeJS, title: 'NodeJS' }, { url: Express, title: 'ExpressJS' }, { url: Puppeteer, title: 'Puppeteer' }],
        shot: []
    }
]

const PortfolioList = styled(BasicBox)`
    padding: .5vh 2vh 2vh;
    text-align: center;
    ${({ theme }) => theme.desktop`text-align:left`}
    h4 {
        font-size: 2.5vh;
        color: ${({ theme }) => theme.font}
    }
    p,i {
        color: ${({ theme }) => theme.fontNormal};
        font-size: 2vh;
    }
    img.sshot {
        width: 20vh;
        margin-right: 2vh;
        margin-bottom: 2vh;
        cursor: pointer;
    }
    .stack-list {
        display: flex;
        justify-content: center;
        ${({ theme }) => theme.desktop`
            justify-content: flex-start;
        `}
        img {
            margin-bottom: 2vh;
            object-fit: contain;
            height: 3vh;
            width: 5vh;
            ${({ theme }) => theme.desktop`
                height: 5vh;
                width: 8vh;
            `}
        }
    }
`

const Portfolio = ({ portfolioRef }) => {

    const [tsqImage, setTsqImage] = useState({ isOpen: false, index: 0 })
    const [mobImage, setMobImage] = useState({ isOpen: false, index: 0 })
    const [extranetImage, setExtranetImage] = useState({ isOpen: false, index: 0 })

    const checkShot = (index, idx) => {
        switch (index) {
            case 1:
                setMobImage({ index: idx, isOpen: true })
                break
            case 2:
                setTsqImage({ index: idx, isOpen: true })
                break
            case 3:
                setExtranetImage({ index: idx, isOpen: true })
                break
            default:
                break
        }
    }

    return (
        <section ref={portfolioRef}>
            <SectionHeader>
                <h4>PORTFOLIO</h4>
            </SectionHeader>
            <PortfolioList>
                {
                    dataList.map(({ name, description, stack, shot }, index) => (
                        <Fragment key={index}>
                            <h4>{name}</h4>
                            <p>{description}</p>
                            <p>Technology:</p>
                            <div className="stack-list">
                                {
                                    stack.map(({ url, title }, i) => (
                                        <img key={i} title={title} src={url} alt={title} />
                                    ))
                                }
                            </div>
                            {shot.length ? shot.map((url, idx) => <img className='sshot' key={idx} onClick={() => checkShot(index, idx)} src={url} alt='screenshot' />) : <i>Images not available.</i>}
                        </Fragment>
                    ))
                }
            </PortfolioList>
            {
                mobImage.isOpen &&
                <Lightbox
                    mainSrc={imagesMob[mobImage.index]}
                    nextSrc={imagesMob[(mobImage.index + 1) % imagesMob.length]}
                    prevSrc={imagesMob[(mobImage.index + imagesMob.length - 1) % imagesMob.length]}
                    onCloseRequest={() => setMobImage({ isOpen: false, index: 0 })}
                    onMovePrevRequest={() => setMobImage({ ...mobImage, index: (mobImage.index + imagesMob.length - 1) % imagesMob.length })}
                    onMoveNextRequest={() => setMobImage({ ...mobImage, index: (mobImage.index + 1) % imagesMob.length })}
                />
            }
            {
                extranetImage.isOpen &&
                <Lightbox
                    mainSrc={imagesExtranet[extranetImage.index]}
                    nextSrc={imagesExtranet[(extranetImage.index + 1) % imagesExtranet.length]}
                    prevSrc={imagesExtranet[(extranetImage.index + imagesExtranet.length - 1) % imagesExtranet.length]}
                    onCloseRequest={() => setExtranetImage({ isOpen: false, index: 0 })}
                    onMovePrevRequest={() => setExtranetImage({ ...extranetImage, index: (extranetImage.index + imagesExtranet.length - 1) % imagesExtranet.length })}
                    onMoveNextRequest={() => setExtranetImage({ ...extranetImage, index: (extranetImage.index + 1) % imagesExtranet.length })}
                />
            }
            {
                tsqImage.isOpen &&
                <Lightbox
                    mainSrc={imagesTsq[tsqImage.index]}
                    nextSrc={imagesTsq[(tsqImage.index + 1) % imagesTsq.length]}
                    prevSrc={imagesTsq[(tsqImage.index + imagesTsq.length - 1) % imagesTsq.length]}
                    onCloseRequest={() => setTsqImage({ isOpen: false, index: 0 })}
                    onMovePrevRequest={() => setTsqImage({ ...tsqImage, index: (tsqImage.index + imagesTsq.length - 1) % imagesTsq.length })}
                    onMoveNextRequest={() => setTsqImage({ ...tsqImage, index: (tsqImage.index + 1) % imagesTsq.length })}
                />
            }
        </section>
    )
}

export default Portfolio