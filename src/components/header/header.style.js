import styled from 'styled-components'
import background from '../../assets/background.jpg'
import * as Constant from '../../constants'

export const StyledHeader = styled.header({
    position: 'relative',
    padding: Constant.indent.lg,
    backgroundImage: `url(${ background })`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: 5,

    [`&::after`]: {
        content: '""',
        top: 0,
        left: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: 'radial-gradient(transparent 60%, #000000)',
        backdropFilter: 'brightness(40%)',
        zIndex: 1,
    }
})

export const Container = styled.div({
    position: 'relative',
    maxWidth: Constant.maxWidth,
    zIndex: 150,
})

export const Grid = styled.div({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, minmax(1.25rem, 1fr))',
    placeItems: 'center',
    gap: Constant.indent.lg,

    [`@media screen and (max-width: 800px)`]: {
        gap: Constant.indent.md,
    },

    [`@media screen and (max-width: 546px)`]: {
        gap: Constant.indent.sm,
        gridRowGap: Constant.indent.lg
    },
})

export const Title = styled.h1({
    gridColumn: 'span 12',
    fontSize: Constant.fontSize.xl,
    color: Constant.color.primary,

    [`@media screen and (max-width: 546px)`]: {
        fontSize: Constant.fontSize.lg,
    },
})