import * as React from "react"
import axios from "axios"
import Form from "../components/resume/Form"
import Layout from "../components/Layout"
import "bulma/css/bulma.css"
import "../style/main.scss"

export default function Resume() {
  function postForm(formObj) {
    axios
      .post(
        "https://qtb3jd3vrl.execute-api.us-east-2.amazonaws.com/prod/forward_form",
        formObj
      )
      .then(res => {
        window.open("https://qianwan.dev/doc/Qian_Wan_0719.docx")
      })
  }

  return <Form onPost={postForm} />
}
