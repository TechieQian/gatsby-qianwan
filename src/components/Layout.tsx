import * as React from "react"
import useToggle from "../hooks/useToggle"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

export default function Nav(props) {
  const [toggleState, toggle] = useToggle()

  function toggleNight() {
    toggle()
    const element = document.querySelector("html")
    const bgColor = !toggleState ? "#191b1e" : "white"
    element.setAttribute("style", `background-color : ${bgColor}`)
  }
  console.log("uh, rerendering layout")
  return (
    <div id="app">
      <Header />
      <main className="content fade-in">{props.children}</main>
      <Footer />
    </div>
  )
}
