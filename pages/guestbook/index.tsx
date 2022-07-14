import Layout from "../../src/components/layout/Layout"
import { NextPage } from "next"
import { useSession, signIn } from "next-auth/react"
import styled from "styled-components"

const GuestbookWrapper = styled.div`
  background-color: #424242;
  margin: auto;
  border-radius: 10px;
  padding: 1em;
  line-height: 2em;
`

const GuestBook: NextPage = () => {
  const { data, status } = useSession()
  return (
    <Layout
      title="My github timeline"
      subtitle="Leave some comment. Surprise me!"
    >
      <GuestbookWrapper>
        Sign in using Github <br />
        Your information is only used to display your name
      </GuestbookWrapper>
    </Layout>
  )
}

export default GuestBook
