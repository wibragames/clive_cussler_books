import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
  header,
  headerInfo,
  bookPicture,
  bookRoles,
  bookDescription,
  bookInfo,
} from "../page.module.css"

const Bookpage = ({ data: {
  wpBook: {
    bookMeta: book,
    storylines: { nodes: storylines },
  }
}
}) => {

  const image = getImage(book.pictureCover.localFile)

  return (
    <Layout>
      <section className={header}>
        <article className={headerInfo}>
          <h1>
            <h2>{book.title}</h2> <h3>{book.publisher}</h3>
          </h1>
          <div className={bookRoles}>
            {storylines.map((storyline, i) => (
              <span key={i}>
              Storyline: {storyline.name} {i + 1 < storyline.length && "- "}
              </span>
            ))}
          </div>
          <div className={bookDescription} dangerouslySetInnerHTML={{ __html: book.description }} />
          <p><span className={bookInfo}>Language:</span> {book.language}</p>
          <p><span className={bookInfo}>Binding:</span> {book.binding}</p>
          <p><span className={bookInfo}>Second autor:</span> {book.secondAutor}</p>
          <p><span className={bookInfo}>Publishing date:</span> {book.publishingDate}</p>
          <p><span className={bookInfo}>Rating:</span> {book.rating}</p>
        </article>
        <GatsbyImage className={bookPicture} image={image} alt={book.pictureCover.altText} />
      </section>
    </Layout>
  )
}

export const query = graphql`
query MyQuery ($slug: String) {
  wpBook (slug: { eq: $slug }) {
    bookMeta {
      title
      description
      pictureCover {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      altText
      }
      language
      ebook
      binding
      publisher
      publishingDate
      secondAutor
      rating
    }
    storylines {
      nodes {
        name
      }
    }
  }
}

`

export default Bookpage