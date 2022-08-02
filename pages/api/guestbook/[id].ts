import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../lib/prisma"
import { getSession } from "next-auth/react"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession({ req })
  if (!session) return res.status(403).send("UNAUTHORIZED ACCESS")
  const { id } = req.query
  if (req.method === "DELETE") {
    await prisma.guestbook.delete({
      where: { id: Number(id) },
    })
    return res.status(204).json({})
  }
}

export default handler
