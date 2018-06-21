import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

// action
import { startFetchNews } from '../../redux/actions/news'

// selectors
import { getById, getAllIds } from '../../redux/reducers/news'

// components
import Layout from './layout'
import MediaLayout from './mediaLayout'

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
  constructor (props) {
    super(props)
    this.parseHTML = this.parseHTML.bind(this)
  }

  componentDidMount () {
    const { fetchNews } = this.props
    fetchNews()
  }

  parseHTML (content) {
    return ReactHtmlParser(content.slice(0, 50))
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
                    {attributes['media_url'] === ''
                      ? <Layout
                        attributes={attributes}
                        parseHTML={this.parseHTML}
                      />
                      : <MediaLayout
                        attributes={attributes}
                        parseHTML={this.parseHTML}
                      />
                    }
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
