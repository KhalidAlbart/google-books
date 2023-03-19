import React from 'react'
import SearchForm from '../searchForm/searchForm'
import { Outlet, useParams } from 'react-router-dom'
import { StyledHeader, Container, Grid, Title } from './header.style'

function Header(props) {
    const params = useParams()

    return <>
        <StyledHeader>
            <Container>
                <Grid>
                    <Title>Search for books</Title>
                    <SearchForm 
                        title={ params.title || '' } 
                        sortby={ params.sortby || 'relevance' } 
                        cat={ params.cat || 'all' } 
                    />
                </Grid>
            </Container>
        </StyledHeader>
        <Outlet />
    </>
}

export default Header