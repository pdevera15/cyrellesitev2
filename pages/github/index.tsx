import Layout from "../../components/layout/Layout"
import { GetServerSideProps } from "next/types"
import Timeline from "../../components/Timeline"

const Github = ({ props }: { props: string }) => {
  return (
    <Layout title="Github" subtitle="Github RSS feed">
      <Timeline />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const res: Response = await fetch("https://github.com/pdevera15.atom")
  // const body = await res.text()
  // const result = xml2json(body)
  return {
    props: {},
  }
}

export default Github
