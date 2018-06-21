import React from 'react'

// components
import { Heading, Content, Publisher, Media } from './newsComponents'

const Layout = ({ attributes, parseHTML }) => (
  <div className='row'>
    <div className='col-md-9 col-xs-8'>
      <Heading
        url={attributes['source_url']}
        title={attributes['title']}
      />
      <div className='panel-body'>
        <Content content={parseHTML(attributes['content'])} />
      </div>
      <div className='news-author'>
        <Publisher
          author={attributes['author']}
          source={attributes['source']}
        />
      </div>
    </div>
    <div className='col-md-3 col-xs-4'>
      <Media
        url={attributes['media_url']}
      />
    </div>
  </div>
)

export default Layout
