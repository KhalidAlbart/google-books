import styled from 'styled-components'
import { Grid } from '../header/header.style'
import * as Constant from '../../constants'

export { Grid }

export const Section = styled.section({
    padding: Constant.indent.lg
})

export const Container = styled.div({
    maxWidth: Constant.maxWidth,
})

export const Flex =  styled.div({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: Constant.indent.lg
})

export const Filler = styled.div({
    gridColumn: 'span 12',
    textAlign: 'center'
})

export const Counter = styled.span({
    fontSize: Constant.fontSize.md,
    fontWeight: 600,
    color: Constant.color.secondary,
})

export const Button = styled.button({
    padding: '0.5rem 1rem',
    outline: 0,
    border: '1px solid' + Constant.color.secondary,
    background: Constant.color.primary,
    fontSize: Constant.fontSize.md,
    borderRadius: '0.5rem',
    transition: '0.2s background ease-in',

    [`&:hover`]: {
        background: Constant.color.secondary,
    }
})