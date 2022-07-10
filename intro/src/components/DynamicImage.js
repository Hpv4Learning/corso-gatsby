import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ImageBox } from "./ImageBox"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const DynamicImage = () => {
  const data = useStaticQuery(query)
  const image = React.useMemo(() => getImage(data.file), [data.file])
  return (
    <div className="spacer">
      {image ? (
        <ImageBox>
          <GatsbyImage
            alt="test"
            image={data.file.childImageSharp.gatsbyImageData}
          />
        </ImageBox>
      ) : null}
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
