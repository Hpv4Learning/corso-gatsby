import React from "react"
import { Layout } from "../components"
import * as aboutStyle from "../modules/about.module.css"

const about = () => {
  return (
    <Layout>
      <div className={aboutStyle.page}>
        <h1>About Page</h1>
        <p className={aboutStyle.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sed ab
          sunt optio illum at aut sit ea esse quisquam?
        </p>
      </div>
    </Layout>
  )
}

export default about
