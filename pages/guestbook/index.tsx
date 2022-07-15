import Layout from "../../src/components/layout/Layout"
import { GetStaticProps, NextPage } from "next"
import { useSession, signIn } from "next-auth/react"
import styled from "styled-components"

const GuestbookWrapper = styled.div`
  background-color: #424242;
  max-width: 480px;
  margin: auto;
  border-radius: 10px;
  padding: 1em;
  line-height: 2em;
`

const Button = styled.button`
  background-color: #131418;
  border: 0;
  padding: 0.5em 1em;
  border-radius: 10px;
  cursor: pointer;
`

const GuestBookPage: NextPage = ({ fallbackdata }: any) => {
  const { data, status } = useSession()
  console.log(data, status, fallbackdata)
  return (
    <Layout
      title="My github timeline"
      subtitle="Leave some comment. Surprise me!"
    >
      {status !== "authenticated" ? (
        <GuestbookWrapper>
          Sign in using Github <br />
          <Button
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/guestbook",
              })
            }
          >
            Sign in
          </Button>
          <br />
          Your information is only used to display your name
        </GuestbookWrapper>
      ) : (
        <div></div>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const entries = await prisma?.guestbook.findMany({
    orderBy: {
      updated_at: "desc",
    },
  })

  const fallbackdata = entries?.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString(),
  }))

  return {
    props: {
      fallbackdata,
    },
    revalidate: 60,
  }
}
export default GuestBookPage
