import React from 'react'
import PropTypes from 'prop-types'
import Title from './Title'

const ContentSection = ({ title, children }) => {
  return (
    <div style={{ width: '100%' }}>
      <Title value={title} />
      {children}
    </div>
  )
}

ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default ContentSection
