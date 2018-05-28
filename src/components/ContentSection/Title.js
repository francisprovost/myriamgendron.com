import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ value }) => {
  return (
    <div style={{ width: '100%' }}>
      <h2>{value}</h2>
    </div>
  )
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Title
