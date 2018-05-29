import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100;
  display: flex;
  align-items: center;
  height: center;
`

const TitleLine = styled.div`
  background-color: #000000;
  height: 3px;
  flex-grow: 1;
`

const TitleContent = styled.h2`
  margin: 0 25px;
`

const Title = ({ value }) => {
  return (
    <Wrapper>
      <TitleLine />
      <TitleContent>{value}</TitleContent>
      <TitleLine />
    </Wrapper>
  )
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Title
