import * as React from "react"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

export default function Nav(props) {
  return (
    <div id="app">
      <Header />
      <main className="content fade-in">{props.children}</main>
      <Footer />
    </div>
  )
}
