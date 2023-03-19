import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from '../bookCard/bookCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCollection, deleteCollection, addCollection } from '../../actions/bookCollection'
import { Section, Container, Grid, Filler, Counter, Button, Flex } from './bookCollection.style'

function Collection() {
    const dispatch = useDispatch()
    const { title, sortby, cat } = useParams()
    const collection = useSelector(store => store.collection)
    const [startIndex, setStartIndex] = useState(0)
    const API_KEY = 'AIzaSyCVHiavSq2cnPNf-I2xmQIFikB89m-gkaM'
    const API_URL = 'https://www.googleapis.com/books/v1/volumes?'

    useEffect(() => {
        getBooksCollection(API_URL, title, startIndex, 30, sortby, cat, API_KEY)
          .then((result) => startIndex > 0 
                              ? dispatch(addCollection(preparingData(result)))
                              : dispatch(setCollection(preparingData(result))))
          .catch(error => dispatch(deleteCollection()))
    }, [startIndex, title, sortby, cat])

    const handlerClick = () => setStartIndex(collection.items.length - 1)

    return (
      <Section>
        <Container>
          <Flex>
          {
              collection !== 0 && <>
                <Filler>
                  <Counter>Found { collection.total } results</Counter>
                </Filler>
                <Grid>
                  {
                    collection.items.map(item => (
                      <BookCard 
                        key={ item.id + item.etag } 
                        id={ item.id } 
                        cover={ item.imageLinks } 
                        category={ item.categories } 
                        title={ item.title } 
                        authors={ item.authors }
                      />
                    )) 
                  }
                </Grid>
                <Button onClick={ handlerClick }>Load more</Button>
              </>
            }
          </Flex>
        </Container>
      </Section>
    )
}

function preparingData(data){  
  let object = { total: data.totalItems }

  object['items'] = data.items.map(item => ({
    id: item.id,
    etag: item.etag,
    title: item.volumeInfo.title,
    categories: item.volumeInfo?.['categories'],
    authors: item.volumeInfo?.['authors'],
    imageLinks: item.volumeInfo?.['imageLinks'],
  }))

  return object
}

function getBooksCollection(url, search, start=0, max=10, sortby, category, key) { 
  if (!url && !search) {
    throw new Error('Required fields are not filled.')
  } else {
    category = category === 'all' ? '' : '+subject:' + category
    const request = `${ url }q=${ encodeURIComponent(search) }${ category }&maxResults=${ max }&orderBy=${ sortby }&startIndex=${ start }&key=${ key }`

    return axios.get(request)
                  .then((response) => {
                    if ('items' in response.data) {
                      return response.data
                    } else {
                      throw new Error('No books found.')
                    }
                  })
                  .catch((error) => {
                    throw error
                  })
  }
}

export default Collection