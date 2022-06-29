import { GetStaticProps, NextPage } from "next"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Key } from "react"
import Layout from "../../src/components/layout/Layout"
import BlogCard from "../../src/components/blog/BlogCard"
import styled from "styled-components"

const Blog: NextPage = ({ blogs }: any) => {
  return (
    <Layout
      title="Blog"
      subtitle="Blogs about everything, literally everything"
    >
      <BlogCardWrapper>
        {blogs.map(({ slug, frontmatter }: any, index: Key) => (
          <BlogCard
            key={index}
            slug={slug}
            title={frontmatter.title}
            date={frontmatter.date}
          />
        ))}
      </BlogCardWrapper>
    </Layout>
  )
}

const BlogCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: space-between;
`

export const getStaticProps: GetStaticProps = async (context) => {
  // Get files from blogs directory
  const files = fs.readdirSync(path.join("blogs"))

  // Get slug and frontmatter fro blogs
  const blogs = files.map((filename) => {
    const slug = filename.replace(".md", "")
    const markdownwithmeta = fs.readFileSync(
      path.join("blogs", filename),
      "utf-8"
    )
    const { data: frontmatter } = matter(markdownwithmeta)
    return { slug, frontmatter }
  })
  return { props: { blogs } }
}
export default Blog
