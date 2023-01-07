import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  wrapper,
  image,
} from "./book.module.css"

const Book = ({ book, slug }) => {
    const cover = getImage(book.bookMeta.pictureCover.localFile)
    return (
      <Link className={wrapper} to={slug}>
        <GatsbyImage
         className={image}
          image={cover}
          alt={book.bookMeta.pictureCover.altText}
        />
      </Link>
    )
  }

export default Book;