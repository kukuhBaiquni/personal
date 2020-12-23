import SS1 from 'assets/images/screenshot/ss1.jpeg'
import SS2 from 'assets/images/screenshot/ss2.jpeg'
import SS3 from 'assets/images/screenshot/ss3.jpeg'
import SS4 from 'assets/images/screenshot/ss4.jpeg'

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="section-header">
                <h4>PORTFOLIO</h4>
            </div>
            <div className="section-body">
                <div className="portfolio-list">
                    <h4>Halal Beef Indonesia (Website)</h4>
                    <p>
                        This website was created to provide information about how to join as a
                        Halal Beef Indonesia member and information about catalogs and product details
                        owned by Halal Beef Indonesia
                    </p>
                    <i>Screenshot for website is not available, sadly the website is down too.</i>
                    <h4>Halal Beef Indonesia (Mobile Apps)</h4>
                    <p>
                        This application is used for consumers to order meat and other Halal Beef Indonesia 
                        products. The orders will automatically go to the nearest member location. 
                        After making a payment (transfer method), the item is prepared by the member and 
                        ready to be sent to the customer.
                    </p>
                    <img src={SS1} alt='screenshot' />
                    <img src={SS2} alt='screenshot' />
                    <img src={SS3} alt='screenshot' />
                    <img src={SS4} alt='screenshot' />
                </div>
            </div>
        </div>
    )
}

export default Portfolio