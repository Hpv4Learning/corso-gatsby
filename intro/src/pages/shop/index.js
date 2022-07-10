import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
const ShopHome = props => {
  console.log(props)
  const title = props.data.site.siteMetadata.title
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
      <div className="spacer">{title}</div>
    </div>
  )
}

export const data = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        dummyData
        type {
          category
          level
          score
        }
        otherCourses {
          category
          level
          score
        }
      }
    }
    allSitePage {
      nodes {
        path
      }
    }
  }
`

export default ShopHome
