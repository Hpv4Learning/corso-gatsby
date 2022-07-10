import React from "react"
import { Layout } from "../components"
import styled from "styled-components"
import image from "../assets/images/big-image.jpeg"
import { StaticImage } from "gatsby-plugin-image"

const ImageBox = styled.div({
  maxWidth: "343px",
  borderRadius: "16px",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  "& img": {
    width: "100%",
  },
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
        <h3>Images</h3>
        <div className="spacer">
          <ImageBox>
            <StaticImage src="../assets/images/big-image.jpeg" />
          </ImageBox>
        </div>
        <div className="spacer">
          <ImageBox>
            <StaticImage src="https://i.pinimg.com/564x/67/6b/4b/676b4b47db6cc1d6e25429858e1a8b2e.jpg" />
          </ImageBox>
        </div>
      </div>
      <div className="spacer"></div>
    </Layout>
  )
}

export default about
