import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="My Art Portfolio">
      <p>This website is coded by me to present my art portfolio</p>
    </Layout>
  )
}

export const Head = () => <Seo title = "My Art"/>

export default AboutPage




/* // Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="My art portfolio">
      <p>his website is coded by me to present my art portfolio.</p>
    </Layout>
  )
/*     <main>
      <h1>My art portfolio</h1>
      <Link to="/">Back to Home</Link>
      <p>This website is coded by me to present my art portfolio</p>
    </main>
  ) 
}
export const Head = () => <title>My art portfolio</title>
// Step 3: Export your component
export default AboutPage */