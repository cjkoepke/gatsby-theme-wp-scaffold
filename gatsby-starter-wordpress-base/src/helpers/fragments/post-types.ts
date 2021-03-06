import { graphql } from "gatsby";

export const AllPosts = graphql`
  fragment AllPosts on Query {
    allWpPost(filter: { status: { eq: "publish" } }) {
      nodes {
        blocksJSON
        title
        authorId
        categories {
          nodes {
            id
          }
        }
        commentCount
        comments {
          nodes {
            id
          }
        }
        content
        date
        featuredImageId
        link
      }
    }
  }
`;
export const AllPages = graphql`
  fragment AllPages on Query {
    allWpPage(filter: { status: { eq: "publish" } }) {
      nodes {
        blocksJSON
        title
        authorId
        commentCount
        comments {
          nodes {
            id
          }
        }
        content
        date
        featuredImageId
        link
      }
    }
  }
`;
