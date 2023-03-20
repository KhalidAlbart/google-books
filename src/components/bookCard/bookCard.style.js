import styled from 'styled-components'
import { motion } from 'framer-motion'
import * as Constant from '../../constants'

export const Card = styled(motion.div)({
    width: '100%',
    height: '100%',
    gridColumn: 'span 3',
    background: Constant.color.light,
    padding: Constant.indent.md,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    [`@media screen and (max-width: 1280px)`]: {
        gridColumn: 'span 4',
    },

    [`@media screen and (max-width: 800px)`]: {
        gridColumn: 'span 6',
    },

    [`@media screen and (max-width: 560px)`]: {
        padding: Constant.indent.sm,
    },

    [`@media screen and (max-width: 475px)`]: {
        gridColumn: 'span 12',
        padding: `${ Constant.indent.lg } ${ Constant.indent.md }`,
    },
})

export const Cover = styled.img.attrs({ alt: 'cover.jpg' })({
    height: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
    filter: `drop-shadow(10px 10px 6px ${ Constant.color.secondary })`,
})

export const Wrapper = styled.div({
    width: '100%',
    height: '300px',
    padding: Constant.indent.lg,
    display: 'flex',
    justifyContent: 'center',

    [`@media screen and (max-width: 1024px)`]: {
        height: '260px',
    },

    [`@media screen and (max-width: 800px)`]: {
        height: '230px',
    },

    [`@media screen and (max-width: 560px)`]: {
        height: '200px',
    },

    [`@media screen and (max-width: 475px)`]: {
        height: '300px',
    },
})

export const InfoWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: Constant.indent.sm,

    [`@media screen and (max-width: 475px)`]: {
        gap: Constant.indent.md,
    },
})

export const Category = styled.span({
    fontSize: Constant.fontSize.sm,
    fontWeight: 400,
    color: Constant.color.secondary,
    textDecoration: 'underline',
})

export const Authors = styled(Category)({
    textDecoration: 'none',
})

export const Title = styled.h2({
    fontSize: Constant.fontSize.lg,
    fontWeight: 300,
    color: Constant.color.dark,

    [`@media screen and (max-width: 1024px)`]: {
        fontSize: Constant.fontSize.md,
        fontWeight: 400,
    },

    [`@media screen and (max-width: 475px)`]: {
        fontSize: Constant.fontSize.lg,
    },
})