import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Grid as Template } from '../header/header.style'
import * as Constant from '../../constants'

export { motion, Constant }

export const Grid = styled(Template)({
    [`@media screen and (max-width: 1024px)`]: {
        gap: Constant.indent.md,
    },

    [`@media screen and (max-width: 800px)`]: {
        gap: Constant.indent.lg,
    },

    [`@media screen and (max-width: 674px)`]: {
        gap: Constant.indent.md,
    },

    [`@media screen and (max-width: 475px)`]: {
        columnGap: 0,
        rowGap: Constant.indent.md,
    },
})

export const Section = styled.section({
    padding: Constant.indent.lg
})

export const Container = styled.div({
    maxWidth: Constant.maxWidth,
})

export const Flex =  styled(motion.div)({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: Constant.indent.lg
})

export const Filler = styled(motion.div)({
    gridColumn: 'span 12',
    textAlign: 'center'
})

export const Counter = styled.span({
    fontSize: Constant.fontSize.md,
    fontWeight: 600,
    color: Constant.color.secondary,
})

export const Button = styled(motion.button)({
    padding: '0.5rem 1rem',
    outline: 0,
    border: '1px solid' + Constant.color.secondary,
    fontSize: Constant.fontSize.md,
    borderRadius: '0.5rem',
})