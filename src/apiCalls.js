const checkForErrors = (response) => {
  console.log(response)
  if(!response.ok) {
    throw new Error(response.status)
} else {
    return response.json(); 
}
}

export const fetchArticles = (section) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => checkForErrors(response))
}

export const fetchHomeArticles = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => checkForErrors(response))
}