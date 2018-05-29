import React from 'react'
import Link from 'gatsby-link'
import ContentSection from '../components/ContentSection'
import Who from '../components/sections/Who'

const IndexPage = () => (
  <div>
    <ContentSection title="Qui suis-je">
      <Who />
    </ContentSection>
  </div>
)

export default IndexPage
