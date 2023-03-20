import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Authors, Category, Container, Cover, Description, Flex, Grid, Section, Title, Wrapper } from './bookDescription.style'

function BookDescription(props) {
    const { id } = useParams()
    const [description, setDescription] = useState(0)
    const noCover = 'https://books.google.ru/googlebooks/images/no_cover_thumb.gif'
    const API_URL = 'https://www.googleapis.com/books/v1/volumes/'
    const API_KEY = 'AIzaSyAyWp9bHE5EvvEtUVPPlDc81aYeOTnn-wQ'

    useEffect(() => {
        let ignore = false
        
        async function fetchData() {
            if (!ignore) {
                await getBook(API_URL, id, API_KEY)
                        .then((result) => setDescription(result))
                        .catch((error) => setDescription(0))
            }
        }

        fetchData()

        return () => {
            ignore = true
        }
    }, [id])

    return <>
        <Section>
            {
                description !== 0 && 
                <Container>
                    <Grid>
                        <Wrapper
                            bgColor='light'
                            initial={{ opacity: 0, translateX: '-100%' }}
                            animate={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.4, ease: 'circOut' }}>
                            <Cover src={ description.volumeInfo.imageLinks?.['thumbnail'] || noCover} />
                        </Wrapper>
                        <Flex column pt='lg' gap='lg' pl='lg' pr='lg' pb='lg'>
                            {
                                description.volumeInfo?.['categories'] &&
                                <Category
                                    initial={{ opacity: 0, translateY: '-100%' }}
                                    animate={{ opacity: 1, translateY: 0 }}
                                    transition={{ duration: 0.4, ease: 'circOut' }}>
                                    {description.volumeInfo?.['categories'].join(', ')}
                                </Category> 
                            }
                            <Flex 
                                w='100%'
                                column gap='md'
                                initial={{ opacity: 0, translateY: '100%' }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: 0.4, ease: 'circOut' }}>
                                <Title>{ description.volumeInfo.title }</Title>
                                { 
                                    description.volumeInfo?.['authors'] && 
                                    <Authors>{ description.volumeInfo?.['authors'].join(', ') }</Authors>
                                }
                                <Description dangerouslySetInnerHTML={{__html: description.volumeInfo.description }}></Description>
                            </Flex>
                        </Flex>
                    </Grid>
                </Container>
            }
        </Section>
    </>
}

function getBook(url, id, key) {
    if (!url && !id) {
        throw new Error('Not found.')
    } else {
        const request = `${ url }${ id }?projection=full`

        return axios.get(request)
                    .then((response) => response.data,
                          (error) => { throw new Error(error) })
                    .catch((error) => { throw error })
    }
}

export default BookDescription