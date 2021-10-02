import { css } from 'styled-components'

const func = (args) => css`
    @media only screen and (min-width: 1200px) {
        ${css(args)}
    }
`

const Theme = {
  dark: {
    block: '#303133',
    shade: '#363940',
    font: '#AAA1CA',
    hover: '#765AD8',
    bg: '#434343',
    fontNormal: '#BABABA',
    desktop: func,
  },
  light: {
    block: '#D1D5DA',
    shade: '#BAC3CE',
    font: '#406094',
    hover: '#765AD8',
    bg: '#f0f0f0',
    fontNormal: '#575757',
    desktop: func,
  },
}

export default Theme
