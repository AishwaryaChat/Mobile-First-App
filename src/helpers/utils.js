export const getById = (data, field = 'id') => {
  let byId = {}
  data.forEach(s => {
    byId[s[field]] = s
  })
  return byId
}

export const getAllIds = (data, field = 'id') => {
  let allIds = []
  data.forEach(s => {
    allIds.push(s[field])
  })
  return allIds
}
