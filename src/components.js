import styled from 'styled-components'

const BasicBox = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.block};
`

const SectionHeader = styled(BasicBox)`
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: .5vh;
    margin-bottom: 2vh;
    & h4 {
        font-size: 2.5vh;
        margin-left: 2vh;
        color: ${({ theme }) => theme.font};
    }
    & a {
        color: ${({ theme }) => theme.font};
        font-weight: bold;
        font-size: 1.8vh;
        display: none;
        ${({ theme }) => theme.desktop`
            display: flex;
        `}
    }
    & img {
        margin: auto;
        height: 100%;
        width: 95%;
        ${({ theme }) => theme.desktop`
            margin-left: 1vh;
            width: 40vh;
        `}
    }
`

export {
    BasicBox,
    SectionHeader
}