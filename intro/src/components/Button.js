import styled from "styled-components"

export const Button = styled.button`
  border: 1px solid #8769fe;
  background: #8769fe;
  color: white;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 40px;
  padding: 0px 12px;
  margin: 16px 0px;
  cursor: pointer;
  &:hover {
    background: #a435f0;
  }
`

export const CustomButton = styled(Button)(
  ({ isFullWidth }) => ({
    width: isFullWidth ? "100%" : "fit-content",
  }),
  {
    background: "#341268",
  }
)
