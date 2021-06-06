export const formatDate = (date) => {
  const dateOnly = date.split('T')
  const convertedDate = dateOnly[0].split('-')
  return `${convertedDate[1]}/${convertedDate[2]}/${convertedDate[0]}`
}

