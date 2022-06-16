import Layout from "../../src/components/layout/Layout"
import { GetStaticProps } from "next/types"
import { decode } from "html-entities"
import { XMLParser } from "fast-xml-parser"
import { parse } from "rss-to-json"
import { Github as IGithub } from "../../src/interfaces/Github"
import { useEffect } from "react"
import GithubTimeline from "../../src/components/GithubTimeline"

const Github = ({ data }: { data: IGithub }) => {
  // console.log(data.title)
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
