import { css } from "styled-components"

const Theme = {
    dark: {
        block: "#303133",
        font: "#AAA1CA",
        hover: "#765AD8",
        bg: "#434343",
        fontNormal: "#BABABA",
    },
    light: {
        block: "#D1D5DA",
        font: "#406094",
        hover: "#765AD8",
        bg: "#f0f0f0",
        fontNormal: "#575757",
    },
}

export default Object.assign({}, Theme, {
    dark: {
        ...Theme.dark,
        desktop: args => css`
            @media only screen and (min-width: 992px) {
                ${css(...args)}
            }
        `,
        tabletAndPhone: args => css`
            @media only screen and (max-width: 991px) and (min-width: 768px),
                (max-width: 767px) {
                ${css(...args)}
            }
        `,
    },
    light: {
        ...Theme.light,
        desktop: args => css`
            @media only screen and (min-width: 992px) {
                ${css(...args)}
            }
        `,
        tabletAndPhone: args => css`
            @media only screen and (max-width: 991px) and (min-width: 768px),
                (max-width: 767px) {
                ${css(...args)}
            }
        `,
    },
})
