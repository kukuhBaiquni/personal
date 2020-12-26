import styled from 'styled-components'
import { BasicBox, SectionHeader } from '../components'

const codewars = 'https://codewars.com'

const AboutBody = styled.section`
    margin-bottom: 10vh;
    position: relative;
`

const ParagraphWrapper = styled(BasicBox)`
    font-size: 2vh;
    color: ${({ theme }) => theme.fontNormal};
    padding: 2vh;
    text-align: center;
    ${({ theme }) => theme.desktop`
        text-align: left;
    `}
    & a {
        color: ${({ theme }) => theme.font};
        font-weight: bold;
    }
`

const AboutMe = ({ aboutRef }) => {
    return (
        <AboutBody ref={aboutRef}>
            <SectionHeader>
                <h4>ABOUT ME</h4>
            </SectionHeader>
            <ParagraphWrapper>
                <p>Hi visitor, I'm a fullstack Javascript developer. I have a great passion about programming, for me programming is like a puzzle game, where you have to solve the problem systematically.</p>
                <p>Basically I love to playing games, that's where i come from. Sometimes I sharpen my problem solving skill at <a href={codewars} target='_blank'>Codewars</a>, if you are a programmer you have to try it (I'm not endorsing, but i can say it's very helpful). I learned python from there.</p>
                <p>I experienced building Website using React JS, Mobile Apps with React Native, and backend Web service (API) using Express JS.</p>
                <p>Sometimes I helped my friends to build a website for their bussiness for free. Yes for free.</p>
            </ParagraphWrapper>
        </AboutBody>
    )
}

export default AboutMe