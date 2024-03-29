import React, { useRef, useState, Suspense } from "react"
import styled from "styled-components"
import useSWR, { useSWRConfig } from "swr"
import fetcher from "../../src/lib/fetcher"
import { FormState, Form } from "../../src/lib/types"
import { useSession, signIn } from "next-auth/react"
import Spinner from "../../src/components/Spinner"
import { MdDeleteOutline } from "react-icons/md"
import { IconContext } from "react-icons"
import { format } from "date-fns"

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

interface ISubmit {
  state?: "success" | "failed"
}
const Subtitle = styled.p<ISubmit>`
  background-color: transparent;
  padding: 0;
  margin: 0;
  ${(props) => props.state === "success" && "color: green"};
`
const InputWrapper = styled.form`
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
  border-color: transparent;
  border-radius: 10px;
  width: 2em;
  background-color: #df34c2;
  width: 8em;
`

const Wrapper = styled.div`
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 2.5em;
`
const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`

const BodyText = styled.div`
  text-align: justify;
`

const Details = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: small;
`

export default function Guestbook({ fallbackData }: any) {
  const { status, data: session } = useSession()
  const { mutate } = useSWRConfig()
  const inputEl = useRef<null | HTMLInputElement>(null)
  const [form, setForm] = useState<FormState>({ state: Form.INITIAL })
  const { data: entries }: any = useSWR("api/guestbook", fetcher, {
    fallbackData,
  })

  const deleteEntry = async (id: number) => {
    await fetch(`api/guestbook/${id}`, {
      method: "DELETE",
    })
    mutate("api/guestbook")
  }

  const submitEntry = async (event: React.FormEvent<HTMLFormElement>) => {
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
    mutate("api/guestbook")
  }

  return (
    <>
      {status !== "authenticated" ? (
        <GuestbookWrapper>
          <Head>Sign in using Github </Head>
          <Button onClick={() => signIn("github")}>Sign in</Button>
          <Subtitle>
            Your information is only used to display your name
          </Subtitle>
        </GuestbookWrapper>
      ) : (
        <>
          <GuestbookWrapper>
            <Head>Share a message to my future visitor.</Head>
            <Subtitle>
              Your information is only used to display your name
            </Subtitle>
            {form.state === Form.SUCCESS && (
              <Subtitle state={"success"}>{form.message}</Subtitle>
            )}
            <InputWrapper onSubmit={submitEntry}>
              <InputMessage
                ref={inputEl}
                placeholder="Test Message..."
                type="text"
                required={true}
                disabled={form.state === Form.LOADING ? true : false}
              />
              <SubmitMessage
                disabled={form.state === Form.LOADING ? true : false}
              >
                {form.state === Form.LOADING ? <Spinner /> : "Submit"}
              </SubmitMessage>
            </InputWrapper>
          </GuestbookWrapper>
        </>
      )}
      <Wrapper>
        <Suspense fallback={null}>
          {entries &&
            entries.map((entry: any) => (
              <CommentWrapper key={entry.id}>
                <Comment>
                  <BodyText>{entry.body}</BodyText>
                  <Details>
                    {entry.created_by} /{" "}
                    {format(
                      new Date(entry.updated_at),
                      "d MMM yyyy 'at' h:mm bb"
                    )}
                  </Details>
                </Comment>
                {session && session.user.name === entry.created_by && (
                  <IconContext.Provider
                    value={{ style: { color: "white", cursor: "pointer" } }}
                  >
                    <MdDeleteOutline onClick={() => deleteEntry(entry.id)} />
                  </IconContext.Provider>
                )}
              </CommentWrapper>
            ))}
        </Suspense>
      </Wrapper>
    </>
  )
}
