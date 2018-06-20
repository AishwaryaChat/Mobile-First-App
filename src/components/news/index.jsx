import React, { Component } from 'react'
import { connect } from 'react-redux'

// action
import { startFetchNews } from '../../redux/actions/news'

// selectors
import { getById, getAllIds } from '../../redux/reducers/news'

const mapStateToProps = state => ({
  byId: getById(state),
  allIds: getAllIds(state)
})

const mapDispatchToProps = dispatch => ({
  fetchNews () {
    dispatch(startFetchNews())
  }
})

class NewsComponent extends Component {
  componentDidMount () {
    const { fetchNews } = this.props
    fetchNews()
  }
  render () {
    const { byId, allIds } = this.props
    return (
      <div>
        <h3>Headlines</h3>
        {
          allIds.map((id, index) => {
            const attributes = byId[id]['attributes']
            return (
              <div key={id}>
                <h5><a href={attributes['source_url']}>{attributes['title']}</a></h5>
                <div>
                  <span>Author: {attributes['author']}</span>
                  <span>{' '} Source: {attributes['source']}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const News = connect(mapStateToProps, mapDispatchToProps)(NewsComponent)

export default News
