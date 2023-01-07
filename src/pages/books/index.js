import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Book from "../../components/book"
import {
  section,
  subtitle,
  items,
  description,
} from "../page.module.css"

const BooksPage = ({
  data: {
    allWpBook: { edges: books },
    wpPage: { booksPage },
  },
}) => {
  const image = getImage(booksPage.picture.localFile)
  return (
    <Layout pageTitle="Books from Clive Cussler">
      <GatsbyImage  
        image={image}
        alt={booksPage.picture.altText}
      />
      <section className={section}>
        <h2 className={subtitle}>{booksPage.title}</h2>
        <div
          className={description}
          dangerouslySetInnerHTML={{
            __html: booksPage.description,
          }}
        />
        <div className={items}>
          {books.map(({ node: book }) => (
            <Book key={book.id} slug={book.slug} book={book} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query {
    wpPage(slug: {eq: "books"}) {
      booksPage {
        description
        title
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          altText
        }
      }
    }
    allWpBook {
      edges {
        node {
          bookMeta {
            title
            description
            secondAutor
            pictureCover {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
            }
          }
          id
          slug
        }
      }
    }
  }
`

export default BooksPage