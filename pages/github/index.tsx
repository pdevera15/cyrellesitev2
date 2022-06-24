import Layout from "../../src/components/layout/Layout"
import { GetStaticProps } from "next/types"
import { parse } from "rss-to-json"
import { Github as IGithub } from "../../src/interfaces/Github"
import GithubTimeline from "../../src/components/GithubTimeline"

const Github = ({ data }: { data: IGithub }) => {
  return (
    <Layout title="My github timeline" subtitle={data.title}>
      {data.items.map((x, index) => (
        <GithubTimeline key={index} events={x} />
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const res = await parse("https://github.com/pdevera15.atom", {})
  return {
    props: { data: JSON.parse(JSON.stringify(res)) },
  }
}

export default Github
