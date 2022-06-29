import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import fs from "fs"
import path from "path"
import Layout from "../../src/components/layout/Layout"
import matter from "gray-matter"
import { marked } from "marked"
const Slug: NextPage = ({ frontmatter, slug, content }: any) => {
  return (
    <Layout title={frontmatter.title}>
      <div>{frontmatter.date}</div>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Get files from blogs directory
  const files = fs.readdirSync(path.join("blogs"))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }))

  return { paths, fallback: false }
}
export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  const markdownwithmeta = fs.readFileSync(
    path.join("blogs", slug + ".md"),
    "utf-8"
  )

  const { data: frontmatter, content } = matter(markdownwithmeta)
  return {
    props: { frontmatter, slug, content },
  }
}
export default Slug
