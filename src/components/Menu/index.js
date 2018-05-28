import React from 'react'
import MenuItem from './MenuItem'

const Menu = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <MenuItem label="Biographie" />
      <MenuItem label="Services" />
      <MenuItem label="Conteact" />
    </div>
  )
}

export default Menu
