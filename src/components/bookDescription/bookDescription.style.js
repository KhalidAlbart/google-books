import styled from 'styled-components'
import * as Constant from '../../constants'
import { motion } from 'framer-motion'
import { Grid as Template } from '../header/header.style'

export const Grid = styled(Template)({
    alignItems: 'stretch',
    justifyItems: 'stretch',
    gap: 0,
})

export const Cover = styled.img.attrs({ alt: 'cover.jpg' })({
    objectFit: 'contain',
    width: '100%',
    maxWidth: '300px'
})

export const Title = styled.h2({
    fontSize: Constant.fontSize.lg,
    fontWeight: 500,
    color: Constant.color.dark,
})

export const Category = styled(motion.span)({
    fontSize: Constant.fontSize.sm,
    fontWeight: 400,
    color: Constant.color.secondary,
})

export const Authors = styled(Category)({
    textDecoration: 'underline',
})

export const Description = styled.div({
    fontSize: Constant.fontSize.md,
    fontWeight: 500,
    color: Constant.color.dark,
    padding: Constant.indent.md,
    border: '1px solid ' + Constant.color.light,
    borderRadius: '0.5rem',
    width: '100%',
    minHeight: '200px',
})

export const Flex = styled(motion.div)(props => ({
    display: 'flex',
    width: props.w || 'auto',
    flexDirection: props.column ? 'column' : 'row',
    justifyContent: props.jContent || 'flex-start',
    alignItems: props.aItems || 'flex-start',
    gridColumn: 'span 7',
    paddingTop: Constant.indent[props.pt] || '0',
    paddingRight: Constant.indent[props.pr] || '0',
    paddingBottom: Constant.indent[props.pb] || '0',
    paddingLeft: Constant.indent[props.pl] || '0',
    gap: Constant.indent[props.gap] || '0',

    [`@media screen and (max-width: 800px)`]: {
        gridColumn: 'span 12',
    },
}))

export const Wrapper = styled(motion.div)(props => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '40vw',
    padding: Constant.indent.lg,
    gridColumn: 'span 5',
    background: Constant.color?.[props.bgColor] || 'transparent',

    [`@media screen and (max-width: 800px)`]: {
        gridColumn: 'span 12',
        height: '50vh'
    },
}))

export const Container = styled.div({
    maxWidth: Constant.maxWidth,
    width: '100%',
})

export const Section = styled.section({
    display: 'flex',
    justifyContent: 'center',
})