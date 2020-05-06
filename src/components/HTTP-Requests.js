export const HttpGet = (id) => { 
  return fetch(
    `https://movie-database-imdb-alternative.p.rapidapi.com/?i=${id}&r=json`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
        'x-rapidapi-key': '3e7a2c9dfdmsh9b187f8271e7cecp1c2430jsn7fda3a194e2b'
      }
    }
  )
    .then(response => response.json());
}