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
`
const Subtitle = styled.div`
  font-size: 1.17em;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.5);
`

const Menu = ({
  title,
  subtitle,
  active = true,
  formail = false,
}: {
  title: string
  subtitle: string
  active?: boolean
  formail?: boolean
}) => {
  const Titlemod = () => {
    if (!active) {
      return (
        <div style={{ display: "flex", flex: "start" }}>
          {title}
          {<div style={{ fontSize: ".5em" }}>UnderConstruction</div>}
        </div>
      )
    } else {
      return (
        <Link
          href={
            !formail
              ? `/${title.toLowerCase().replace(/\s+/g, "")}`
              : `mailto:cy4work@proton.me`
          }
        >
          {title}
        </Link>
      )
    }
  }
  return (
    <Wrapper>
      <Title>{Titlemod()}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}

export default Menu
