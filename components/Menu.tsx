import Link from "next/link"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  gap: 0.5em;
`
const Title = styled.div`
  font-size: 1.17em;
  color: #fff;
  font-weight: 700;
`
const Subtitle = styled.div`
  font-size: 1.17em;
  font-weight: 400;
`

const Menu = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <Wrapper>
      <Title>
        <Link href={`/${title.toLowerCase()}`}>{title}</Link>
      </Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}

export default Menu
