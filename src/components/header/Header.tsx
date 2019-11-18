import React, { useMemo } from "react"
import Img from "./Qian"

const Header = function(props) {
  console.log(" rerendering header")
  return (
    <header className="container">
      <section className="header-top">
        <Img />
        <h1 className="title">Qian Wan</h1>
        <h2 className="subtitle">
          <span>Software Engineer</span>
        </h2>
        <section>
          <IconLink
            classNames="fab fa-github fa-lg"
            link="https://github.com/TechieQian"
            title="github"
          />
          <IconLink
            classNames="fab fa-linkedin fa-lg"
            link="https://www.linkedin.com/in/qianwan08/"
            title="linkedin"
          />
          <IconLink
            classNames="fa fa-envelope fa-lg"
            link="mailto:qiansan@gmail.com"
            title="email me"
          />
          <IconLink
            classNames="fab fa-twitter fa-lg"
            link="https://twitter.com/qiancodes"
            title="twitter"
          />
        </section>
      </section>
    </header>
  )
}

function IconLink(props) {
  return (
    <span className="icon">
      <a title={props.title} href={props.link} target="_blank">
        <i className={props.classNames} />
      </a>
    </span>
  )
}
export default React.memo(Header)
