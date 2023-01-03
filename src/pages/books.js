import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BooksPage = ({
    data: {
      allWpBook: { edges: books },
    },
  }) => {
  
    return (
        <Layout pageTitle="Books of Clive Cussler">
          {books.map((item, index) => {
            const book = item.node.bookMeta;
            return <p key={index}>{book.title} </p>
          })}
        </Layout>
      )
    }

export const query = graphql`
query {
    allWpBook {
        edges {
          node {
            bookMeta {
              title
              description
            }
          }
        }
      }
    }

`

export default BooksPage