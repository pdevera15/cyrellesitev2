import Image from "next/image"
import Link from "next/link"
import React from "react"
import styled from "styled-components"

const GithubTimeline = ({ year, events }: { year?: string; events: any }) => {
  const eventTypeHandler = (event: any) => {
    switch (event.type) {
      case "PushEvent":
        return `Pushed to ${event.repo.name}`
      case "CreateEvent":
        if (event.payload.ref_type === "branch") {
          return `Created new branch: ${event.payload.ref} of ${event.repo.name}`
        } else if (event.payload.ref_type === "repository") {
          return `Created new repository ${event.repo.name}`
        }
      case "WatchEvent":
        return `Starred Repo ${event.repo.name}`
    }
  }

  return (
    <>
      <YearHeader>{year}</YearHeader>
      <ViewCotainer>
        <TimelineRow>
          <TimelineIconContainer>
            <TimelineIcon>
              <Image
                src={events.actor.avatar_url}
                height={30}
                width={30}
                alt="profilePicture"
              />
            </TimelineIcon>
          </TimelineIconContainer>
          <TimelineContent>
            <Link href={events.repo.url}>
              <a target="_BLANK">{eventTypeHandler(events)}</a>
            </Link>
          </TimelineContent>

          <Card>
            {events.payload &&
              events.payload.commits &&
              events.payload.commits[0] &&
              events.payload.commits[0].message}
            {events.payload && events.payload.description}
            <DateWrapper>
              {new Date(events.created_at).toLocaleString("jp-JP")}
            </DateWrapper>
          </Card>
        </TimelineRow>
        {/* {events.map((data: any, index: Key) => {
          return (
            <TimelineRow key={index}>
              <TimelineIconContainer>
                <TimelineIcon>
                  <Dot />
                </TimelineIcon>
              </TimelineIconContainer>
              <TimelineContent>{data?.title}</TimelineContent>
              {data?.content && (
                <Card>
                  {data?.content}
                  {data?.date && <DateWrapper>{data?.date}</DateWrapper>}
                </Card>
              )}
            </TimelineRow>
          )
        })} */}
      </ViewCotainer>
    </>
  )
}

const YearHeader = styled.div`
  padding: 20px 10px;
  font-size: 1.5em;
  :not(:first-child) {
    padding-top: 3rem;
  }
`
const ViewCotainer = styled.div`
  margin-top: 1.5rem;
  margin-left: 14px;
  position: relative;
  font-weight: 300;
  letter-spacing: 0.02em;
  font-size: 0.92rem;
  &::before {
    content: "";
    position: absolute;
    left: -2px;
    top: 10px;
    bottom: 0;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`

const TimelineRow = styled.div`
  display: block;
  position: relative;
  padding-left: 28px;
  &:not(:first-child) {
    margin-top: 2.7rem;
  }
`

const TimelineIconContainer = styled.div`
  position: absolute;
  left: -12px;
  top: -1px;
  width: 22px;
  height: 22px;
`

const Card = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  padding: 1.4rem;
  z-index: 2;
  line-height: 1.4;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
`

const TimelineIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const TimelineContent = styled.div`
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  word-spacing: 0.1em;
  white-space: pre-wrap;
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
`

const DateWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0);
  font-size: 0.8em;
`

export default GithubTimeline
