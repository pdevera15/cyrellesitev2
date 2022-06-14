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
  return (
    <Wrapper>
      <Link href={"/"}>CYRELLE WORKS</Link> <Slash>/</Slash> {asPath.slice(1)}
    </Wrapper>
  )
}

export default Header
