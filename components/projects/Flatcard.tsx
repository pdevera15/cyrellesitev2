/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"
import Link from "next/link"

interface Info {
  title: string
  imgsrc?: string
  subtitle: string
  link: string
}

const Flatcard = ({ title, imgsrc, subtitle, link }: Info) => {
  return (
    <Wrapper>
      <Link href={link} passHref>
        <a target="_blank">
          <img
            style={{ width: "100%", height: "10rem", objectFit: "cover" }}
            src={imgsrc}
            alt={title}
          />
          <Content>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </Content>
        </a>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 0.79em;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
  border-radius: 1em;
  width: 100%;
  @media screen and (min-width: 780px) {
    width: calc(47%);
  }
`

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0);
  padding: 0 1.1rem;
  font-size: 1.3em;
  line-height: 28px;
  h1 {
    background-color: rgba(255, 255, 255, 0);
    font-size: 1.17em;
    font-weight: 400;
    margin: 0;
    margin-top: 1em;
    margin-bottom: 0.6rem;
  }
  p {
    background-color: rgba(255, 255, 255, 0);
    margin: 0;
    margin-bottom: 1.4rem;
    color: rgb(255, 255, 255, 0.5);
    font-weight: 300;
  }
`

export default Flatcard
