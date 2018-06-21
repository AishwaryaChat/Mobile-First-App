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
      <div className='container'>
        <div>
          <div className='page-header'>
            <h3>Headlines</h3>
          </div>
          {
            allIds.map((id, index) => {
              const attributes = byId[id]['attributes']
              return (
                <div key={id}>
                  <div className='panel panel-default'>
                    <div className="row">
                      <div className="col-md-9 col-xs-8">
                        <div className="news-Headlines">
                          <a href={attributes['source_url']}>
                            {attributes['title']}
                          </a>
                        </div>
                        <div className='panel-body'>
                          
                        </div>
                        <div className="news-author">
                          <span>{attributes['author']} </span>
                          <span>.</span>
                          <span> {attributes['source']}</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-xs-4">
                        <div className="news-image__container">
                          <img
                            className="img-thumbnail img-responsive"
                            src={attributes['media_url']}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const News = connect(mapStateToProps, mapDispatchToProps)(NewsComponent)

export default News
