import React from 'react'
import { useNavigate, generatePath } from 'react-router-dom'
import { Authors, Card, Category, Cover, InfoWrapper, Title, Wrapper } from './bookCard.style'

function BookCard(props) {
    const noCover = 'https://books.google.ru/googlebooks/images/no_cover_thumb.gif'
    const navigate = useNavigate()

    const handlerClick = (id) => {
        let path = generatePath(':id', { id: id })
        navigate(path)
    }

    return (
        <Card onClick={ () => handlerClick(props.id) }>
            <Wrapper>
                <Cover src={ props.cover?.["thumbnail"] || noCover } />
            </Wrapper>
            <InfoWrapper>
                { props.category && <Category>{ props.category }</Category> }
                <Title>{ props.title }</Title>
                <Authors>{ props.authors?.[1] ? props.authors.join(', ') : props.authors }</Authors>
            </InfoWrapper>
        </Card>
    )
}

export default BookCard