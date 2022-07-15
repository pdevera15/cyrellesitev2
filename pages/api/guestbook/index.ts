import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

import prisma from "../../../lib/prisma"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        updated_at: "desc",
      },
    })

    return res.json(
      entries.map((entry: any) => ({
        id: entry.id.toString(),
        body: entry.body,
      }))
    )
  }

  const session = await getSession({ req })
  const { email, name } = session?.user

  if (!session) {
    return res.status(403).send("Unauthorized Request")
  }

  if (req.method === "POST") {
    const newEntry = await prisma.guestbook.create({
      data: {
        email,
        body: (req.body.body || "").slice(0, 500),
        created_by: name,
      },
    })

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
      created_by: newEntry.created_by,
      updated_at: newEntry.updated_at,
    })
  }
}

export default handler
