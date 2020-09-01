import React from 'react';
import { graphql } from 'gatsby';
import Blocks from '../blocks';
import Layout from '../components/layout';

export default ({ data }) => {
  const { title, blocksJSON } = data.wpPage;
  return (
    <Layout>
      <h1>{title}</h1>
      <Blocks json={blocksJSON} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPage (id: {eq: $id}) {
      title
      authorId
      commentCount
      comments {
        nodes {
          id
        }
      }
      blocksJSON
      content
      date
      featuredImageId
      slug
    }
  }
`