import { useRef } from "react"
import Layout from "../../src/components/layout/Layout"
import { GetStaticProps, NextPage } from "next"
import { useSession, signIn } from "next-auth/react"
import styled from "styled-components"
import GuestBook from "../../src/components/GuestBook"
import prisma from "../../lib/prisma"

const GuestbookWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  margin: auto;
  border-radius: 10px;
  padding: 1em;
  line-height: 2em;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 1em;
`

const Button = styled.button`
  background-color: #df34c2;
  border: 0;
  padding: 0.5em 1em;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
`

const Head = styled.p`
  background-color: transparent;
  padding: 0;
  margin: 0;
  font-weight: bolder;
  font-size: 1.5em;
`

const Subtitle = styled.p`
  background-color: transparent;
  padding: 0;
  margin: 0;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 10px;
`
const InputMessage = styled.input.attrs({ type: "text" })`
  flex-grow: 2;
  border: none;
  border-radius: 10px;
  height: 2em;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`
const SubmitMessage = styled.input.attrs({ type: "submit" })`
  height: 2em;
  border: none;
  padding: 0 12px;
  border-radius: 10px;
`

const GuestBookPage: NextPage = ({ fallbackdata }: any) => {
  const inputEl = useRef<null | HTMLInputElement>(null)
  const submitEntry = async (event: HTMLInputElement) => {
    event.preventDefault
    const res = await fetch("/api/guesbook", {
      body: JSON.stringify({ body: inputEl?.current?.value }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    const { error } = res.json()
    console.log(error)
  }
  const { data, status } = useSession()
  console.log(data, status, fallbackdata)
  return (
    <Layout
      title="My github timeline"
      subtitle="Leave some comment. Surprise me!"
    >
      {status !== "authenticated" ? (
        <GuestbookWrapper>
          <Head>Sign in using Github </Head>
          <Button onClick={() => signIn("github")}>Sign in</Button>
          <Subtitle>
            Your information is only used to display your name
          </Subtitle>
        </GuestbookWrapper>
      ) : (
        <GuestbookWrapper>
          <Head>Share a message to my future visitor.</Head>
          <Subtitle>
            Your information is only used to display your name
          </Subtitle>
          <InputWrapper>
            <form onSubmit={(e) => submitEntry(e)}>
              <InputMessage
                ref={inputEl}
                placeholder="Test Message..."
                type="text"
              />
              <SubmitMessage type="submit" />
            </form>
          </InputWrapper>
        </GuestbookWrapper>
      )}

      <GuestBook entries={fallbackdata}></GuestBook>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const entries = await prisma.guestbook.findMany({
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
