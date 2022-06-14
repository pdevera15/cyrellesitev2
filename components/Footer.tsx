import styled from "styled-components"

const Wrapper = styled.div`
  padding-bottom: 2.5rem;
`

const Foot = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  text-align: center;
`
const Footer = () => {
  const getYear = () => {
    const d = new Date()
    return d.getFullYear()
  }

  return (
    <Wrapper>
      <Foot>© Cyrelle {getYear()}</Foot>
    </Wrapper>
  )
}

export default Footer
