import React from 'react'
import * as Styled from './Wrapper.styled'

const Wrapper = ({ children }) => {
  return (
    <Styled.ContentWrapper>
        { children }
    </Styled.ContentWrapper>
  )
}

export default Wrapper