import React from "react"
import { Link } from "gatsby"
export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "4px",
      }}
    >
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contattaci</Link>
      <Link to="/shop/">Shop</Link>
    </nav>
  )
}
