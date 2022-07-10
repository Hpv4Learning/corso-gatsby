import React from "react"
import { Layout } from "../components"
import styled from "styled-components"
import image from "../assets/images/big-image.jpeg"

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
        <ImageBox className="spacer">
          <img src={image} />
        </ImageBox>
      </div>
      <div className="spacer"></div>
    </Layout>
  )
}

export default about
