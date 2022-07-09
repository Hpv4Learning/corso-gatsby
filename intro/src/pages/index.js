import React from "react"
import { Link } from "gatsby"
export default function Home() {
  return (
    <div>
      <h1>Sono la home pages</h1>
      <nav
        style={{
          display: "flex",
          gap: "4px",
        }}
      >
        <Link to="/about/">About</Link>
        <Link to="/shop/">Shop</Link>
        <a href="/contact/">Contatti</a>
      </nav>
    </div>
  )
}
