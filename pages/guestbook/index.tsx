import React, { useRef, useState } from "react"
import Layout from "../../src/components/layout/Layout"
import { GetStaticProps, NextPage } from "next"
import { useSession, signIn } from "next-auth/react"
import styled from "styled-components"
import GuestBook from "../../src/components/GuestBook"
import prisma from "../../lib/prisma"
import { FormState, Form } from "../../src/lib/types"

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
const SubmitMessage = styled.button`
  height: 2em;
  border: none;
  padding: 0 12px;
  border-radius: 10px;
`

const GuestBookPage: NextPage = ({ fallbackdata }: any) => {
  const inputEl = useRef<null | HTMLInputElement>(null)
  const [form, setForm] = useState<FormState>({ state: Form.INITIAL })

  const submitEntry = async (event: React.MouseEvent) => {
    event.preventDefault()
    setForm({ state: Form.LOADING })
    const res = await fetch("/api/guestbook", {
      body: JSON.stringify({ body: inputEl?.current?.value }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    const { error } = await res.json()
    if (error) {
      setForm({ state: Form.ERROR, message: error })
      return
    }

    inputEl.current.value = ""
    setForm({
      state: Form.SUCCESS,
      message: "Thank you for signing my guestbook!",
    })
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
            <form onClick={(event: React.MouseEvent) => submitEntry(event)}>
              <InputMessage
                ref={inputEl}
                placeholder="Test Message..."
                type="text"
              />
              <SubmitMessage>
                {form.state === Form.LOADING ? "Spinner" : "Submit"}
              </SubmitMessage>
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
