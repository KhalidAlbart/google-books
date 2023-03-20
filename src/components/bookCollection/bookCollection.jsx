import React, { useEffect, useState } from 'react'
import { setCollection, deleteCollection, addCollection } from '../../actions/bookCollection'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import BookCard from '../bookCard/bookCard'
import { Section, Container, Grid, Filler, Counter, Button, Flex, Constant } from './bookCollection.style'

function Collection() {
    const dispatch = useDispatch()
    const { title, sortby, cat } = useParams()
    const [startIndex, setStartIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const collection = useSelector(store => store.collection)
    const API_KEY = 'AIzaSyAyWp9bHE5EvvEtUVPPlDc81aYeOTnn-wQ'
    const API_URL = 'https://www.googleapis.com/books/v1/volumes?'

    useEffect(() => {
        async function loadData() {
          await getBooksCollection(API_URL, title, startIndex, 30, sortby, cat, API_KEY)
                  .then((result) => startIndex > 0 
                                      ? dispatch(addCollection(preparingData(result)))
                                      : dispatch(setCollection(preparingData(result))))
                  .catch(error => dispatch(deleteCollection()))
          
          await setIsLoading(false)
        }

        loadData()
    }, [startIndex, title, sortby, cat])

    const handlerClick = () => {
      setIsLoading(true)
      setStartIndex(collection.items.length - 1)
    }

    return (
      <Section>
        <Container>
          {
              collection !== 0 && 
              <Flex>
                <Filler
                  initial={{ opacity: 0, translateY: '-100%' }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}>
                  <Counter>Found { collection.total } results</Counter>
                </Filler>
                <Grid>
                  {
                    collection.items.map((item, index) => (
                      <BookCard
                        key={ item.id + item.etag } 
                        id={ item.id } 
                        cover={ item.imageLinks } 
                        category={ item.categories } 
                        title={ item.title } 
                        authors={ item.authors }
                        delay={ ((index - startIndex + 1) * 0.1) }
                      />
                    )) 
                  }
                </Grid>
                <LoadMore isLoading={ isLoading } handler={ handlerClick } />
              </Flex>
          }
        </Container>
      </Section>
    )
}

function LoadMore({ isLoading, handler }) {
  return (
    <Button
      initial={{ background: Constant.color.primary }}
      whileHover={{ background: Constant.color.secondary }}
      transition={{ duration: 0.1, ease: 'linear' }}
      onClick={ handler }
    >
      { isLoading ? '... loading' : 'Load more' }
    </Button>
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
    const request = `${ url }q=${ encodeURIComponent(search) }${ category }&maxResults=${ max }&orderBy=${ sortby }&printType=books&startIndex=${ start }&key=${ key }`

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