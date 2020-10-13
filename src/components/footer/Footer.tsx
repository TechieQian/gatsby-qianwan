import * as React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer>
      <div>This is a static page using React, TypeScript, and AWS.</div>
      <div className={styles.footer}>
        <Link to="/">About</Link>
        <Link to="/faq/">FAQ</Link>
        <Link to="/resume/">Resume</Link>
      </div>
      <p style={{ marginTop: "5px" }}>© 2020 by qian</p>
    </footer>
  )
}
