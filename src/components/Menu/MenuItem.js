import React from 'react'
import PropTypes from 'prop-types'

const MenuItem = ({ label }) => {
  return (
    <div>
      <a href="#">{label}</a>
    </div>
  )
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
}

export default MenuItem
