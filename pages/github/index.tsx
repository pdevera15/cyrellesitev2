import Layout from "../../src/components/layout/Layout"
import { GetStaticProps } from "next/types"
import { parse } from "rss-to-json"
import { Event as IGithub } from "../../src/interfaces/Github"
import GithubTimeline from "../../src/components/GithubTimeline"

const Github = ({ data }: { data: IGithub }) => {
  console.log(data)
  return (
    <Layout title="My github timeline">
      {data.map((x, index) => (
        <GithubTimeline key={index} events={x} />
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/pdevera15/events")
  const data = await response.json()
  console.log(data)
  return {
    props: { data },
  }
}

export default Github
