import styled from "styled-components"
import Timeline from "../../src/components/Timeline"
import Layout from "../../src/components/layout/Layout"

const datas = [
  {
    year: "2016",
    events: [
      {
        date: "2016/06",
        title: "Graduated College",
        content:
          "Getting out at college was fun, thinking that after several years of working I may have my own house, car, and family. But not that how world works on me. lol",
      },
    ],
  },
  {
    year: "2017",
    events: [
      {
        date: "2017/04",
        title: "First time in Japan 🇯🇵",
        content:
          "I went in Japan to study Japanese language and really dont know what future holds in me.",
      },
    ],
  },
  {
    year: "2018",
    events: [
      {
        date: "2018/04",
        title: "Got my FIRST JOB!",
        content:
          "After 1 year of studying Japanese Language while doing part time job at the same, I finally got my first job as an IT! who knows that I can be an IT in Japan!",
      },
      {
        date: "2018/07",
        title: "Working on my first project",
        content:
          "After 3 months of training of basic coding and business manner, I participated in my first Project. Luckily, most of my task is coding, the programming language we used is JAVA",
        icon: "🔥",
      },
      {
        date: "2018/12",
        title: "Working on my second project",
        content:
          "After 4 months of java programming, my next adventure is PL/SQL. Where it helps me to streghten my knowledge on database side.",
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
