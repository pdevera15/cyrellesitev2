import Link from "next/link"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  gap: 0.5em;
`
const Title = styled.div`
  font-size: 1.7em;
  color: #fff;
  font-weight: 500;
`
const Subtitle = styled.div`
  font-size: 1.17em;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.5);
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
