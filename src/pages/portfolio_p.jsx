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

import Javascript from 'assets/images/js.png'
import JQuery from 'assets/images/jquery.png'
import NodeJS from 'assets/images/node.png'
import Mongo from 'assets/images/mongo.png'
import React from 'assets/images/react.png'
import Redux from 'assets/images/redux.png'
import ReduxSaga from 'assets/images/redux-saga.png'
import Ruby from 'assets/images/ruby.png'
import Rails from 'assets/images/ror.png'
import Spring from 'assets/images/spring.png'
import SASS from 'assets/images/sass.png'
import Bootstrap from 'assets/images/bootstrap.png'
import Puppeteer from 'assets/images/puppeteer.png'

import Lightbox from 'react-image-lightbox'
import { useState } from 'react'

const imagesMob = [SS1, SS2, SS3, SS4]
const imagesTsq = [TSQ1, TSQ2, TSQ3, TSQ4, TSQ5]
const imagesExtranet = [Extranet1, Extranet2, Extranet3, Extranet4, Extranet5]

const Portfolio = ({portfolioRef}) => {

    const [tsqImage, setTsqImage] = useState({ isOpen: false, index: 0 })
    const [mobImage, setMobImage] = useState({ isOpen: false, index: 0 })
    const [extranetImage, setExtranetImage] = useState({ isOpen: false, index: 0 })

    return (
        <div ref={portfolioRef} className="portfolio-container">
            <div className="section-header">
                <h4>PORTFOLIO</h4>
            </div>
            <div className="section-body">
                <div className="portfolio-list">
                    <h4>Halal Beef Indonesia (Website)</h4>
                    <p>
                        This website was created to provide information about how to join as a
                        Halal Beef Indonesia member and information about catalogs and product details
                        owned by Halal Beef Indonesia.
                    </p>
                    <p>Technology:</p>
                    <div className="stack-list">
                        <img title='Javascript' src={Javascript} alt='Javascript' />
                        <img title='NodeJS & ExpressJS' src={NodeJS} alt='NodeJS' />
                        <img title='JQuery' src={JQuery} alt='JQuery' />
                        <img title='MongoDB' src={Mongo} alt='Mongo' />
                        <img title='Bootstrap' src={Bootstrap} alt='Bootstrap' />
                    </div>
                    <i>Screenshot for website is not available, sadly the website is down too.</i>
                    <h4>Halal Beef Indonesia (Mobile Apps)</h4>
                    <p>
                        This application is used for consumers to order meat and other Halal Beef Indonesia
                        products. The orders will automatically go to the nearest member location.
                        After making a payment (transfer method), the item is prepared by the member and
                        ready to be sent to the customer.
                    </p>
                    <p>Technology:</p>
                    <div className="stack-list">
                        <img title='Javascript' src={Javascript} alt='Javascript' />
                        <img style={{ width: '5.5vh' }} title='React Native' src={React} alt='React Native' />
                        <img title='Redux' src={Redux} alt='Redux' />
                        <img style={{ width: '8vh' }} title='Redux Saga' src={ReduxSaga} alt='Redux Saga' />
                    </div>
                    {imagesMob.map((url, index) => <img key={index} onClick={() => setMobImage({ index, isOpen: true })} src={url} alt='screenshot' />)}
                    <hr />
                    <h4>TravelSquare Website (User)</h4>
                    <p>
                        This Website was created for lodging reservations.
                    </p>
                    <p>Technology:</p>
                    <div className="stack-list">
                        <img title='Javascript' src={Javascript} alt='Javascript' />
                        <img style={{ width: '5.5vh' }} title='React Native' src={React} alt='React Native' />
                        <img title='Redux' src={Redux} alt='Redux' />
                        <img title='Ruby' src={Ruby} alt='Ruby' />
                        <img style={{ width: '7vh' }} title='Ruby on Rails' src={Rails} alt='Ruby on Rails' />
                        <img title='Java Spring' style={{ width: '7vh' }} src={Spring} alt='Java Spring' />
                        <img style={{ width: '8vh' }} title='SASS' src={SASS} alt='SASS' />
                    </div>
                    {imagesTsq.map((url, index) => <img key={index} onClick={() => setTsqImage({ index, isOpen: true })} style={{ width: '37.5vh' }} src={url} alt='screenshot' />)}
                    <h4>TravelSquare Website (Extranet)</h4>
                    <p>
                        This Website was created for provide & edit hotel information.
                    </p>
                    <p>Technology:</p>
                    <div className="stack-list">
                        <img title='Javascript' src={Javascript} alt='Javascript' />
                        <img style={{ width: '5.5vh' }} title='React Native' src={React} alt='React Native' />
                        <img title='Redux' src={Redux} alt='Redux' />
                        <img title='Ruby' src={Ruby} alt='Ruby' />
                        <img style={{ width: '7vh' }} title='Ruby on Rails' src={Rails} alt='Ruby on Rails' />
                        <img title='Java Spring' style={{ width: '7vh' }} src={Spring} alt='Java Spring' />
                        <img style={{ width: '8vh' }} title='SASS' src={SASS} alt='SASS' />
                    </div>
                    {imagesExtranet.map((url, index) => <img key={index} onClick={() => setExtranetImage({ index, isOpen: true })} style={{ width: '37.5vh' }} src={url} alt='screenshot' />)}
                    <h4>TravelSquare Pricing Comparison Engine (Service)</h4>
                    <p>
                        This is a crawler, created for collecting realtime price from others OTA.
                    </p>
                    <p>Technology:</p>
                    <div className="stack-list">
                        <img title='Javascript' src={Javascript} alt='Javascript' />
                        <img title='NodeJS & ExpressJS' src={NodeJS} alt='NodeJS' />
                        <img title='Puppeteer' src={Puppeteer} alt='Puppeteer' />
                    </div>
                    <i>Images not available.</i>
                </div>
            </div>
            {
                mobImage.isOpen &&
                <Lightbox
                    mainSrc={imagesMob[mobImage.index]}
                    nextSrc={imagesMob[(mobImage.index + 1) % imagesMob.length]}
                    prevSrc={imagesMob[(mobImage.index + imagesMob.length - 1) % imagesMob.length]}
                    onCloseRequest={() => setMobImage({isOpen: false, index: 0})}
                    onMovePrevRequest={() => setMobImage({...mobImage, index: (mobImage.index + imagesMob.length - 1) % imagesMob.length})}
                    onMoveNextRequest={() => setMobImage({...mobImage, index: (mobImage.index + 1) % imagesMob.length})}
                />
            }
            {
                extranetImage.isOpen &&
                <Lightbox
                    mainSrc={imagesExtranet[extranetImage.index]}
                    nextSrc={imagesExtranet[(extranetImage.index + 1) % imagesExtranet.length]}
                    prevSrc={imagesExtranet[(extranetImage.index + imagesExtranet.length - 1) % imagesExtranet.length]}
                    onCloseRequest={() => setExtranetImage({isOpen: false, index: 0})}
                    onMovePrevRequest={() => setExtranetImage({...extranetImage, index: (extranetImage.index + imagesExtranet.length - 1) % imagesExtranet.length})}
                    onMoveNextRequest={() => setExtranetImage({...extranetImage, index: (extranetImage.index + 1) % imagesExtranet.length})}
                />
            }
            {
                tsqImage.isOpen &&
                <Lightbox
                    mainSrc={imagesTsq[tsqImage.index]}
                    nextSrc={imagesTsq[(tsqImage.index + 1) % imagesTsq.length]}
                    prevSrc={imagesTsq[(tsqImage.index + imagesTsq.length - 1) % imagesTsq.length]}
                    onCloseRequest={() => setTsqImage({isOpen: false, index: 0})}
                    onMovePrevRequest={() => setTsqImage({...tsqImage, index: (tsqImage.index + imagesTsq.length - 1) % imagesTsq.length})}
                    onMoveNextRequest={() => setTsqImage({...tsqImage, index: (tsqImage.index + 1) % imagesTsq.length})}
                />
            }
        </div>
    )
}

export default Portfolio