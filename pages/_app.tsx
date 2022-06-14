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
  position: relative;
  min-height: 100vh;
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Head>
        <title>cyrelle works</title>
      </Head>
      <Normalize />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </Wrapper>
  )
}
export default MyApp
