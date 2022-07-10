import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ImageBox } from "./ImageBox"
import { GatsbyImage } from "gatsby-plugin-image"

export const DynamicImage = () => {
  const data = useStaticQuery(query)
  return (
    <div className="spacer">
      <ImageBox>
        <GatsbyImage
          alt="test"
          image={data.file.childImageSharp.gatsbyImageData}
        />
      </ImageBox>
    </div>
  )
}

const query = graphql`
  {
    file(relativePath: { eq: "constrained.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: TRACED_SVG
          transformOptions: { grayscale: true }
        )
      }
    }
  }
`
