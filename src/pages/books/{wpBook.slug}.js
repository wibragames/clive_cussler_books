import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const Bookpage = ({data: {wpBook: {bookMeta: book}}}) => {
  return (
    <Layout pageTitle="Book Template">
    <div>
      <h3>{book.publisher}</h3>
      <h1>{book.title}</h1>
      <div dangerouslySetInnerHTML={{__html: book.description}} />
    </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery($slug: String) {
  wpBook(slug: {eq: $slug}) {
    bookMeta {
      title
      description
      ebook
      fieldGroupName
      language
      publisher
      publishingDate
      rating
      secondAutor
    }
  }
}
`

export default Bookpage