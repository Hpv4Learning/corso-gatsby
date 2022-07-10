import React from "react"
import { Layout } from "../components"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const ImageBox = styled.div({
  width: "80vw",
  borderRadius: "16px",
  margin: "unset auto",
  border: "1px solid var(--purple-400)",
  overflow: "hidden",
})

const about = () => {
  return (
    <Layout>
      <h2>About Page</h2>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <h3>Constrained</h3>
        <ImageBox>
          <StaticImage
            alt="trap"
            src="../assets/images/constrained.jpeg"
            placeholder="tracedSVG"
            layout="constrained"
            className="example-image"
            as="footer"
          />
        </ImageBox>
      </div>
      <div className="spacer"></div>
    </Layout>
  )
}

export default about
