import React from 'react'
import MenuItem from './MenuItem'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuItem label="Biographie" />
      <MenuItem label="Services" />
      <MenuItem label="Conteact" />
    </MenuWrapper>
  )
}

export default Menu
