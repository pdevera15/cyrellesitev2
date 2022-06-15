import type { AppProps } from "next/app"
import Footer from "../components/Footer"
import { Normalize } from "styled-normalize"
import GlobalStyle from "../styles/GlobalStyle"
import styled from "styled-components"
import Head from "next/head"

const Wrapper = styled.div`
  max-width: 780px;
  margin: auto;
  padding: 0px 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Content = styled.div`
  flex-grow: 1;
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Head>
        <title>cyrelle works</title>
      </Head>
      <Normalize />
      <GlobalStyle />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </Wrapper>
  )
}
export default MyApp
