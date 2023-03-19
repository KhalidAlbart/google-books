import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Authors, Category, Cover, Description, Flex, Section, Title, Wrapper } from './bookDescription.style'

function BookDescription(props) {
    const { id } = useParams()
    const [description, setDescription] = useState(0)
    const noCover = 'https://books.google.ru/googlebooks/images/no_cover_thumb.gif'
    const API_URL = 'https://www.googleapis.com/books/v1/volumes/'
    const API_KEY = 'AIzaSyCVHiavSq2cnPNf-I2xmQIFikB89m-gkaM'

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
                description !== 0 && <>
                    <Flex>
                        <Wrapper>
                            <Cover src={ description.volumeInfo.imageLinks?.['thumbnail'] || noCover} />
                        </Wrapper>
                        <Flex>
                            { 
                                description.volumeInfo?.['categories'] &&
                                <Category>{description.volumeInfo?.['categories'].join(', ')}</Category> 
                            }
                            <Flex>
                                <Title>{ description.volumeInfo.title }</Title>
                                { description.volumeInfo?.['authors'] && <Authors>{ description.volumeInfo?.['authors'] }</Authors> }
                            </Flex>
                            <Wrapper>
                                <Description>{ description.volumeInfo.description }</Description>
                            </Wrapper>
                        </Flex>
                    </Flex>
                </>
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