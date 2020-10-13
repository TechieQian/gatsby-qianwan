import * as React from "react"
import Form from "../components/resume/Form"
import services from "../services/ApiService"

export default function Resume() {
  return <Form onPost={services.postForm} />
}
