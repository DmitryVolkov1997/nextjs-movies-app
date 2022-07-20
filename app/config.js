const BASE_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6633a9ca&s'

const searchByName = (name) => `${BASE_URL}=${name}`

export {BASE_URL, searchByName}