import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Book from "../components/book"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
  section,
  subtitle,
  items,
} from "./page.module.css"


const IndexPage = ({
  data: {
    wpPage: { homePage },
  },
}) => {
  const image = getImage(homePage.picture.localFile)

  return (
    <Layout>
      <section className={header}>
        <article className={headerInfo}>
          <h1 className={headerTitle}>{homePage.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homePage.description,
            }}
          />
          <a className={CTA} target="__blank" href={homePage.callToAction.url}>
            {homePage.callToAction.title}
          </a>
        </article>
        <div>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homePage.picture.altText}
          />
        </div>
      </section>
      <section className={section}>
      <h2 className={subtitle}>Featured Books</h2>
      <p>
         Here are some books that you might want to read. They are our featured books.
      </p>
      <div className={items}>
        {homePage.featuredBooks.map(book => {
          return <Book slug={`books/${book.slug}`} key={book.id} book={book} />
        })}
      </div>
  </section>
    </Layout>
  )
}


export const query = graphql`
  query {
    wpPage(slug: {eq: "home"}) {
      homePage {
        featuredBooks {
          ... on WpBook {
            id
            slug
            bookMeta {
              title
              publisher
              pictureCover {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
        callToAction  {
          title
          url
        }
        title
        description
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default IndexPage