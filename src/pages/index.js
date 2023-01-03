import * as React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = ({
  data: {
    allWpBook: { edges: books },
  },
}) => {

  return (
    <Layout pageTitle="Books of Clive Cussler">
      {books.map((item) => {
        const book = item.node.bookMeta;
        const slug = item.node.slug;
        return <Link to={`/books/${slug}`}>
          <p key={item.node.id}>{book.title}</p>
        </Link>

      })}
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allWpBook {
    edges {
      node {
        bookMeta {
          title
          publisher
        }
        id
        slug
      }
    }
  }
}

`

export default IndexPage