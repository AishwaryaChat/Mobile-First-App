import { NEWS_DATA } from '../../helpers/actions'

import { getById, getAllIds } from '../../helpers/utils'

const emitNewsData = data => ({
  type: NEWS_DATA,
  byId: getById(data),
  allIds: getAllIds(data)
})

const fetchNews = () => {
  let url = ' http://divine-dream-4729.getsandbox.com/articles'
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export const startFetchNews = () => dispatch => {
  return fetchNews()
    .then(response => response.json())
    .then(json => {
      console.log('data inside fetch startFetchNews', json)
      dispatch(emitNewsData(json.data))
    })
    .catch(err => {
      console.error(err)
      // if (err instanceof AuthError) dispatch(emitAuthFailed())
    })
}
