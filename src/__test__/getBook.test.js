const axios = require('axios')

const API_URL = 'https://www.googleapis.com/books/v1/volumes/'
const API_KEY = 'AIzaSyCVHiavSq2cnPNf-I2xmQIFikB89m-gkaM'

function getBook(url, id, key) {
    if (!url && !id) {
        throw new Error('Not found.')
    } else {
        const request = `${ url }${ id }?key=${ key }`

        return axios.get(request)
                    .then((response) => response.data,
                          (error) => { throw new Error(error) })
                    .catch((error) => { throw error })
    }
}

test('При корректных URL и ID, функция getBook возвращает \'success\'', async () => {
    expect(
        await getBook(API_URL, 'UYNMAAAAMAAJ', API_KEY)
            .then(() => 'success')
            .catch(() => 'failure')
    ).toBe('success')
})

test('При несуществующем ID, функция getBook возвращает \'failure\'', async () => {
    expect(
        await getBook(API_URL, 'UYNMAAAAMAAJdrgergeger', API_KEY)
            .then(() => 'success')
            .catch(() => 'failure')
    ).toBe('failure')
})

test('При некорректных URL, функция getBook возвращает \'failure\'', async () => {
    expect(
        await getBook(undefined, 'UYNMAAAAMAAJ', API_KEY)
            .then(() => 'success')
            .catch(() => 'failure')
    ).toBe('failure')
})

test('При отсутсвии API_KEY, функция getBook возвращает \'failure\'', async () => {
    expect(
        await getBook(API_URL, 'UYNMAAAAMAAJ')
            .then(() => 'success')
            .catch(() => 'failure')
    ).toBe('failure')
})