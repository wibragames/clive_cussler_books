import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
const BookPage = () => {
  return (
    <Layout pageTitle="Books of Clive Cussler">
       {edges.map((item) => {
        const artist = item.node.bookMeta;
        return <p key={item.node.title}>{artist.description}</p>
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
            pictureCover {
              localFile {
                url
              }
            }
          }
        }
      }
    }
  }

`
export default BookPage