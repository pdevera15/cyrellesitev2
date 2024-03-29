import type { NextPage } from "next"
import Hero from "../src/components/Hero"
import styled from "styled-components"
import Menu from "../src/components/Menu"
import { motion } from "framer-motion"

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 3rem 0;
`
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
}
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Divider />
      <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
        style={{ position: "relative" }}
      >
        <Menu
          title="Projects"
          subtitle="Simple projects I worked this virus-years"
        />
        <Menu title="Bio" subtitle="All about me" />
        <Menu title="Blog" subtitle="About anything!" />
        <Menu title="Github" subtitle="My github stories" />
        <Menu title="Guestbook" subtitle="Leave comments :)" />
        <Menu
          title="Email me"
          subtitle="Contact me directly thru email"
          formail={true}
        />
      </motion.article>
    </>
  )
}

export default Home
