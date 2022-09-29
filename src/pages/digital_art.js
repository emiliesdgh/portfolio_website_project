import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const DigitalArtPage = () => {
  return (
    <Layout pageTitle="Digital Art section">
      <p>This section is a groupement of all my digital arts.</p>
    </Layout>
  )
}

export const Head = () => <Seo title = "My Digital Art"/>

export default DigitalArtPage