import styled, { css } from "styled-components";
import * as Constant from '../../constants'

const formFieldsMixin = css({
    fontSize: '1.6rem',
    outline: 0,
    background: '#ffffff',
    padding: '0.5rem 1rem',
    border: '1px solid darkgray',
    borderRadius: '0.5rem',

    [`@media screen and (max-width: 546px)`]: {
        fontSize: Constant.fontSize.sm,
    },
})

export const Form = styled.form({
    gridColumn: 'span 12',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '450px',
    gap: '2.5rem',
})

export const Search = styled.input.attrs({
    type: 'search',
    name: 'search-field',
    className: 'search-field',
})({ 
    width: '100%',
}, formFieldsMixin)

export const Categories = styled.select.attrs({
    name: 'categories',
    className: 'category',
})({ width: 'max-content'}, formFieldsMixin)

export const SortCase = styled.select.attrs({
    name: 'sort',
    className: 'sort',
})({ width: 'max-content' }, formFieldsMixin)

export const Fieldset = styled.fieldset({
    position: 'relative',
    width: 'auto',
    height: 'fit-content',
    border: '0',
})

export const Filler = styled.div({
    width: '100%',
    height: 'fit-content',
})

export const Label = styled.label({
    fontSize: Constant.fontSize.md,
    fontWeight: 500,
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    [`@media screen and (max-width: 546px)`]: {
        fontSize: Constant.fontSize.sm,
        flexDirection: 'column'
    },
})

export const Submit = styled.button.attrs({
    type: 'submit',
})({
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    padding: '0 1rem',
    width: 'fit-content',
    background: 'none',
    border: 0,
    outline: 0,
    cursor: 'pointer',

    [`path`]: {
        transition: '0.2s all ease-in'
    },

    [`&:hover path`]: {
        fill: '#8d8d8d',
        scale: '1.1',
    }
})