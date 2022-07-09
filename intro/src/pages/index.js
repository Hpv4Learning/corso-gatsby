import React from "react"
import { Layout } from "../components"
//Far vede dall'insepect come le classi vengono nominate
import { page, text } from "../modules/home.module.css"
export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>Sono la home pages</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sed ab
          sunt optio illum at aut sit ea esse quisquam?
        </p>
      </div>
    </Layout>
  )
}
