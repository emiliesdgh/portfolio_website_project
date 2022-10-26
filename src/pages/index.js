import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <p>this is my home page.</p>
    <StaticImage
      alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
      src="../images/tcqevlpmlp.png"
    />
  </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage