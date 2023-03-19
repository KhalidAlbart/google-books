import styled from 'styled-components'
import * as Constant from '../../constants'

export const Section = styled.section({
    
})

export const Cover = styled.img.attrs({ alt: 'cover.jpg' })({

})

export const Title = styled.h2({

})

export const Category = styled.span({

})

export const Authors = styled.span({

})

export const Description = styled.p({

})

export const Flex = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column ? 'column': 'row',
    gap: props.gap || 0,
    justifyContent: props.justifyContent || 'center',
    alignItems: props.alignItems || center,
}))

export const Wrapper = styled.div({

})