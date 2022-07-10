import React from "react"
import styled from "styled-components"
import { Button, Layout, CustomButton, DynamicImage } from "../components"
//Far vede dall'insepect come le classi vengono nominate

const Wrapper = styled.div`
  color: #4b4b4b;

  h1 {
    color: #341268;
  }

  .text {
    text-transform: capitalize;
  }
`

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <h1>Sono la home pages</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sed ab
          sunt optio illum at aut sit ea esse quisquam?
        </p>
        <Button>Sono un bottone</Button>
        <CustomButton isFullWidth>Eccomi</CustomButton>
      </Wrapper>

      <div className="spacer">
        <DynamicImage />
      </div>
    </Layout>
  )
}
