import React from 'react'

export const Heading = ({ url, title }) => (
  <div className='news-Headlines'>
    <a href={url}>
      {title}
    </a>
  </div>
)

export const Content = ({ content }) => (
  <span className='news-body'>{content}</span>
)

export const Publisher = ({ author, source }) => (
  <div>
    <span>{author} </span>
    <span>.</span>
    <span> {source}</span>
  </div>
)

export const Media = ({ url }) => (
  <div className='news-image__container'>
    <img
      className='img-thumbnail img-responsive'
      src={url}
    />
  </div>
)
