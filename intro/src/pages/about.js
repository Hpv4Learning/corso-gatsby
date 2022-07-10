import React from "react"
import { Layout, ImageBox } from "../components"
import { StaticImage } from "gatsby-plugin-image"

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

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <h3>Fixed</h3>
        <ImageBox>
          <StaticImage
            alt="trap"
            src="../assets/images/constrained.jpeg"
            placeholder="tracedSVG"
            layout="constrained"
            height={300}
            className="example-image"
            as="footer"
          />
        </ImageBox>
      </div>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <h3>FullWidth</h3>
        <ImageBox>
          <StaticImage
            alt="trap"
            src="../assets/images/constrained.jpeg"
            placeholder="tracedSVG"
            layout="fullWidth"
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
