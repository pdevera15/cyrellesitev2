import styled from "styled-components"
import Header from "../Header"
import { motion } from "framer-motion"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 3rem;
`

const Title = styled.div`
  color: #fff;
  font-size: 2em;
`

const Subtitle = styled.div`
  font-weight: 300;
  font-size: 1em;
  overflow: hidden;
  margin-bottom: 1rem;
`

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
}

const Layout = ({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: JSX.Element | JSX.Element[]
}) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <motion.article
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: "easeInOut" }}
          style={{ position: "relative" }}
        >
          {children}
        </motion.article>
      </Wrapper>
    </>
  )
}

export default Layout
