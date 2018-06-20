import { NEWS_DATA } from '../../helpers/actions'

const INITIAL_STATE = {
  byId: {},
  allIds: []
}

const news = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_DATA:
      return Object.assign({}, state, {
        byId: action.byId,
        allIds: action.allIds
      })
    default:
      return state
  }
}

// selectors
export const getById = state => state.news.byId
export const getAllIds = state => state.news.allIds

export default news
