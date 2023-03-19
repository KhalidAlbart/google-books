import styled from 'styled-components'
import * as Constant from '../../constants'

export const Card = styled.div({
    width: '100%',
    height: '100%',
    gridColumn: 'span 3',
    background: Constant.color.light,
    padding: Constant.indent.md,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
})

export const Cover = styled.img.attrs({ alt: 'cover.jpg' })({
    height: '100%',
    objectFit: 'contain',
    filter: `drop-shadow(10px 10px 6px ${ Constant.color.secondary })` 
})

export const Wrapper = styled.div({
    width: '100%',
    height: '300px',
    padding: Constant.indent.lg,
    display: 'flex',
    justifyContent: 'center',
})

export const InfoWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: Constant.indent.sm
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
})