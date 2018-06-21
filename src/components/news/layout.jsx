import React from 'react'

// components
import { Heading, Content, Publisher } from './newsComponents'

const MediaLayout = ({ attributes, parseHTML }) => (
  <div className='row'>
    <div className='col-md-12 col-xs-12'>
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
  </div>
)

export default MediaLayout
