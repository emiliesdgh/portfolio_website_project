module.exports = {
  siteMetadata: {
    title: `My Portfolio Website`,
    siteUrl: `https://www.yourdomain.tld`,
    description: 'this website is for my art portfolio, modifications on 26.10.2022'
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `digitalArt`,
        path: `${__dirname}/digitalArt`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-remark-images",
  ],
}