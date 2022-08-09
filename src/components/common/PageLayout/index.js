import React from 'react'
import Layout from '../Layout'
import * as Styled from './PageLayout.styled'

const PageLayout = ( {children} ) => {
  return (
    <Layout>
    <Styled.PageWrapper>
        { children }
    </Styled.PageWrapper>
    </Layout>
  )
}

export default PageLayout