import * as React from "react"
import { graphql, HeadProps, PageProps, HeadFC, Link } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { Container, Title, Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';

type BlogPostsType = {
  id: string
  title: string
  slug: string
  content: {
    childMarkdownRemark: {
      excerpt: string
    }
  }
  thumbnail: {
    title: string
    gatsbyImageData: IGatsbyImageData
    ThumbnailLg:  IGatsbyImageData
  }
  tags: string[]
  createdAt: string
}

type indexProps = {
  sampleBlogPosts: {
    edges: {
      node: BlogPostsType
    }[]
  }
}

const IndexPage = ({ data: { sampleBlogPosts } }: PageProps<indexProps>) => {
  return (
    <Layout>
      <Container size="xl">
        <Title order={2} mb={80} size="h1">Congratulations! There are your posts from Contentful🎉🎉🎉</Title>

        <Grid>
          {sampleBlogPosts.edges.map(({ node: post }) => {
            return(
            <Grid.Col span={4} key={post.id}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                  <GatsbyImage
                    image={post.thumbnail.gatsbyImageData}
                    alt={post.thumbnail.title}
                  />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{post.title}</Text>
                  <Badge color="gray" variant="light">
                    {post.createdAt}
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  {post.content.childMarkdownRemark.excerpt}
                </Text>

                <Link to={`/post/${post.slug}/`}>
                  <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                    Read more
                  </Button>
                </Link>
              </Card>
            </Grid.Col>
            )
          })}
        </Grid>
      </Container>
      </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

export const query = graphql`
  query {
    sampleBlogPosts: allContentfulSampleBlogPost(
      sort: {
        fields: [createdAt],
        order: [DESC]
      }
      filter: {node_locale: {eq: "en-US"}}
    ){
      edges {
        node {
          id
          title
          slug
          content: childContentfulSampleBlogPostContentTextNode {
            childMarkdownRemark {
              excerpt
            }
          }
          thumbnail {
            title
            gatsbyImageData(width: 900, height: 400)
            ThumbnailLg : gatsbyImageData(width: 1600, height: 600)
          }
          tags
          createdAt(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`;