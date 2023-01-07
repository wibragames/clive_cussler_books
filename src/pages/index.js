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
  form, 
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
  <section className={form}>
        <form name="contact" method="POST" data-netlify="true">
            <label>Your First Name:</label>
            <input type="text" name="firstname" required={true} />
            <label>Your Last Name:</label>
            <input type="text" name="lastname" required={true} />
            <label>Your Email:</label>
            <input type="email" name="email" required={true} />
            <label>Subject:</label>
            <input type="text" name="subject" required={true} />
            <label>Message:</label>
            <textarea name="message" required={true}></textarea>
            <input type="hidden" name="form-name" value="contact" />
            <button type="submit">Send</button>
        </form>
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