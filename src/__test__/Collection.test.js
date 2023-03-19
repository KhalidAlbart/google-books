const axios = require('axios')

const ORDER_BY = ['relevance', 'newest']
const API_KEY = 'AIzaSyCVHiavSq2cnPNf-I2xmQIFikB89m-gkaM'
const API_URL = 'https://www.googleapis.com/books/v1/volumes?'

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

test('При корректном URL, функция getBooksCollection возвращает объект с результатами запроса', async () => {
    expect(typeof (await getBooksCollection(API_URL, 'flowers', undefined, 30, ORDER_BY[0]))).toBe("object")
})

test('При отсутствии URL, функция getBooksCollection возвращает \'failure\'', async () => {
    expect(await getBooksCollection(null, 'flowers', undefined, 30, ORDER_BY[0])
                    .then(() => "success")
                    .catch(() => "failure"))
    .toBe("failure")
})

test('При отсутсвии результатов, функция getBooksCollection возвращает \'failure\'', async () => {
    expect(await getBooksCollection(API_URL, '"flowersfergtiogejriog"', undefined, 30, ORDER_BY[0])
                    .then(() => "success")
                    .catch(() => "failure"))
    .toBe("failure")
})

test('При отсутсвии строки для поиска, функция getBooksCollection возвращает \'failure\'', async () => {
    expect(await getBooksCollection(API_URL, '', undefined, 30, ORDER_BY[0])
                    .then(() => "success")
                    .catch(() => "failure"))
    .toBe("failure")
})