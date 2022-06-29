import styled from "styled-components"
import { useRouter } from "next/router"
import Link from "next/link"

const Wrapper = styled.div`
  max-width: 780px;
  margin: 1rem 0;
  font-size: 1rem;
  display: flex;
`
const Slash = styled.div`
  margin: 0px 0.6em;
  color: rgba(255, 255, 255, 0.3);
`

const Header = () => {
  const { asPath } = useRouter()
  const path = asPath.slice(1).split("/")
  return (
    <Wrapper>
      <>
        <Link href={"/"}>cyrelle works</Link> <Slash>/</Slash>
        {path[0]}
      </>
    </Wrapper>
  )
}

export default Header
