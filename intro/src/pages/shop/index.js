import React from "react"
import { Link } from "gatsby"
const ShopHome = () => {
  return (
    <div>
      <h1>ShopHome</h1>
      <nav
        style={{
          display: "flex",
          gap: "4px",
        }}
      >
        <Link to="/">Home</Link>
        {/* Path Relativo */}
        <Link to="shoes">Shoes</Link>
        {/* Path assoluto */}
        {/* <Link to="/socks/">Socks</Link> */}
        <Link to="/shop/socks/">Socks</Link>
      </nav>
    </div>
  )
}

export default ShopHome
