import { NextPage } from "next"
import { useSession, signIn } from "next-auth/react"
import Link from "next/link"
import Github from "../github"

const GuestBook: NextPage = () => {
  const { data, status } = useSession()
  console.log(data, status)
  return (
    <div>
      {status === "unauthenticated" && (
        <button
          onClick={() => {
            signIn()
          }}
        >
          LOGIN
        </button>
      )}
    </div>
  )
}

export default GuestBook
