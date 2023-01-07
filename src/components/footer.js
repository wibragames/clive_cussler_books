import React from "react"
import {
    wrapper,
    title,
} from "./footer.module.css"

const Footer = ({ siteTitle, companyInfo }) => {
    return (
        <footer className={wrapper}>
            <section>
                <p className={title}>{siteTitle}</p>
                <p>Bjarne van Looke</p>
                <p>All rights reserved.</p>
            </section>
        </footer>
    )
}

export default Footer