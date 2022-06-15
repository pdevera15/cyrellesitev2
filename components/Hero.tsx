import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Title = styled.div`
  margin-top: 4rem;
  font-size: 1.7em;
  font-weight: 400;
  color: #fff;
`

const Subtitle = styled.div`
  font-size: 1.17em;
  font-weight: 200;
  margin-top: 1rem;
  line-height: 1.5em;
  max-width: 24rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`
const Header = () => {
  return (
    <Wrapper>
      <Title>CYRELLE WORKS</Title>
      <Subtitle>
        My personal page, a software developer made in Philippines 🇵🇭 based in
        Tokyo, Japan 🇯🇵
      </Subtitle>
    </Wrapper>
  )
}

export default Header
