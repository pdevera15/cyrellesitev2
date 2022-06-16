import styled from "styled-components"
import Timeline from "../../src/components/Timeline"
import Layout from "../../src/components/layout/Layout"

const datas = [
  {
    year: "2012",
    events: [
      {
        date: "2022/04",
        title: "Enter High School",
        content: "at Bilogo Batangas City",
      },
      {
        date: "2022/01",
        title: "Happy New Year!",
        content: "New year new you?",
        icon: "🔥",
      },
    ],
  },
  {
    year: "2013",
    events: [
      {
        date: "2022/04",
        title: "Started working in BizForex & BizHawkEye",
        content: "Projects of NTTDATA",
      },
      {
        date: "2022/01",
        title: "Happy New Year!",
        content: "New year new you?",
        icon: "🔥",
      },
    ],
  },
  {
    year: "2014",
    events: [
      {
        date: "2022/04",
        title: "Started working in BizForex & BizHawkEye",
        content: "Projects of NTTDATA",
      },
      {
        date: "2022/01",
        title: "Happy New Year!",
        content: "New year new you?",
        icon: "🔥",
      },
    ],
  },
  {
    year: "2015",
    events: [
      {
        date: "2022/04",
        title: "Started working in BizForex & BizHawkEye",
        content: "Projects of NTTDATA",
      },
      {
        date: "2022/01",
        title: "Happy New Year!",
        content: "New year new you?",
        icon: "🔥",
      },
    ],
  },
  {
    year: "2016",
    events: [
      {
        date: "2022/04",
        title: "Started working in BizForex & BizHawkEye",
        content: "Projects of NTTDATA",
      },
      {
        date: "2022/01",
        title: "Happy New Year!",
        content: "New year new you?",
        icon: "🔥",
      },
    ],
  },
  {
    year: "2017",
    events: [
      {
        date: "2022/04",
        title: "Started working in BizForex & BizHawkEye",
        content: "Projects of NTTDATA",
      },
      {
        date: "2022/01",
        title: "Happy New Year!",
        content: "New year new you?",
        icon: "🔥",
      },
    ],
  },
  {
    year: "2021",
    events: [
      {
        date: "2022/04",
        title: "Started working in BizForex & BizHawkEye",
        content: "Projects of NTTDATA",
      },
      {
        date: "2022/01",
        title: "Happy New Year!",
        content: "New year new you?",
        icon: "🔥",
      },
    ],
  },
]

const Bio = () => {
  return (
    <Layout title="BIO" subtitle="Timeline and milestone of my life">
      {datas.map((data, index) => (
        <Timeline key={index} year={data.year} events={data.events} />
      ))}
    </Layout>
  )
}

export default Bio
