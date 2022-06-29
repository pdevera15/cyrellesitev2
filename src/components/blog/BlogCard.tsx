import Link from "next/link"
import styled from "styled-components"

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

const ImageWrapper = styled.div`
  height: 10rem;
  width: 100%;
  object-fit: cover;
`

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0);
  font-size: 1.3em;
  line-height: 28px;
  margin: 1.4rem 1rem;
  p {
    font-size: small;
    background-color: rgba(255, 255, 255, 0);
    margin: 0;
    color: rgb(255, 255, 255, 0.5);
    font-weight: 300;
  }
`
const BlogCard = ({
  slug,
  title,
  date,
}: {
  slug: string
  title: string
  date: string
}) => {
  return (
    <Link href={`/blog/${encodeURIComponent(slug)}`}>
      <Wrapper>
        <ImageWrapper></ImageWrapper>
        <Content>
          {title}
          <p>{date}</p>
        </Content>
      </Wrapper>
    </Link>
  )
}

export default BlogCard
