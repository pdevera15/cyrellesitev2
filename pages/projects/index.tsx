import type { GetStaticProps, NextPage } from "next"
import styled from "styled-components"
import Flatcard from "../../src/components/projects/Flatcard"
import Layout from "../../src/components/layout/Layout"
import datas from "../../public/project.json"
interface IProject {
  title: string
  subtitle: string
  link: string
  imgsrc?: string
}
interface IProjects {
  projects: IProject[]
}

const Projects: NextPage<IProjects> = ({ projects }) => {
  return (
    <Layout title="Projects" subtitle="Simple Projects I did.">
      <FlatcardWrapper>
        {projects.map((project, index) => (
          <Flatcard
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            link={project.link}
            imgsrc={`/image/${project.imgsrc}`}
          />
        ))}
      </FlatcardWrapper>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { projects: datas.projects } }
}

const FlatcardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: space-between;
`
export default Projects
