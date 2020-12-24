
import { ReactComponent as Tree } from 'assets/images/tree.svg'

const Experience = ({experienceRef}) => {
    return (
        <div ref={experienceRef} className="experience-container">
            <div className="section-header">
                <h4>PROFESIONAL EXPERIENCE</h4>
            </div>
            <div className="section-body">
                <div className="exp-body">
                    <Tree />
                    <div className="exp-wrapper">
                        <div className="list-exp">
                            <p>Frontend Developer</p>
                            <h5>PT. Ramat Loka Teknologi - DotErb Solution</h5>
                            <i>Oct 2019 - Present</i>
                        </div>
                        <div className="list-exp">
                            <p>Fullstack Developer</p>
                            <h5>PT. Halal Pangan Nusantara (Halal Beef Indonesia)</h5>
                            <i>Aug 2018 - Aug 2019</i>
                        </div>
                        <div className="list-exp">
                            <p>Student</p>
                            <h5>Rubicamp - Fullstack Programming Bootcamp</h5>
                            <i>Feb 2018 - May 2018</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience