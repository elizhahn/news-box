export const formatDate = (date) => {
  const dateSplit = date.split('T')
  return dateSplit[0]
}