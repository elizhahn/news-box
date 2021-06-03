export const fetchArticles = (section) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
}

export const fetchHomeArticles = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
}