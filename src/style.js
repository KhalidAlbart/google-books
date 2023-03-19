import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle({
    ['*']: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    [`html`]: {
        fontSize: '10px',
        fontFamily: 'Roboto, sans-serif',
        overflowX: 'hidden'
    },

    [`input[type=search]::-ms-clear, input[type=search]::-ms-reveal`]: {
        display: 'none',
        width: 0,
        height: 0,
    },

    [`input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration`]: {
        display: 'none',
    }
})