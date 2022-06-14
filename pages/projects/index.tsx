import { useState } from "react"
import type { NextPage } from "next"
import styled from "styled-components"
import Flatcard from "../../components/projects/Flatcard"
import image1 from "../../public/githubdevfinder.png"
import Layout from "../../components/layout/Layout"

const FlatcardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: space-between;
`

const Projects: NextPage = () => {
  return (
    <Layout title="Projects" subtitle="Simple Projects I did.">
      <FlatcardWrapper>
        <Flatcard
          subtitle="Github dev finder using GITHUB api with night modenight modenight modenight mode"
          imgsrc={image1.src}
          link="samplelink"
        />
        <Flatcard
          subtitle="Github dev finder using GITHUB api with night mode"
          imgsrc={image1.src}
          link="samplelink"
        />
        <Flatcard
          subtitle="Github dev finder using GITHUB api with night mode"
          imgsrc={image1.src}
          link="samplelink"
        />
      </FlatcardWrapper>
    </Layout>
  )
}

export default Projects
