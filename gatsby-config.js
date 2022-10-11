require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `cmeu-starter-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "spaceId": process.env.CONTENTFUL_SPACE_ID,
        "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
        contentTypeFilter: contentType => contentType.sys.id.startsWith('sampleBlogPost')
      }
    },
    "gatsby-plugin-sass",
  ]
};

