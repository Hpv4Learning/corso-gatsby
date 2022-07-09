import React from "react"
// Solo in development sarà presente anche in pagine senza layout
import "../layout.css"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  )
}
