import React, { useRef, useState } from "react"
import Layout from "../../src/components/layout/Layout"
import { GetStaticProps, NextPage } from "next"
import { useSession, signIn } from "next-auth/react"
import styled from "styled-components"
import GuestBook from "../../src/components/GuestBook"
import prisma from "../../lib/prisma"
import { FormState, Form } from "../../src/lib/types"
import useSWR, { useSWRConfig } from "swr"

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

const GuestBookPage: NextPage = ({ fallbackData }: any) => {
  return (
    <Layout title="My Guestbook" subtitle="Leave some comment. Surprise me!">
      <GuestBook fallbackData={fallbackData}></GuestBook>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: "desc",
    },
  })

  const fallbackData = entries?.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString(),
  }))

  return {
    props: {
      fallbackData,
    },
    revalidate: 60,
  }
}
export default GuestBookPage
