import React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { createStyles, Container, Card, Image, Text, Badge, Button, Group, Grid, Title } from '@mantine/core';
import Layout from '../components/layout'

type BlogPostType = {
  id: string
  title: string
  slug: string
  content: {
    childMarkdownRemark: {
      html: string,
      rawMarkdownBody: string
    }
  }
  thumbnail: {
    title: string
    gatsbyImageData: IGatsbyImageData
  }
  tags: string[]
  createdAt: string
}

type postProps = {
  post: BlogPostType
}

const useStyles = createStyles(() => ({
  tags: {
    listStyle: 'none',
    padding: 0,
    'li': {
      listStyle: 'none',
      float: 'left',
      marginRight: '10px'
    },
  },
}));

const blogPost = ({ data: { post } }: PageProps<postProps>) => {
  const { classes } = useStyles();
  const content = post.content ? post.content.childMarkdownRemark.html : ""

  return (
    <Layout>
      <Container size="xl">
        <GatsbyImage
          image={post.thumbnail.gatsbyImageData}
          alt={post.thumbnail.title}
        />
        <Title order={1} my={40}>{post.title}</Title>

        <div
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {post.tags
          &&  <ul className={classes.tags}>
                {post.tags.map(node =>
                  <li key={node}><Badge>#{node}</Badge></li>
                )}
              </ul>
        }
      </Container>
    </Layout>
  );
};
export default blogPost;

export const pageQuery = graphql`
  query( $slug: String ) {
    post: contentfulSampleBlogPost(slug: { eq: $slug }) {
      id
      title
      slug
      content: childContentfulSampleBlogPostContentTextNode {
        childMarkdownRemark {
          html
        }
      }
      thumbnail {
        title
        gatsbyImageData(width: 1600, height: 600)
      }
      tags
      createdAt(formatString: "YYYY-MM-DD")
    }
  }
`;