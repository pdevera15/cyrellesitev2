import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 780px;
  width: 100%;
  padding: 3em 0 1.5em;
  text-align: center;
`
const Footer = () => {
  const getYear = () => {
    const d = new Date()
    return d.getFullYear()
  }

  return <Wrapper>© Cyrelle {getYear()}</Wrapper>
}

export default Footer
