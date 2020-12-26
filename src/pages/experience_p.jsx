
import styled from 'styled-components'
import { BasicBox, SectionHeader } from '../components'
import { ReactComponent as Tree } from 'assets/images/tree.svg'

const ExperienceFill = styled(BasicBox)`
    padding: 5vh 2vh .5vh;
    display: flex;
    margin-bottom: 10vh;
    svg {
        height: 38vh;
        rect {
            fill: ${({ theme }) => theme.font};
        }
        circle {
            fill: ${({ theme }) => theme.font};
        }
    }
    .exp-wrapper {
        .list-exp {
            margin-bottom: 5vh;
            font-size: 2vh;
            h5 {
                margin: 0;
                color: ${({ theme }) => theme.font};
            }
            p {
                margin: 0;
                color: ${({ theme }) => theme.fontNormal};
                line-height: 3vh;
            }
            i {
                color: ${({ theme }) => theme.fontNormal};
                line-height: 4vh;
            }
        }
    }
`

const Experience = ({ experienceRef }) => {
    return (
        <section ref={experienceRef}>
            <SectionHeader>
                <h4>PROFESIONAL EXPERIENCE</h4>
            </SectionHeader>
            <ExperienceFill>
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
            </ExperienceFill>
        </section>
    )
}

export default Experience