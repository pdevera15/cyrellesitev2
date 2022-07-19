import React from "react"
import styled from "styled-components"

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
const BodyText = styled.div`
  text-align: justify;
`
const Details = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: small;
`

function GuestBook({ entries }: any) {
  return (
    <Wrapper>
      {entries &&
        entries.map((entry: any) => (
          <Comment key={entry.id}>
            <BodyText>{entry.body}</BodyText>
            <Details>
              {entry.created_by} / {entry.updated_at}
            </Details>
          </Comment>
        ))}
    </Wrapper>
  )
}

export default GuestBook
