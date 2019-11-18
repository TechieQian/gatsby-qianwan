import * as React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer>
      <div>
        This client-only page was created with React, TypeScript and AWS. Yes.
        Calling an airstrike on a tricycle.{" "}
        {/* <NavLink to={"resume"}>Download my résumé</NavLink> */}
        <Link to="/resume/">Download my resume</Link>
        <p style={{ marginTop: "5px" }}>© 2019 by qian</p>
      </div>
    </footer>
  )
}
